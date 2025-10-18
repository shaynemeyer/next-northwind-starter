# Claude Code Workshop Demo Scripts

## Demo 1: Quick Introduction Demo (5 minutes)
**Goal:** Show the basic workflow and agentic capabilities

### Setup
Create a simple Express API with a basic endpoint:

```javascript
// app.js
const express = require('express');
const app = express();

app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  // Simulating database call
  const user = { id: userId, name: 'John Doe', email: 'john@example.com' };
  res.json(user);
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### Demo Script

**Say to audience:**
"Let's see Claude Code in action. I have a simple API endpoint that returns user data, but it has no error handling. Let me ask Claude Code to improve it."

**Command to run:**
```bash
claude-code "Add proper error handling to the /api/users/:id endpoint. Handle invalid IDs, add try-catch blocks, and return appropriate HTTP status codes."
```

**What to highlight:**
- Claude Code reads the file automatically
- It understands the context and makes multiple improvements
- It adds validation, error handling, and proper status codes
- Show the diff of changes
- Mention: "Notice I didn't tell it which file to edit - it figured that out"

**Expected outcome:**
Claude Code will add input validation, try-catch blocks, 404 responses for invalid users, and proper error status codes.

---

## Demo 2: Multi-File Feature Addition (10 minutes)
**Goal:** Show how Claude Code handles complex, multi-file tasks

### Setup
Create a simple todo app structure:

```
todo-app/
├── app.js (Express server)
├── routes/
│   └── todos.js (basic CRUD routes)
├── models/
│   └── todo.js (in-memory todo storage)
└── package.json
```

```javascript
// app.js
const express = require('express');
const todoRoutes = require('./routes/todos');
const app = express();

app.use(express.json());
app.use('/api/todos', todoRoutes);

app.listen(3000, () => console.log('Server running'));
```

```javascript
// routes/todos.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', (req, res) => {
  res.json(Todo.getAll());
});

router.post('/', (req, res) => {
  const todo = Todo.create(req.body);
  res.status(201).json(todo);
});

module.exports = router;
```

```javascript
// models/todo.js
let todos = [];
let nextId = 1;

module.exports = {
  getAll: () => todos,
  create: (data) => {
    const todo = { id: nextId++, ...data, completed: false };
    todos.push(todo);
    return todo;
  }
};
```

### Demo Script

**Say to audience:**
"Now let's add a more complex feature. I want to add user authentication so each user has their own todos. This will require changes across multiple files."

**Command to run:**
```bash
claude-code "Add user authentication to this todo app. Each user should have their own todos. Add a simple auth middleware that checks for a user ID in headers, update the todo model to associate todos with users, and modify the routes to filter todos by user. Keep it simple - no passwords needed, just user identification."
```

**What to highlight:**
- Claude Code identifies all files that need changes
- It maintains consistency across the codebase
- Watch it create/modify: middleware, model updates, route changes
- It understands the relationships between files
- Pause to explain: "See how it's thinking through the architecture?"

**Expected outcome:**
- New middleware file for auth
- Todo model updated with userId field
- Routes updated to use auth middleware
- Todos filtered by user

---

## Demo 3: Debugging & Iteration (8 minutes)
**Goal:** Show how Claude Code can debug and fix issues iteratively

### Setup
Create a buggy calculator function:

```javascript
// calculator.js
function calculateDiscount(price, discountPercent) {
  const discount = price * discountPercent;
  return price - discount;
}

function calculateTax(price, taxRate) {
  return price * taxRate;
}

function calculateTotal(price, discountPercent, taxRate) {
  const discountedPrice = calculateDiscount(price, discountPercent);
  const tax = calculateTax(price, taxRate);
  return discountedPrice + tax;
}

module.exports = { calculateDiscount, calculateTax, calculateTotal };
```

```javascript
// calculator.test.js
const { calculateTotal } = require('./calculator');

describe('Calculator', () => {
  test('calculates total with discount and tax', () => {
    // $100 with 10% discount and 8% tax should be $97.20
    expect(calculateTotal(100, 0.10, 0.08)).toBe(97.20);
  });
});
```

### Demo Script

**Say to audience:**
"Here's a calculator with a bug. The test is failing. Let's ask Claude Code to find and fix the issue."

**Command to run:**
```bash
claude-code "The test in calculator.test.js is failing. Debug the issue and fix it."
```

**What to highlight:**
- Claude Code runs the test automatically
- It reads the error output
- It identifies the bug (tax calculated on original price, not discounted price)
- It fixes the code
- It re-runs the test to verify
- Mention: "This is the agentic part - it's iterating on its own"

**Expected outcome:**
Claude Code fixes `calculateTotal` to calculate tax on the discounted price, not the original price.

**Follow-up command:**
```bash
claude-code "Add more test cases to ensure this works correctly with edge cases like 0% discount and 0% tax"
```

**What to highlight:**
- Claude Code adds comprehensive test coverage
- It understands what edge cases matter
- Tests pass automatically

---

## Demo 4: Code Explanation (5 minutes)
**Goal:** Show how Claude Code helps understand existing code

### Setup
Use a moderately complex piece of code (or use one of the previous examples after modifications).

### Demo Script

**Say to audience:**
"Claude Code isn't just for writing code - it's great for understanding codebases too."

**Command to run:**
```bash
claude-code "Explain how the authentication flow works in this todo app. What happens when a request comes in?"
```

**What to highlight:**
- Claude Code reads relevant files
- Provides a clear, step-by-step explanation
- Can answer follow-up questions
- Useful for onboarding or understanding legacy code

**Follow-up question:**
```bash
claude-code "What would we need to change if we wanted to add password-based authentication?"
```

---

## Demo 5: Refactoring (Optional - 7 minutes)
**Goal:** Show larger-scale code improvements

### Setup
Use the todo app from Demo 2

### Demo Script

**Say to audience:**
"Let's modernize this code a bit. I want to use async/await patterns and add better error handling throughout."

**Command to run:**
```bash
claude-code "Refactor this todo app to use async/await patterns everywhere instead of synchronous code. Add proper error handling with try-catch blocks in all routes. Make the code more production-ready."
```

**What to highlight:**
- Claude Code updates multiple files consistently
- It maintains the same functionality while improving code quality
- It adds error handling without being told exactly where
- The refactoring is systematic and complete

---

## Tips for Delivering These Demos

1. **Have backups:** Run through each demo beforehand and save the outputs in case of live demo issues

2. **Explain as you go:** Don't just watch silently - narrate what Claude Code is doing

3. **Show the terminal output:** Make sure your terminal is large enough for the audience to read

4. **Pause strategically:** When Claude Code is making changes, pause to explain the reasoning

5. **Have a "Plan B":** If a demo fails, have screenshots or a recording ready

6. **Timing flexibility:** Mark which demos are optional if you're running short on time

7. **Engagement:** After each demo, ask: "What questions do you have about what you just saw?"

8. **Real-world connection:** After each demo, mention a real scenario: "This is useful when you're inheriting a legacy codebase" or "Teams use this for adding consistent logging across microservices"

---

## Quick Setup Checklist Before Workshop

- [ ] All demo projects created and tested
- [ ] Claude Code tested with each demo command
- [ ] Terminal font size increased for visibility
- [ ] Screen recording software ready (backup plan)
- [ ] Screenshots of expected outputs saved
- [ ] Timer/clock visible to keep demos on track
- [ ] Git repositories initialized (to show diffs clearly)
