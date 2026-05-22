# Rules of Inference & Proof Methods

> **Priority: MEDIUM** | Appears every year (2018-2024)  
> **Frequency:** ~8 sub-question appearances across 7 years  
> **Related topics:** Propositional Logic, Predicate Logic

---

## Core Concepts Tested
- Rules of Inference — definition with examples
- Identifying which rule of inference is used in an argument
- Using rules of inference to show premises lead to conclusion
- Proof by Contraposition
- Direct proof and Indirect proof (mentioned in older papers)
- Argument and Fallacy
- Corollary vs Conjecture

---

## Exact Questions Appeared

### Rules of Inference — Definition with Examples
> **Years:** 2021, 2023

**2021 Q2(c):**
> Define Rules of Inference. Briefly describe it with proper examples.

**2023 Q4(b):**
> By using the Rules of Inference show that the premises lead to the conclusion. (Premises: "It is sunny this afternoon and it is colder than yesterday", "We will go swimming only if it is sunny", "If we do not go swimming, then we will take a canoe trip, and "If we take a canoe trip, then we will be home by sunset".)

---

### Identify Rule of Inference
> **Years:** 2022

**2022 Q1(d):**
> Determine which rule of inference is used in the following arguments: "If it rains today, then we will not have a barbecue today. If we do not have a barbecue today, then we will have a barbecue tomorrow. Therefore, if it rains today, then we will have a barbecue tomorrow."

---

### Proof by Contraposition
> **Years:** 2023, 2024

**2023 Q4(c):**
> Differentiate between Corollary and Conjecture. By using proof by Contraposition, prove that: "If n is an integer and 3n+2 is odd, then n is odd".

**2024 Q7(c):**
> What are argument and fallacy? Using Contraposition, prove that: "If n is an integer and 3n+2 is odd, then n is odd".

**Frequency:** 2 times (identical theorem)

---

### Direct / Indirect Proof (mentioned)
> **Years:** 2018

**2018 Q2(b):**
> What is a Propositional Calculus? Find the direct and indirect proof of p → (q → s).

---

### Rules of Inference Argument Chain
> **Years:** 2022, 2023

**2022 Q6(c):**
> Show that the premises "It is not sunny this afternoon and it is colder than yesterday," "We will go swimming only if it is sunny," "If we do not go swimming, then we will take a canoe trip," and "If we take a canoe trip, then we will be home by sunset" lead to the conclusion "We will be home by sunset."

**2023 Q4(b):**
> By using the Rules of Inference show that the premises lead to the conclusion. (Same premises as 2022.)

**Frequency:** 2 times (identical premises/conclusion)

---

## Study Notes
- **The "canoe trip" argument** has appeared twice (2022, 2023) with identical premises. This is a classic modus tollens / hypothetical syllogism chain:
  1. ¬Sunny ∧ Cold (simplification to ¬Sunny)
  2. Swim → Sunny (contrapositive: ¬Sunny → ¬Swim)
  3. ¬Swim → Canoe
  4. Canoe → Home
  5. Therefore: Home (by hypothetical syllogism)
- **Proof by contraposition** of "If 3n+2 is odd, then n is odd" appeared twice (2023, 2024):
  - Contrapositive: If n is even, then 3n+2 is even.
  - Let n = 2k. Then 3(2k)+2 = 6k+2 = 2(3k+1), which is even.
- Memorize major rules: Modus Ponens, Modus Tollens, Hypothetical Syllogism, Disjunctive Syllogism, Addition, Simplification, Conjunction, Resolution.

---

#Tags #DiscreteMath #RulesOfInference #ProofMethods #Contraposition #PastQuestions
