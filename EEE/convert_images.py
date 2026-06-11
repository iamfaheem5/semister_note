import fitz
import os

pdf_dir = 'previous'
img_dir = 'page_images'
os.makedirs(img_dir, exist_ok=True)

files = [
    'EEE-1103_Incourse_1_Questions_2024.pdf',
    'EEE-1103_Semester_Final_Questions_2021.pdf',
    'EEE-1103_Semester_Final_Questions_2022.pdf',
    'EEE-1103_Semester_Final_Questions_2023.pdf',
    'EEE-1103_Semester_Final_Questions_2024.pdf',
    'EEE-1103_Semester_Final_Questions_21-23_Theory.pdf',
]

log = []
for fname in files:
    path = os.path.join(pdf_dir, fname)
    if not os.path.exists(path):
        log.append(f'MISSING: {fname}')
        continue
    doc = fitz.open(path)
    for i in range(doc.page_count):
        page = doc.load_page(i)
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
        base = fname.replace('.pdf', '')
        img_name = f'{base}_page_{i+1}.png'
        pix.save(os.path.join(img_dir, img_name))
        log.append(img_name)
    doc.close()

for l in log:
    print(l)
print(f'Total images: {len(log)}')
