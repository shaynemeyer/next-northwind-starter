# Claude Code Workshop Demo Scripts

Complete demo scripts with code examples, talking points, and facilitation guidance.

---

## Demo Overview

| Demo | Time | Complexity | Key Learning |
|------|------|-----------|--------------|
| Demo 1: Quick Introduction | 5 min | Simple | Basic workflow |
| Demo 2: Multi-File Feature | 10 min | Medium | Autonomous editing |
| Demo 3: Debugging & Iteration | 8 min | Medium | Self-correction |
| Demo 4: Code Explanation | 7 min | Simple | Understanding code |
| Demo 5: Refactoring | 10 min | Complex | Code improvement |

**Total Time:** ~40 minutes

---

## Demo 1: Quick Introduction Demo (5 minutes)

**Goal:** Show the basic workflow and agentic capabilities

### Setup Files

Create a simple Express API with a basic endpoint:

**File: `demo1/app.js`**

```javascript
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

### Facilitator Script

**Say to audience:**

> "Let's see Claude Code in action. I have a simple API endpoint that returns user data, but it has no error handling. Let me ask Claude Code to improve it."

### Command to Run

```bash
"Add proper error handling to the /api/users/:id endpoint. Handle invalid IDs, add try-catch blocks, and return appropriate HTTP status codes."
```

### What to Highlight

**As Claude Code works, narrate:**

> "Notice what's happening:
> - Claude Code reads the file automatically
> - It understands the context and makes multiple improvements
> - It adds validation, error handling, and proper status codes
> - I didn't tell it which file to edit - it figured that out"

### Expected Outcome

Claude Code will add:
- Input validation for the ID
- Try-catch blocks
- 404 responses for invalid users
- Proper error status codes

**After completion, show the diff:**

```javascript
// AFTER - what Claude Code creates
app.get('/api/users/:id', (req, res) => {
  try {
    const userId = req.params.id;
    
    // Validate ID
    if (!userId || isNaN(userId)) {
      return res.status(400).json({ 
        error: 'Invalid user ID' 
      });
    }
    
    // Simulated database call
    const user = getUserById(userId);
    
    if (!user) {
      return res.status(404).json({ 
        error: 'User not found' 
      });
    }
    
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
});
```

### Key Takeaway

**Say to audience:**

> "This took 30 seconds. Doing it manually might take 5-10 minutes. That's the power of Claude Code - you give it a goal, not step-by-step instructions."

---

## Demo 2: Multi-File Feature Addition (10 minutes)

**Goal:** Show how Claude Code handles complex, multi-file tasks

### Setup Files

Create a simple todo app structure:

**File: `demo2/app.js`**

```javascript
const express = require('express');
const todoRoutes = require('./routes/todos');
const app = express();

app.use(express.json());
app.use('/api/todos', todoRoutes);

app.listen(3000, () => console.log('Server running'));
```

**File: `demo2/routes/todos.js`**

```javascript
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

**File: `demo2/models/todo.js`**

```javascript
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

### Facilitator Script

**Say to audience:**

> "Now let's add a more complex feature. I want to add user authentication so each user has their own todos. This will require changes across multiple files."

### Command to Run

```bash
"Add user authentication to this todo app. Each user should have their own todos. Add a simple auth middleware that checks for a user ID in headers, update the todo model to associate todos with users, and modify the routes to filter todos by user. Keep it simple - no passwords needed, just user identification."
```

### What to Highlight

**As Claude Code works, pause and explain:**

> "Watch what's happening:
> - Claude Code identifies all files that need changes
> - It maintains consistency across the codebase
> - Creating middleware, updating models, modifying routes
> - It understands the relationships between files
> - See how it's thinking through the architecture?"

### Expected Outcome

Claude Code will:
- Create new middleware file for auth
- Update Todo model with userId field
- Modify routes to use auth middleware
- Filter todos by user

**Example of created middleware:**

```javascript
// middleware/auth.js (created by Claude)
module.exports = (req, res, next) => {
  const userId = req.headers['x-user-id'];
  
  if (!userId) {
    return res.status(401).json({ error: 'User ID required' });
  }
  
  req.userId = userId;
  next();
};
```

### Key Takeaway

**Say to audience:**

> "Claude Code made changes to 4 different files, maintained consistency, and understood the architectural implications. This is beyond simple autocomplete."

---

## Demo 3: Debugging & Iteration (8 minutes)

**Goal:** Show how Claude Code can debug and fix issues iteratively

### Setup Files

Create a buggy calculator function:

**File: `demo3/calculator.js`**

```javascript
function calculateDiscount(price, discountPercent) {
  const discount = price * discountPercent;
  return price - discount;
}

function calculateTax(price, taxRate) {
  return price * taxRate;
}

function calculateTotal(price, discountPercent, taxRate) {
  const discountedPrice = calculateDiscount(price, discountPercent);
  const tax = calculateTax(price, taxRate);  // BUG: using original price!
  return discountedPrice + tax;
}

module.exports = { calculateDiscount, calculateTax, calculateTotal };
```

**File: `demo3/calculator.test.js`**

```javascript
const { calculateTotal } = require('./calculator');

describe('Calculator', () => {
  test('calculates total with discount and tax', () => {
    // $100 with 10% discount and 8% tax should be $97.20
    expect(calculateTotal(100, 0.10, 0.08)).toBe(97.20);
  });
});
```

### Facilitator Script

**Say to audience:**

> "Here's a calculator with a bug. The test is failing. Let's ask Claude Code to find and fix the issue."

### Command to Run

```bash
"The test in calculator.test.js is failing. Debug the issue and fix it."
```

### What to Highlight

**Narrate as Claude works:**

> "This is the agentic part - watch:
> 1. Claude Code runs the test automatically
> 2. It reads the error output
> 3. It identifies the bug - tax calculated on original price, not discounted
> 4. It fixes the code
> 5. It re-runs the test to verify
> 6. It's iterating on its own until tests pass"

### Expected Outcome

Claude Code fixes the `calculateTotal` function:

```javascript
function calculateTotal(price, discountPercent, taxRate) {
  const discountedPrice = calculateDiscount(price, discountPercent);
  const tax = calculateTax(discountedPrice, taxRate);  // FIXED!
  return discountedPrice + tax;
}
```

### Follow-up Demo

**Say to audience:**

> "Let's take it further - ask Claude to add more test coverage."

**Command:**

```bash
"Add more test cases to ensure this works correctly with edge cases like 0% discount and 0% tax"
```

### Key Takeaway

**Say to audience:**

> "Claude Code ran tests, saw failures, diagnosed the problem, fixed it, and verified the fix - all automatically. This is true autonomous coding assistance."

---

## Demo 4: Code Explanation (7 minutes)

**Goal:** Show how Claude Code helps understand existing code

### Setup

Use the todo app from Demo 2 (after modifications).

### Facilitator Script

**Say to audience:**

> "Claude Code isn't just for writing code - it's great for understanding codebases too. This is useful for onboarding or working with legacy code."

### Command to Run

```bash
"Explain how the authentication flow works in this todo app. What happens when a request comes in?"
```

### What to Highlight

**As response appears:**

> "Notice:
> - Claude Code reads relevant files
> - Provides a clear, step-by-step explanation
> - Can answer follow-up questions
> - Useful for onboarding new team members"

### Expected Outcome

Claude Code will provide a detailed explanation:

> "When a request comes in to the todo endpoints:
> 
> 1. The auth middleware intercepts the request
> 2. It checks for the x-user-id header
> 3. If missing, returns 401 Unauthorized
> 4. If present, attaches userId to the request object
> 5. The route handler receives the authenticated request
> 6. Todos are filtered/created based on that userId
> 7. Response is sent back to the client"

### Follow-up Question

**Show interactive capability:**

```bash
"What would we need to change if we wanted to add password-based authentication?"
```

### Key Takeaway

**Say to audience:**

> "This helps teams understand complex codebases quickly. Great for onboarding, documentation, and code reviews."

---

## Demo 5: Refactoring (10 minutes)

**Goal:** Show larger-scale code improvements

### Setup

Use the todo app from Demo 2.

### Facilitator Script

**Say to audience:**

> "Let's modernize this code. I want to use async/await patterns and add better error handling throughout."

### Command to Run

```bash
"Refactor this todo app to use async/await patterns everywhere instead of synchronous code. Add proper error handling with try-catch blocks in all routes. Make the code more production-ready."
```

### What to Highlight

**As Claude works:**

> "Watch how Claude Code:
> - Updates multiple files consistently
> - Maintains the same functionality while improving code quality
> - Adds error handling without being told exactly where
> - The refactoring is systematic and complete
> - It understands what 'production-ready' means"

### Expected Outcome

Routes will be updated to:

```javascript
// BEFORE
router.get('/', (req, res) => {
  res.json(Todo.getAll());
});

// AFTER
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.getAll();
    res.json(todos);
  } catch (error) {
    console.error('Failed to fetch todos:', error);
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});
```

### Key Takeaway

**Say to audience:**

> "Claude Code can handle large-scale refactoring while maintaining functionality. This saves hours of manual work and reduces errors."

---

## Tips for Delivering Demos

### Before the Workshop

1. **Run through each demo at least once**
   - Know what to expect
   - Understand timing
   - Have backups ready

2. **Prepare your environment**
   - All demo files ready
   - Terminal font size increased
   - Screen sharing tested

3. **Have Plan B**
   - Screenshots of expected outputs
   - Recording of demos (if live fails)
   - Talking points if can't show live

### During Demos

1. **Explain as you go**
   - Don't just watch silently
   - Narrate what Claude Code is doing
   - Connect to concepts you taught

2. **Pause strategically**
   - When Claude makes changes, pause to explain
   - Ask rhetorical questions: "Notice how it...?"
   - Give time for ideas to sink in

3. **Show terminal output**
   - Make sure text is readable
   - Zoom in if needed
   - Read important parts aloud

4. **Engagement**
   - After each demo, ask: "What questions do you have?"
   - "Has anyone done something similar?"
   - "How might you use this?"

### Common Demo Issues

**Issue: Claude Code is slow**
- Have a pre-recorded version ready
- Explain: "Sometimes network can be slow"
- Show the expected result

**Issue: Unexpected output**
- Don't panic - this is real!
- Show how to iterate: "Let me refine the prompt"
- Learning opportunity

**Issue: Technical failure**
- Switch to backup (recording/screenshots)
- Explain conceptually
- Move on quickly

---

## Demo Timing Flexibility

### If Running Short (Add These)

- Extended Q&A after each demo
- Show additional variations
- Let audience suggest prompts
- Discuss alternative approaches

### If Running Long (Cut These)

- Demo 5 (Refactoring) is optional
- Shorten Demo 4 (just show, don't do follow-up)
- Combine Demos 2 and 3 into one
- Reduce Q&A time

---

## Post-Demo Discussion Points

### After Demo 1

> "What tasks do you do daily that are like this? Adding validation, error handling, logging?"

### After Demo 2

> "Think about features you've built recently. How many files did you touch? Claude Code can handle that complexity."

### After Demo 3

> "How much time do you spend debugging? Claude Code can run tests and iterate for you."

### After Demo 4

> "When was the last time you had to understand someone else's code? This makes it faster."

### After Demo 5

> "What code in your projects needs modernizing? Claude Code can help with technical debt."

---

## Quick Setup Checklist

Before starting demos:

- [ ] All demo files created and tested
- [ ] Claude Code tested with each demo command
- [ ] Terminal font size increased (18pt minimum)
- [ ] Screen recording software ready (backup)
- [ ] Screenshots of expected outputs saved
- [ ] Timer/clock visible to keep on track
- [ ] Git repositories initialized (to show diffs)
- [ ] Backup demos ready (recordings/screenshots)

---

## Real-World Connection

After demos, connect to real scenarios:

**Demo 1 → "This is useful when..."**
- Adding logging across microservices
- Implementing rate limiting
- Updating error handling patterns

**Demo 2 → "Teams use this for..."**
- Adding authentication/authorization
- Implementing feature flags
- Adding observability

**Demo 3 → "Helpful for..."**
- Inheriting legacy codebases
- Fixing flaky tests
- Debugging integration issues

**Demo 4 → "Great for..."**
- Onboarding new developers
- Understanding third-party code
- Code review preparation

**Demo 5 → "Perfect for..."**
- Technical debt reduction
- Modernizing old code
- Preparing for framework upgrades

---

## Summary

These demos progressively show Claude Code's capabilities:
1. Basic workflow
2. Multi-file autonomy
3. Self-correction
4. Code understanding
5. Large-scale improvements

Each demo builds on the previous, showing increasingly complex capabilities.

**Total time:** 35-40 minutes with discussion
**Recommended:** Do all 5 if time permits, minimum Demos 1-3

Good luck with your demos! 🚀