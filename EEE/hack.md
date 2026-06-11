---
tags: [exam-strategy, study-hack, EEE-1103, PYQ, high-yield]
created: 2026-06-02
---

# 🎯 EEE-1103 Exam Hacks — Maximum Marks, Minimum Study

> Based on **4 years** of previous year question analysis (2021–2024).
> If you only have limited time, this is your survival guide.

---

## 🔥 The 80/20 Rule for EEE-1103

**80% of the marks come from ~6 topics that appear EVERY SINGLE YEAR.**

If you master just these 6 topics, you can realistically attempt **4 out of 7 questions** (the requirement is "any 5"). That is a safe **pass with good marks** without touching every chapter.

---

## 🏆 The "Non-Negotiable Six" — 100% Appearance Rate

| # | Topic | Why It Matters | Hack |
|---|-------|---------------|------|
| 1 | [[Topic_Thevenins_Theorem]] | Asked **every year**, often 2 sub-parts per paper | Learn the 3-step recipe: (1) Remove load, (2) Find Vth & Rth, (3) Reattach load. Practice 5 circuits. |
| 2 | [[Topic_Nodal_Analysis]] | Asked **every year** + 2024 Incourse | Always pick the bottom node as reference (0V). If there's a voltage source between two non-reference nodes → **supernode**. Write KCL. |
| 3 | [[Topic_Mesh_Analysis]] | Asked **every year** | If a current source is in a mesh → **supermesh**. Combine meshes, write KVL. Always clockwise assumed current. |
| 4 | [[Topic_Maximum_Power_Transfer]] | Asked **every year**, usually a derivation | Formula: `R_L = R_Th` and `P_max = V_Th² / 4R_Th`. Learn the derivation (take dP/dR_L = 0). It's always the same proof. |
| 5 | [[Topic_Delta_Wye_Conversion]] | Asked **every year** | Memorize: `R_Δ = 3R_Y` (balanced) and the 3 general formulas. 80% of questions use balanced networks → instant 5 marks. |
| 6 | [[Topic_AC_Power_Analysis]] | Asked **every year**, multiple sub-parts | Master **RMS formula**, **Average Power = I_rms²R = V_rms²/R**, and **power in inductor = 0**. These three facts cover 90% of AC power questions. |

> **Golden Rule**: If you have only 2 days before the exam, study these 6 topics in this exact order. Do NOT open the textbook for anything else.

---

## 🎲 The "Likely Three" — 75% Appearance Rate (High Risk/Reward)

| # | Topic | Probability | Quick Hack |
|---|-------|-------------|------------|
| 7 | [[Topic_Source_Transformation]] | 3/4 years | Voltage source ↔ Current source: `V = IR` and `R_series = R_parallel`. Just two rules. |
| 8 | [[Topic_Capacitors]] | 3/4 years | Energy: `W = ½CV²`. Series: `1/C_eq = Σ1/C`. Parallel: `C_eq = ΣC`. That's it. |
| 9 | [[Topic_Inductors_and_Electromagnetic_Induction]] | 3/4 years | Energy: `W = ½LI²`. Faraday's Law: `ε = -dΦ/dt`. Input Impedance: `Z = R + j(ωL - 1/ωC)`. Memorize, don't derive during exam. |
| 10 | [[Topic_Superposition_Theorem]] | 3/4 years | Turn off sources one at a time (voltage → short, current → open). Sum results. Very mechanical — easy marks if you don't make sign errors. |
| 11 | [[Topic_Nortons_Theorem]] | 3/4 years | Norton = Thevenin with current source. `I_N = V_Th / R_Th`. If you know Thevenin, Norton is free marks. |

> **Secondary Rule**: Add these 5 topics if you have 3–4 days. They are formula-heavy and low conceptual risk.

---

## 🚫 The "Time Wasters" — Low Yield, Skip Unless You Have Time

| Topic | Last Appeared | Verdict |
|-------|--------------|---------|
| Millman's Theorem | 2021 only | ❌ Skip |
| Reciprocity Theorem | 2021 only | ❌ Skip |
| Substitution Theorem | 2021 only | ❌ Skip |
| Resistance factors derivation (ρL/A) | 2021, 2023 | ⚠️ Low marks, skip if time-constrained |
| Dependent Sources symbols | 2024 only (2 marks) | ⚠️ Too easy to be worth separate study |

> **Reality Check**: These topics cost you 2–4 hours each for a 2-mark question that may not even appear. Not worth it before the exam.

---

## 🧠 Exam-Day Tactics

### 1. The "5 out of 7" Strategy
The paper says "Answer any 5 (Five) of the following Questions."
- There are 7 questions × 14 marks = 98 marks total.
- 5 questions × average 12 marks = ~60 marks attempted.
- **Target**: Secure 4 questions fully (≈48–50 marks) + partial attempt on the 5th (≈4–6 marks) = **Safe 52–56/70 = B+ to A- range.**

