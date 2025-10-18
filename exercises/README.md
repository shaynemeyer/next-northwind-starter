# Workshop Exercises

Welcome to the hands-on portion of the workshop! These exercises are designed to give you practical experience using Claude Code with a real Next.js application.

## Overview

| Exercise | Difficulty | Time | Skills |
|----------|-----------|------|--------|
| [Exercise 1: Loading State](./EXERCISE-1.md) | ⭐ Easy | 15-20 min | Next.js loading states, shadcn/ui |
| [Exercise 2: Employee Details](./EXERCISE-2.md) | ⭐⭐ Medium | 30-40 min | Dynamic routes, Drizzle relations, server actions |
| [Exercise 3: Dashboard](./EXERCISE-3.md) | ⭐⭐⭐ Advanced | 45-60 min | Aggregations, charts, complex queries |
| [Exercise 4: Global Search](./EXERCISE-4.md) | ⭐⭐⭐ Bonus | 45-60 min | Full-text search, debouncing, UI state |

## Getting Started

### 1. Choose Your Starting Point

Each exercise has its own branch with starter code and TODO comments:
```bash
# Exercise 1
git checkout exercise-1-loading-state

# Exercise 2
git checkout exercise-2-employee-details

# Exercise 3
git checkout exercise-3-dashboard

# Exercise 4
git checkout exercise-4-search
```

### 2. Read the Instructions

Each exercise has a detailed markdown file with:
- Clear objectives
- Step-by-step guidance
- Helpful resources
- Claude Code prompts to try
- Testing instructions
- Common issues and solutions

### 3. Work Through the Exercise

- Read the requirements carefully
- Use Claude Code to help you
- Test frequently
- Ask for help if stuck

### 4. Compare with Solution

After completing (or if stuck), check the solution:
```bash
git checkout solution-1-loading-state
```

## Tips for Success

### Using Claude Code Effectively

✅ **DO:**
- Be specific in your prompts
- Reference existing files and patterns
- Ask Claude to explain its changes
- Review the code before accepting
- Test after each change

❌ **DON'T:**
- Make vague requests
- Accept code without understanding it
- Make multiple changes before testing
- Stay stuck for more than 10 minutes

### Example Prompts

**Too vague:**
```bash
claude-code "add loading"
```

**Good:**
```bash
claude-code "Create a loading skeleton in app/customers/loading.tsx 
that matches the layout of app/customers/page.tsx. Use the Skeleton 
component from shadcn/ui for the search bar and table rows."
```

### When You Get Stuck

1. **Read the error message** - They usually tell you exactly what's wrong
2. **Check the instructions** - Look at the hints and tips sections
3. **Review existing code** - Look at similar working examples
4. **Use Claude Code** - Ask it to debug or explain
5. **Ask for help** - Raise your hand or post in chat
6. **Check the solution** - No shame in learning from the answer

### Testing Your Work

Always test your solutions:
```bash
# Make sure the app runs
npm run dev

# Check for TypeScript errors
npm run build

# View the database
npx drizzle-kit studio
```

## Exercise Progression

### Recommended Path

**Everyone should complete:** Exercise 1
- It's short and teaches important Next.js patterns
- Builds confidence with Claude Code

**Most should attempt:** Exercise 2
- Good complexity for learning
- Practices important skills
- Manageable in workshop time

**Advanced participants:** Exercise 3
- More challenging
- Excellent for experienced developers
- Great learning opportunity

**Bonus challenge:** Exercise 4
- Try if you finish early
- Complex but rewarding
- Shows advanced patterns

### If You're Running Short on Time

**Minimum viable learning:**
- Complete Exercise 1
- Read through Exercise 2 instructions
- Watch the solution review

**If you have 45 minutes:**
- Do Exercise 1 completely
- Start Exercise 2, get as far as you can

**If you have 60+ minutes:**
- Do Exercises 1 and 2
- Start Exercise 3 or 4

## Saving Your Work

Save your progress frequently:
```bash
# Save work in progress
git add .
git commit -m "WIP: Exercise 2 employee details"

# Or create a new branch for your solution
git checkout -b my-solution-exercise-2
git add .
git commit -m "Complete Exercise 2"
```

## Getting Help

### During the Workshop

- 🙋 **Raise your hand** - Facilitators are here to help
- 💬 **Post in chat** - Share your specific error or question
- 👥 **Ask your neighbor** - Pair programming is encouraged
- 📚 **Check the docs** - Troubleshooting guide has common solutions

### What to Include When Asking for Help

Good: "I'm on Exercise 2, trying to add the server action. I'm getting this error: 'Cannot find module @/db'. I've checked the import path and it looks correct."

Not as helpful: "Exercise 2 isn't working."

## Common Issues

### Setup Issues

**Port already in use:**
```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Module not found:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Database issues:**
```bash
rm northwind.db
npx drizzle-kit generate
npx drizzle-kit migrate
```

### Exercise-Specific Issues

Check the "Common Issues & Solutions" section in each exercise file.

## After the Workshop

### Continue Learning

1. **Finish incomplete exercises** - Take your time
2. **Try the bonus challenges** - Extra credit!
3. **Review solutions** - Compare approaches
4. **Try post-workshop challenges** - 10 more projects to practice

### Share Your Experience

- Post screenshots of completed exercises
- Share interesting Claude Code prompts that worked well
- Help others in the community
- Give feedback on the workshop

## Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Drizzle ORM](https://orm.drizzle.team/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Claude Code](https://docs.claude.com/en/docs/claude-code)

### Workshop Materials
- [Setup Guide](../docs/SETUP.md)
- [Cheat Sheet](../docs/CHEAT-SHEET.md)
- [Troubleshooting](../docs/TROUBLESHOOTING.md)
- [Post-Workshop Challenges](../docs/POST-WORKSHOP-CHALLENGES.md)

## Questions?

Don't hesitate to ask! That's what the workshop is for.

Happy coding! 🚀
