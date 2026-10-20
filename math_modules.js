/* Math question bank: hand-picked strictest Hard questions (16), from "SAT questions.txt".
   Chosen by reading each item: multi-step (systems with a parameter, quadratics with a
   constraint, polynomial remainder and factor reasoning, free response with a hidden step).
   Text was rewritten by hand to fix lost formatting; answers were checked by working them out.
   Difficulty is an estimate, not an official label. */
const MATH_MODULES = {
  "mathhard01": [
    {
      "id": "mhard_01", "domain": "Advanced Math", "skill": "Systems of Equations", "difficulty": "Hard",
      "is_mc": true, "page": null,
      "question": "The system of equations below has exactly one real solution. In the system, a is a constant. y = −3 and y = ax² + 4x − 4. For which of the following values of a does the system of equations have exactly one real solution?",
      "choices": ["−4", "−2", "2", "4"], "answer_idx": 0, "answer_raw": ""
    },
    {
      "id": "mhard_02", "domain": "Advanced Math", "skill": "Systems of Equations", "difficulty": "Hard",
      "is_mc": true, "page": null,
      "question": "y = −3 and y = x² + cx. In the system of equations above, c is a constant. For which of the following values of c does the system of equations have exactly two real solutions?",
      "choices": ["−4", "1", "2", "3"], "answer_idx": 0, "answer_raw": ""
    },
    {
      "id": "mhard_03", "domain": "Advanced Math", "skill": "Systems of Equations", "difficulty": "Hard",
      "is_mc": true, "page": null,
      "question": "The line y = 2x + b intersects the parabola y = x² + bx + 5 at the point (3, k). If b is a constant, what is the value of k?",
      "choices": ["0", "1", "2", "3"], "answer_idx": 2, "answer_raw": ""
    },
    {
      "id": "mhard_04", "domain": "Advanced Math", "skill": "Systems of Equations", "difficulty": "Hard",
      "is_mc": true, "page": null,
      "question": "x² + y² = 416 and y + 5x = 0. If (x, y) is a solution to the system of equations above and x > 0, what is the value of the difference x − y?",
      "choices": ["4", "16", "20", "24"], "answer_idx": 3, "answer_raw": ""
    },
    {
      "id": "mhard_05", "domain": "Advanced Math", "skill": "Nonlinear Equations", "difficulty": "Hard",
      "is_mc": false, "page": null,
      "question": "If x > 0 and 3x² + 14x − 5 = 0, what is the value of x?",
      "choices": [], "answer_idx": null, "answer_raw": "1/3"
    },
    {
      "id": "mhard_06", "domain": "Advanced Math", "skill": "Nonlinear Equations", "difficulty": "Hard",
      "is_mc": true, "page": null,
      "question": "A hiker walks at a speed of x/2 miles per hour for x + 2 hours. He then reaches a mountain, where he hikes for 3 additional hours at half of his original speed. If the hiker walks a total of 15 miles, which equation can be used to find the value of x?",
      "choices": ["x² + 5x − 30 = 0", "x² + 5x − 15 = 0", "2x² + 7x − 56 = 0", "2x² + 7x − 60 = 0"], "answer_idx": 3, "answer_raw": ""
    },
    {
      "id": "mhard_07", "domain": "Advanced Math", "skill": "Nonlinear Equations", "difficulty": "Hard",
      "is_mc": true, "page": null,
      "question": "If (ax + 4)(bx + 5) = 6x² + cx + 20 for all values of x, and a + b = 5, what are two possible values for c?",
      "choices": ["2 and 3", "8 and 15", "10 and 12", "22 and 23"], "answer_idx": 3, "answer_raw": ""
    },
    {
      "id": "mhard_08", "domain": "Advanced Math", "skill": "Nonlinear Equations", "difficulty": "Hard",
      "is_mc": true, "page": null,
      "question": "(x + a)(x + b) = x² + cx − 7. In the equation above, a, b, and c are integers and the equation is true for all values of x. What are two possible values for c?",
      "choices": ["−1 and 7", "−1 and −7", "−6 and 6", "−8 and 8"], "answer_idx": 2, "answer_raw": ""
    },
    {
      "id": "mhard_09", "domain": "Advanced Math", "skill": "Nonlinear Functions", "difficulty": "Hard",
      "is_mc": true, "page": null,
      "question": "The functions f(x) = −x² + 8x − 7 and g(x) = x² − 8x + 17 are graphed in the xy-plane. The graphs of f and g intersect at the points (a, k) and (b, k). What is the value of k?",
      "choices": ["2", "5", "6", "7"], "answer_idx": 1, "answer_raw": ""
    },
    {
      "id": "mhard_10", "domain": "Advanced Math", "skill": "Nonlinear Equations", "difficulty": "Hard",
      "is_mc": true, "page": null,
      "question": "Which of the following equations has NO real solutions? I. x² + 7x − 3 = 0 II. 4x² + 4x + 1 = 0 III. x² + 2x + 5 = 0",
      "choices": ["I only", "II only", "III only", "I and II"], "answer_idx": 2, "answer_raw": ""
    },
    {
      "id": "mhard_11", "domain": "Advanced Math", "skill": "Nonlinear Equations", "difficulty": "Hard",
      "is_mc": true, "page": null,
      "question": "If k is a positive integer less than 17, what is the total number of possible integer solutions for the equation x² + 8x + k = 0?",
      "choices": ["5", "6", "7", "8"], "answer_idx": 2, "answer_raw": ""
    },
    {
      "id": "mhard_12", "domain": "Advanced Math", "skill": "Nonlinear Functions", "difficulty": "Hard",
      "is_mc": true, "page": null,
      "question": "For a polynomial p(x), the value of p(3) is −2. Which of the following must be true about p(x)?",
      "choices": ["x − 5 is a factor of p(x).", "x − 2 is a factor of p(x).", "x + 2 is a factor of p(x).", "The remainder when p(x) is divided by x − 3 is −2."], "answer_idx": 3, "answer_raw": ""
    },
    {
      "id": "mhard_13", "domain": "Advanced Math", "skill": "Nonlinear Functions", "difficulty": "Hard",
      "is_mc": true, "page": null,
      "question": "The graph of y = ax² + bx + c passes through the points (1, −8), (2, −1), (3, 4), and (5, 8). If the maximum value of y occurs at x = 5, through which other point must the graph of y pass?",
      "choices": ["(4, 6)", "(6, 4)", "(8, −1)", "(10, −8)"], "answer_idx": 2, "answer_raw": ""
    },
    {
      "id": "mhard_14", "domain": "Advanced Math", "skill": "Nonlinear Functions", "difficulty": "Hard",
      "is_mc": true, "page": null,
      "question": "(3x + 2)(ax + b) = cx² + d. In the equation above, a, b, c, and d are nonzero integers and the equation is true for all values of x. Which of the following MUST be negative?",
      "choices": ["a", "b", "a + b", "ab"], "answer_idx": 3, "answer_raw": ""
    },
    {
      "id": "mhard_15", "domain": "Advanced Math", "skill": "Nonlinear Functions", "difficulty": "Hard",
      "is_mc": false, "page": null,
      "question": "x⁴ − 18x² + 81 = 0. For what real, positive value of x is the equation above true?",
      "choices": [], "answer_idx": null, "answer_raw": "3"
    },
    {
      "id": "mhard_16", "domain": "Advanced Math", "skill": "Nonlinear Functions", "difficulty": "Hard",
      "is_mc": false, "page": null,
      "question": "x³ − 7x² + 3x − 21 = 0. For what real value of x is the equation above true?",
      "choices": [], "answer_idx": null, "answer_raw": "7"
    }
  ]
};
