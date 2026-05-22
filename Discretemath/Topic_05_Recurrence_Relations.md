# Recurrence Relations

> **Priority: HIGH** | Appears every year (2018-2024)  
> **Frequency:** ~16 sub-question appearances across 7 years  
> **Related topics:** Functions, Sequences, Discrete structures

---

## Core Concepts Tested
- Definition of recursion / recurrence relation
- Obtaining recurrence relation from closed-form expression
- Solving linear homogeneous recurrence relations (characteristic equation method)
- Solving by substitution method
- Specific numerical recurrence: aₙ = 6aₙ₋₁ - 11aₙ₋₂ + 6aₙ₋₃

---

## Exact Questions Appeared

### The "Classic" Recurrence (aₙ = 6aₙ₋₁ - 11aₙ₋₂ + 6aₙ₋₃)
> **Appears 6 out of 7 years — THE most repeated numerical problem in the entire syllabus.**

**Exact wording:**
> **"Find the solution to the recurrence relation aₙ = 6aₙ₋₁ - 11aₙ₋₂ + 6aₙ₋₃ with the initial conditions a₀ = 2, a₁ = 5 and a₂ = 15."**

- **2019 Q2(c)**
- **2020 Q2(c)**
- **2021 Q7(b)**
- **2022 Q2(c)**
- **2023 Q5(b)** (embedded in a larger question)
- **2024 Q6(a)**

**Frequency:** 6 times out of 7 years (missing only in 2018)

---

### Recursion Definition + f(4) Problem
> **Appears 5 out of 7 years**

**Exact wording:**
> **"What is recursion? A function f is defined recursively by f(0) = 3, f(n+1) = 2f(n) + 3. Find the value of f(4)."**

- **2019 Q2(a)**
- **2020 Q2(a)**
- **2021 Q7(a)**
- **2022 Q2(a)**
- **2024 Q5(b)** (slightly different embedding)

**Frequency:** 5 times

---

### Obtain Recurrence from G(k) = 2·4ᵏ - 5(-3)ᵏ
> **Appears 4 out of 7 years**

**Exact wording:**
> **"What is recurrence relation? Obtain the recurrence relation for: G(k) = 2.4ᵏ - 5(-3)ᵏ."**

- **2018 Q2(a)**
- **2019 Q2(b)**
- **2020 Q2(b)**
- **2022 Q2(b)**

**Frequency:** 4 times

---

### Substitution Method
> **Appears 2 out of 7 years**

**2021 Q7(c):**
> What is recurrence relation? Find the recurrence solution for the following recurrence relation using substitution method: aₙ = aₙ₋₁ + 3, n ≥ 2 and a₀ = 2 for n = 1.

**2023 Q6(a):**
> Find the recurrence solution for the following recurrence relation using substitution method: aₙ = aₙ₋₁ + 3, n ≥ 2 and a₀ = 2 for n = 1.

**Frequency:** 2 times (identical wording)

---

## Study Notes
- **The aₙ = 6aₙ₋₁ - 11aₙ₋₂ + 6aₙ₋₃ problem is ESSENTIAL.** This exact problem with the exact same initial conditions has appeared 6 times. The characteristic equation is r³ - 6r² + 11r - 6 = 0, which factors as (r-1)(r-2)(r-3) = 0, giving roots r = 1, 2, 3.
  - General solution: aₙ = α₁(1)ⁿ + α₂(2)ⁿ + α₃(3)ⁿ
  - Using a₀=2, a₁=5, a₂=15: Solve for α₁, α₂, α₃.
- **G(k) = 2·4ᵏ - 5(-3)ᵏ** → Obtain recurrence by noting roots 4 and -3. Characteristic equation: (r-4)(r+3) = r² - r - 12 = 0 → G(k) = G(k-1) + 12G(k-2).
- **Substitution method** for aₙ = aₙ₋₁ + 3 is straightforward iterative unrolling.
- **f(4) recursion**: f(0)=3, f(1)=9, f(2)=21, f(3)=45, f(4)=93.

---

#Tags #DiscreteMath #RecurrenceRelations #HighPriority #MustKnow #PastQuestions