### 2. Question Selection Priority
When you open the paper, scan in this order:

```
1. Thevenin's / Norton's / Max Power   ← usually Q4 or Q5
2. Nodal / Mesh Analysis               ← usually Q2 or Q3
3. Delta-Wye / Divider Rules            ← usually Q2 or Q3
4. AC Power / Capacitor / Inductor      ← usually Q6 or Q7
5. KVL / KCL / Basic circuits           ← usually Q1 (low marks, skip if hard)
```

> **Do NOT attempt Q1 first.** Q1 is often basic definitions with low mark density. Leave it for last.

### 3. The "Figures First" Hack
Every numerical question has a figure number (e.g., Fig. 3.2).
- If the figure looks like a **simple ladder or single loop** → fast solve, attempt immediately.
- If the figure has **3+ meshes or 4+ nodes** → time-consuming, attempt only after securing the easy ones.
- If the figure has a **dependent source** → medium difficulty, attempt in round 2.

### 4. Marks-per-Minute Budgeting
- 3 hours = 180 minutes for 70 marks.
- **Target**: 2.5 minutes per mark.
- A 6-mark question gets 15 minutes. A 4-mark question gets 10 minutes.
- If you're stuck on a sub-part for >5 minutes, **skip and come back**. Partial marks > zero marks.

### 5. The Derivation Cheat
For derivation questions (Max Power, Energy in Capacitor/Inductor, VDR/CDR, Faraday's Law):
- **You don't need to understand. You need to reproduce.**
- Write the **statement**, draw the **diagram**, write the **formula**, then **differentiate/integrate** mechanically.
- Even if the final answer is slightly wrong, you get **50–70% of marks** for the setup.

### 6. The "Write Something" Rule
For questions you don't fully know:
- Write the **relevant formula**.
- Write the **definition**.
- Draw the **circuit diagram** (even roughly).
- Attempt **one step** of the solution.
- In Dhaka University engineering exams, **partial marking is generous**. A blank page = 0. A page with formulas and diagrams = 30–50% of marks.

---

## 📅 The 48-Hour Crash Plan

| Time | Action |
|------|--------|
| **Day 1 Morning** | Master Thevenin + Norton (they are the same logic). Do 5 problems. |
| **Day 1 Afternoon** | Master Nodal Analysis. Focus on supernodes. Do 5 problems. |
| **Day 1 Evening** | Master Mesh Analysis. Focus on supermeshes. Do 5 problems. |
| **Day 2 Morning** | Master Delta-Wye + Source Transformation. Memorize formulas. Do 3 problems each. |
| **Day 2 Afternoon** | Master Max Power Transfer derivation + AC Power formulas. Write them out 3 times each. |
| **Day 2 Evening** | Skim [[Master_PYQ_Analysis.md]] for exact phrasing of questions. Read the wording so you're not surprised in the exam. |
| **Exam Morning** | No new topics. Just re-read your formula sheet and the exact questions in the topic notes. |

---

## 📝 The One-Page Cheat Sheet (Memorize This)

```
THEVENIN:  Remove load → Vth = open-circuit voltage → Rth = R seen from terminals (sources killed) → Pmax = Vth²/4Rth
NODAL:     Pick reference → KCL at each node → supernode if voltage source between two nodes
MESH:      Assume clockwise → KVL around each mesh → supermesh if current source shared
DELTA-Y:   RΔ = 3RY (balanced) | RY = (R1R2 + R2R3 + R3R1)/R_opposite
SOURCE:    V→I: IN = V/R, R same | I→V: VN = IR, R same
AC POWER:  Irms = I0/√2 | Pavg = Irms²R | PL = 0 (pure L) | PC = 0 (pure C)
ENERGY:    Capacitor: ½CV² | Inductor: ½LI²
FARADAY:   ε = -N(dΦ/dt) | Φ = BA
```

---

## 🔗 Related Resources

- [[Master_PYQ_Analysis.md]] — Full topic frequency ranking
- [[Topic_Thevenins_Theorem]] — Exact past questions
- [[Topic_Nodal_Analysis]] — Exact past questions
- [[Topic_Mesh_Analysis]] — Exact past questions
- [[Topic_Maximum_Power_Transfer]] — Exact past questions
- [[Topic_Delta_Wye_Conversion]] — Exact past questions
- [[Topic_AC_Power_Analysis]] — Exact past questions

---

*Remember: Engineering exams reward pattern recognition more than deep understanding. The person who practiced 20 PYQ-style problems beats the person who read the textbook cover-to-cover.*

**Good luck. Now go solve circuits, not read about them.** ⚡
