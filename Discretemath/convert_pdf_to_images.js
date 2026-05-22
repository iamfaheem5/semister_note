// Minimal DOMMatrix polyfill for pdfjs-dist in Node.js
class DOMMatrix {
  constructor(init) {
    this.a = 1; this.b = 0; this.c = 0; this.d = 1; this.e = 0; this.f = 0;
    if (Array.isArray(init) && init.length >= 6) {
      this.a = init[0]; this.b = init[1]; this.c = init[2];
      this.d = init[3]; this.e = init[4]; this.f = init[5];
    }
  }
  multiply(other) {
    return new DOMMatrix([
      this.a * other.a + this.c * other.b,
      this.b * other.a + this.d * other.b,
      this.a * other.c + this.c * other.d,
      this.b * other.c + this.d * other.d,
      this.a * other.e + this.c * other.f + this.e,
      this.b * other.e + this.d * other.f + this.f
    ]);
  }
  translate(x, y) {
    return this.multiply(new DOMMatrix([1, 0, 0, 1, x, y]));
  }
  scale(x, y) {
    return this.multiply(new DOMMatrix([x, 0, 0, y, 0, 0]));
  }
  rotate(angle) {
    const c = Math.cos(angle), s = Math.sin(angle);
    return this.multiply(new DOMMatrix([c, s, -s, c, 0, 0]));
  }
  inverse() {
    const det = this.a * this.d - this.b * this.c;
    if (Math.abs(det) < 1e-10) return new DOMMatrix();
    return new DOMMatrix([
      this.d / det, -this.b / det,
      -this.c / det, this.a / det,
      (this.c * this.f - this.d * this.e) / det,
      (this.b * this.e - this.a * this.f) / det
    ]);
  }
}
if (typeof globalThis.DOMMatrix === 'undefined') {
  globalThis.DOMMatrix = DOMMatrix;
}

const { createCanvas } = require('@napi-rs/canvas');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.mjs');
const fs = require('fs');
const path = require('path');

// Custom canvas factory for pdfjs-dist using napi-rs canvas
class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    return {
      canvas,
      context,
    };
  }
}

const outputDir = 'pdf_images';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

async function convertPdfToImages(pdfPath) {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjsLib.getDocument({ data, useSystemFonts: true, disableWorker: true }).promise;
  
  const basename = path.basename(pdfPath, '.pdf');
  console.log(`Processing ${basename}: ${pdf.numPages} pages`);
  
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const scale = 2.0;
    const viewport = page.getViewport({ scale });
    
    const canvasFactory = new NodeCanvasFactory();
    const canvasAndContext = canvasFactory.create(viewport.width, viewport.height);
    
    const renderContext = {
      canvasContext: canvasAndContext.context,
      viewport: viewport,
    };
    
    await page.render(renderContext).promise;
    
    const image = await canvasAndContext.canvas.encode('png');
    const outputPath = path.join(outputDir, `${basename}_page${i}.png`);
    fs.writeFileSync(outputPath, image);
    console.log(`Saved: ${outputPath}`);
    
    page.cleanup();
  }
}

(async () => {
  const pdfFiles = fs.readdirSync('.').filter(f => f.endsWith('.pdf'));
  for (const pdfFile of pdfFiles) {
    await convertPdfToImages(pdfFile);
  }
  console.log('Done!');
})();
