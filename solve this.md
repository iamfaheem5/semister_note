.2**.

---

### 1. Identify Nodes & Variables
- Let the bottom wire be the **reference node (0 V)**.
- Unknown node voltages: **V₁, V₂, V₃**.
- The current **iₓ** is defined downward through the 4 Ω resistor:
  \[
  i_x = \frac{V_2}{4}
  \]

### 2. KCL at Node 1
The 10 A source **enters** Node 1.  
Currents leaving Node 1:
\[
10 = \frac{V_1-V_2}{3} + \frac{V_1-V_3}{2}
\]
Multiply by 6:
\[
\boxed{5V_1 - 2V_2 - 3V_3 = 60} \quad \text{...(1)}
\]

### 3. KCL at Node 2
The dependent source **4iₓ is directed from Node 3 → Node 2** (arrow points left).  
So current **leaving** Node 2 toward Node 3 is **–4iₓ**.

\[
\frac{V_2-V_1}{3} + \frac{V_2}{4} - 4i_x = 0
\]

Substitute \(i_x = \dfrac{V_2}{4}\):
\[
\frac{V_2-V_1}{3} + \frac{V_2}{4} - V_2 = 0
\]

\[
\frac{V_2-V_1}{3} - \frac{3V_2}{4} = 0
\]

Multiply by 12:
\[
4(V_2-V_1) - 9V_2 = 0 \;\Rightarrow\; \boxed{4V_1 + 5V_2 = 0} \quad \text{...(2)}
\]

### 4. KCL at Node 3
Current **leaving** Node 3 through the dependent source is **+4iₓ** (because it flows from Node 3 to Node 2).

\[
\frac{V_3-V_1}{2} + \frac{V_3}{6} + 4i_x = 0
\]

Substitute \(i_x = \dfrac{V_2}{4}\):
\[
\frac{V_3-V_1}{2} + \frac{V_3}{6} + V_2 = 0
\]

Multiply by 6:
\[
3(V_3-V_1) + V_3 + 6V_2 = 0
\]

\[
\boxed{3V_1 = 6V_2 + 4V_3} \quad \text{...(3)}
\]

---

### 5. Solve the System
From **(2)**:
\[
V_1 = -\frac{5}{4}V_2
\]

Put into **(3)**:
\[
3\left(-\frac{5}{4}V_2\right) = 6V_2 + 4V_3
\;\Rightarrow\;
-\frac{39}{4}V_2 = 4V_3
\;\Rightarrow\;
V_3 = -\frac{39}{16}V_2
\]

Put \(V_1\) and \(V_3\) into **(1)**:
\[
5\left(-\frac{5}{4}V_2\right) - 2V_2 - 3\left(-\frac{39}{16}V_2\right) = 60
\]

\[
-\frac{25}{4}V_2 - 2V_2 + \frac{117}{16}V_2 = 60
\;\Rightarrow\;
-\frac{15}{16}V_2 = 60
\]

\[
\boxed{V_2 = -64\ \text{V}}
\]

Back-substitute:
\[
V_1 = -\frac{5}{4}(-64) = \boxed{80\ \text{V}}
\]

\[
V_3 = -\frac{39}{16}(-64) = \boxed{156\ \text{V}}
\]

---

### Final Answer
\[
\boxed{V_1 = 80\ \text{V},\quad V_2 = -64\ \text{V},\quad V_3 = 156\ \text{V}}
\]

(For reference: \(i_x = \dfrac{V_2}{4} = -16\ \text{A}\), meaning the actual current through the 4 Ω resistor flows **upward**.)
