
````
# Previous Year Question Paper Analyzer — Obsidian Vault Integration

## Context & Environment
- **Working directory**: An Obsidian vault (treat all output as Obsidian-compatible Markdown)
- **Input**: All PDF files in the current directory are **image-based** previous year exam papers
- **Vision engine**: Convert each PDF page to an image first, then pass to **Kimi's built-in vision** for text extraction — do NOT use any text-layer extraction (there is none)

---

## Your Task Pipeline

### Step 1 — PDF → Image Conversion
For every `.pdf` file in this directory:
1. Convert **each page** to a high-resolution image (PNG preferred, ≥150 DPI)
2. Name images systematically: `{filename}_page_{n}.png`
3. Log which files were processed and how many pages each had

---

### Step 2 — Vision-Based Text Extraction (Kimi)
Pass each page image through **Kimi's built-in vision** to:
- Extract the **full text** of every question exactly as written
- Preserve question numbering, sub-parts (a, b, c…), and marks allocations if visible
- Note the **source file** and **page number** for every extracted question
- Flag any pages where extraction confidence is low

---

### Step 3 — Topic Identification & Frequency Ranking
After extracting all questions:
1. **Cluster** questions into topics/subtopics (group similar concepts together)
2. **Count** how many times each topic appeared across all years
3. **Rank topics** from most frequent → least frequent
4. For each topic, also note **which years** it appeared in (trend awareness)

Output format for the ranking:

```
| Rank | Topic | Times Appeared | Years |
|------|-------|---------------|-------|
| 1    | ...   | 8             | 2019, 2020, 2022, 2023... |
```

---

### Step 4 — Question Catalog Under Each Topic
Under every topic, list the **exact questions** as they appeared (word-for-word from extraction), tagged with year and marks:

```
### Topic: [Topic Name] — appeared X times

- **[Year] | [Marks]**: "Exact question text as it appeared in the paper."
- **[Year] | [Marks]**: "..."
```

---

### Step 5 — Individual Topic Notes (One File Per Topic)
For **every topic** identified, create a **dedicated Obsidian note** 
should follow this format 

# {{Topic Name}}

## 📈 Exam Frequency
- **Rank**: #{{rank}} most frequent topic
- **Appeared**: {{count}} times across {{n}} years
- **Years**: {{year list}}
- **Trend**: ↑ Increasing / ↓ Decreasing / → Stable

---

## 📝 Exact Questions Asked

### {{Year}}
- **Q{{n}} [{{marks}} marks]**: "Exact question text here."
  - Sub-part (a): "..."
  - Sub-part (b): "..."

### {{Year}}
- **Q{{n}} [{{marks}} marks]**: "Exact question text here."

---

## 🔗 Related Topics
[[Topic_X]] | [[Topic_Y]] | [[Topic_Z]]

---

## 🗂️ Source References
| Year | File | Page |
|------|------|------|
| 2022 | paper_2022.pdf | 3 |
| 2023 | paper_2023.pdf | 1, 5 |
```

**Rules for topic notes:**
- File names must be `Topic_{{sanitized_topic_name}}.md` (no spaces, no special characters)
- Every question must be **word-for-word** from the extraction — no paraphrasing
- `related-topics` in frontmatter must use valid `[[wikilinks]]` to other topic files
- If a topic has sub-topics, create **nested H3 sections** within the same file (do not split into separate files)

---

### Step 6 — Master Index File
Create a single file: `📄 Master_PYQ_Analysis.md` in the vault root.

Structure it as the **central hub** that links to all topic notes:

```markdown
---
tags: [PYQ, exam-analysis, master-index]
created: {{date}}
---

# 📊 Master Previous Year Question Analysis

## Topic Frequency Rankings
| Rank | Topic | Times Appeared | Years | Note |
|------|-------|---------------|-------|------|
| 1    | Thermodynamics | 8 | 2018–2024 | [[Topic_Thermodynamics]] |
| 2    | ...            | 6 | ...       | [[Topic_...]]            |

## 🗂️ Source Index
(Map of: filename → year → pages → topics covered)

## ⚠️ Extraction Notes
(Any pages with low confidence or parsing issues)
```

**Every topic row in the master table must link to its individual note via `[[wikilinks]]`.**
This turns the master file into a navigable Obsidian MOC (Map of Content).

---

## Final Output Checklist
Before finishing, confirm:
- [ ] All PDFs in the directory were processed
- [ ] Every page was passed through Kimi vision
- [ ] All questions are tagged with source year + marks
- [ ] Topics are ranked by frequency (descending)
- [ ] `/PYQ_Topics/` folder exists with **one `.md` file per topic**
- [ ] Every topic note has correct frontmatter, exact questions, and wikilinks
- [ ] `Master_PYQ_Analysis.md` is saved in the vault root and links to all topic notes
- [ ] All filenames are sanitized (no spaces or special characters)
- [ ] The entire structure is valid, navigable Obsidian Markdown
````

---
