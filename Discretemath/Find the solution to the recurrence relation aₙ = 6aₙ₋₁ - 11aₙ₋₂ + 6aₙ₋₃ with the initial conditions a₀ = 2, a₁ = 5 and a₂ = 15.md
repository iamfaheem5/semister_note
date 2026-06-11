Here's a complete step-by-step walkthrough. I'll build it up in clear stages so each concept is digestible before the next.

---

## What is a recurrence relation?

It's a formula that defines each term using the ones before it. We need to find a **closed-form** solution  a direct formula for $a_n$ using only $n$, no previous terms needed.

---

## Step 1: Write the Characteristic Equation

For a recurrence like $a_n = 6a_{n-1} - 11a_{n-2} + 6a_{n-3}$, we assume the solution looks like $a_n = r^n$ for some unknown $r$. Substituting this in:

$$r^n = 6r^{n-1} - 11r^{n-2} + 6r^{n-3}$$

Divide everything by $r^{n-3}$:

$$r^3 = 6r^2 - 11r + 6$$

This is the **characteristic equation**:

$$r^3 - 6r^2 + 11r - 6 = 0$$

---

## Step 2: Solve the Characteristic Equation

We need to factor $r^3 - 6r^2 + 11r - 6$. Try $r = 1$: $1 - 6 + 11 - 6 = 0$ ✓

Factor out $(r - 1)$, then factor the rest:

$$r^3 - 6r^2 + 11r - 6 = (r-1)(r^2 - 5r + 6) = (r-1)(r-2)(r-3)$$

**The three roots are: $r_1 = 1,\ r_2 = 2,\ r_3 = 3$** (all distinct)

---

## Step 3: Write the General Solution

When you have 3 distinct roots, the general solution is always:

$$a_n = A \cdot r_1^n + B \cdot r_2^n + C \cdot r_3^n$$

Plugging in our roots:

$$a_n = A \cdot 1^n + B \cdot 2^n + C \cdot 3^n = A + B \cdot 2^n + C \cdot 3^n$$

Now we need to find the constants $A$, $B$, and $C$ using the initial conditions.

---

## Step 4: Apply the Initial Conditions

Plug in $n = 0, 1, 2$:

- $a_0 = 2$: $\quad A + B + C = 2$
- $a_1 = 5$: $\quad A + 2B + 3C = 5$
- $a_2 = 15$: $\quad A + 4B + 9C = 15$

Now solve this system. Subtract equation 1 from equation 2:

$$B + 2C = 3 \quad \text{...(i)}$$

Subtract equation 2 from equation 3:

$$2B + 6C = 10 \implies B + 3C = 5 \quad \text{...(ii)}$$

Subtract (i) from (ii): $\quad C = 2$

Back-substitute into (i): $\quad B + 4 = 3 \implies B = -1$

Back-substitute into equation 1: $\quad A - 1 + 2 = 2 \implies A = 1$

---

## Final Answer

$$\boxed{a_n = 1 - 2^n + 2 \cdot 3^n}$$

Let's verify: $a_0 = 1 - 1 + 2 = 2$ ✓, $a_1 = 1 - 2 + 6 = 5$ ✓, $a_2 = 1 - 4 + 18 = 15$ ✓The key takeaway is the **3-step recipe** for any linear recurrence with constant coefficients:

1. Form the characteristic equation by substituting $r^n$
2. Solve for the roots
3. Write $a_n$ as a linear combination of $r^n$ terms, then solve for the constants using initial conditions