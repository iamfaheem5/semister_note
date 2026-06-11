
---

## Solving by the Substitution Method

The idea is simple: **keep substituting the formula into itself**, look for a pattern, then write a general expression.

---

### Given

$$a_n = a_{n-1} + 3, \quad a_1 = 2 \quad (n \geq 2), n=1 $$

> Note: The initial condition here is $a_1 = 2$ (not $a_0$), because the relation starts at $n \geq 2$.

---

### Step 1 — Substitute repeatedly (forward substitution)

Write out what the formula says for each step:

$$a_n = a_{n-1} + 3$$

Now replace $a_{n-1}$ using the same rule: $a_{n-1} = a_{n-2} + 3$

$$a_n = (a_{n-2} + 3) + 3 = a_{n-2} + 2 \cdot 3$$

Replace $a_{n-2} = a_{n-3} + 3$:

$$a_n = (a_{n-3} + 3) + 2 \cdot 3 = a_{n-3} + 3 \cdot 3$$

---

### Step 2 — Spot the pattern

After $k$ substitutions, the pattern is clearly:

$$a_n = a_{n-k} + k \cdot 3$$

---

### Step 3 — Stop at the initial condition

We know $a_1 = 2$. We reach $a_1$ when $n - k = 1$, (  it is given in the question n= 1  ) i.e., $k = n - 1$.

Substitute $k = n - 1$: 

$$a_n = a_{n-(n-1)} + (n-1) \cdot 3$$

$$a_n = a_1 + 3(n-1)$$

$$a_n = 2 + 3(n-1)$$

$$\boxed{a_n = 3n - 1}$$

---

### Step 4 — Verify the answer

|$n$|Using recurrence $a_n = a_{n-1}+3$|Using formula $3n-1$|
|---|---|---|
|1|$a_1 = 2$ (given)|$3(1)-1 = 2$ ✓|
|2|$2 + 3 = 5$|$3(2)-1 = 5$ ✓|
|3|$5 + 3 = 8$|$3(3)-1 = 8$ ✓|
|4|$8 + 3 = 11$|$3(4)-1 = 11$ ✓|

The substitution method has exactly **3 steps** every time:

1. **Substitute** the formula into itself repeatedly
2. **Spot** the pattern after $k$ steps → write $a_n = a_{n-k} + k \cdot(\text{constant})$
3. **Stop** at the initial condition by setting $n - k$ equal to the base index, then solve