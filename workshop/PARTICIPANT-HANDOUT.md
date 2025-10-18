# Claude Code Workshop - Participant Handout
## Quick Reference Guide

---

## Workshop Information

**Date:** [INSERT DATE]  
**Time:** [INSERT TIME]  
**Duration:** 3 hours  
**Location:** [INSERT LOCATION/ZOOM LINK]

**What to Bring:**
- Laptop with development environment
- Charger
- Notebook (optional)
- Questions!

---

## Workshop Goals

By the end of this workshop, you will:

✅ Understand what Claude Code is and when to use it  
✅ Set up and configure Claude Code  
✅ Write effective prompts for complex tasks  
✅ Use Claude Code for multi-file features  
✅ Debug and refactor code with AI assistance  
✅ Integrate Claude Code into your workflow

---

## Pre-Workshop Setup Checklist

Complete these steps BEFORE the workshop:

### Required
- [ ] Node.js v20+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Git installed (`git --version`)
- [ ] Claude Code installed (`npm install -g @anthropic-ai/claude-code`)
- [ ] API key configured (Anthropic or AWS Bedrock)
- [ ] Repository cloned (`git clone [URL]`)
- [ ] Dependencies installed (`npm install`)
- [ ] Database initialized (`npx drizzle-kit generate && npx drizzle-kit migrate`)
- [ ] App runs locally (`npm run dev` → http://localhost:3000)

### Verify Setup
Test that Claude Code works:
```bash
cd next-northwind-starter
claude-code "Explain the structure of this Next.js application"
```

If you see an explanation of the app structure, you're ready! ✅

### Get Help Before Workshop
If setup isn't working:
- Review the full Setup Guide in the repo
- Post in [WORKSHOP SLACK/DISCORD CHANNEL]
- Email [FACILITATOR EMAIL]

---

## Quick Reference

### Essential Commands

```bash
# Start development server
npm run dev

# View database
npx drizzle-kit studio

# Basic Claude Code usage
claude-code "your prompt here"

# Check out exercise
git checkout exercise-1-loading-state

# View solution
git checkout solution-1-loading-state
```

### Project Structure
```
next-northwind-starter/
├── app/                    # Next.js pages
│   ├── customers/         # Customer pages
│   ├── employees/         # Employee pages
│   └── products/          # Product pages
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── db/
│   └── actions/          # Server actions
├── drizzle/
│   └── schema.ts         # Database schema
└── exercises/            # Exercise instructions
```

---

## Workshop Schedule

| Time | Activity |
|------|----------|
| 0:00-0:05 | Welcome & Introductions |
| 0:05-0:50 | Introduction & Setup |
| 0:50-1:10 | Core Concepts |
| 1:10-1:45 | Live Demos |
| 1:45-1:55 | Break ☕ |
| 1:55-2:55 | Hands-on Exercises |
| 2:55-3:20 | Solution Review |
| 3:20-3:30 | Wrap-up & Q&A |

---

## What is Claude Code?

Claude Code is an **agentic coding assistant** that:

- 🔍 Reads your entire codebase
- ✏️  Makes changes across multiple files
- 🧪 Runs tests and sees results
- 🔄 Iterates on solutions autonomously
- 🐛 Debugs and fixes issues

### Not Just Autocomplete
Unlike Copilot, Claude Code handles complete tasks end-to-end.

### More Than Chat
Unlike ChatGPT, Claude Code works directly in your codebase.

---

## When to Use Claude Code

### ✅ GOOD Uses

- Creating new features across multiple files
- Refactoring complex code
- Debugging failing tests
- Adding comprehensive error handling
- Writing test suites
- Understanding unfamiliar codebases
- Migrating between frameworks
- Adding consistent patterns across files

### ❌ NOT Ideal For

- Simple one-line changes (faster to do manually)
- When you need to understand every detail
- Extremely performance-critical code
- Code with very specific business logic

---

## Writing Effective Prompts

### The Formula

```
[Action] + [What] + [Context] + [Requirements]
```

### Examples

❌ **Too Vague:**
```bash
claude-code "Add a new page"
```

✅ **Good:**
```bash
claude-code "Create a new suppliers page at app/suppliers/page.tsx 
following the existing pattern from the customers page. Include server 
actions, columns, and data table with search functionality."
```

### Pro Tips

1. **Be specific** - List all requirements
2. **Reference patterns** - "following the existing pattern from..."
3. **Include edge cases** - "handle invalid IDs and not found cases"
4. **Specify files** - Mention all files that should change
5. **Ask for explanations** - Add "explain your changes"

---

## Common Prompt Patterns

### Create New Page
```bash
claude-code "Create a new [entity] page following the existing 
pattern from [reference page]. Include server action, columns, and 
data table."
```

### Add Server Action
```bash
claude-code "Add a server action in db/actions/[entity].ts to 
fetch [entity] by ID with related [relations]. Include error handling."
```

### Debug Issue
```bash
claude-code "Debug the issue in [file] where [description]. 
Explain the problem and provide a fix."
```

### Add Feature
```bash
claude-code "Add [feature] to [component/page]. Requirements: 
[list requirements]. Follow existing patterns."
```

---

## Exercise Overview

### Exercise 1: Loading State ⭐
**Time:** 15-20 minutes  
**Goal:** Add loading skeleton to customers page  
**Skills:** Next.js loading states, shadcn/ui Skeleton

### Exercise 2: Employee Details ⭐⭐
**Time:** 30-40 minutes  
**Goal:** Create employee details page with orders  
**Skills:** Dynamic routes, Drizzle relations, server actions

### Exercise 3: Dashboard ⭐⭐⭐
**Time:** 45-60 minutes  
**Goal:** Build analytics dashboard  
**Skills:** Aggregations, charts, complex queries

### Exercise 4: Global Search ⭐⭐⭐ (Bonus)
**Time:** 45-60 minutes  
**Goal:** Search across multiple entities  
**Skills:** Full-text search, debouncing, UI patterns

---

## Getting Help During Workshop

### If You're Stuck

1. **Read the error message** - They usually tell you what's wrong
2. **Check the instructions** - Review exercise requirements
3. **Try the obvious fixes** - Restart server, clear cache
4. **Use Claude Code** - Ask it to debug!
5. **Ask for help** - Don't stay stuck for more than 10 minutes

### How to Ask for Help

Good: "I'm on Exercise 2, trying to create the employee details page. I'm getting 'Employee not found' for all IDs. I've checked that employees exist in the database."

Not as helpful: "It's not working."

### Resources Available

- 🙋 Raise hand for facilitator
- 💬 Post in workshop chat
- 👥 Ask your neighbor
- 📚 Check troubleshooting guide
- 🔍 Review solution branches

---

## Notes Section

Use this space for notes during the workshop:

### Key Learnings

_______________________________________________

_______________________________________________

_______________________________________________

### Interesting Prompts That Worked Well

_______________________________________________

_______________________________________________

_______________________________________________

### Questions to Follow Up On

_______________________________________________

_______________________________________________

_______________________________________________

### Ideas for Using in My Work

_______________________________________________

_______________________________________________

_______________________________________________

---

## After the Workshop

### Immediate Next Steps

1. ⭐ Star the workshop repository
2. 📋 Complete any unfinished exercises
3. 🏆 Try the post-workshop challenges
4. 💬 Share feedback in [CHANNEL]

### Continue Learning

**Post-Workshop Challenges**
- 10 progressive challenges in the repo
- Build on workshop skills
- Practice on realistic features
- Share your solutions

**Resources**
- Claude Code Docs: https://docs.claude.com/en/docs/claude-code
- Next.js Docs: https://nextjs.org/docs
- Drizzle ORM: https://orm.drizzle.team/
- shadcn/ui: https://ui.shadcn.com/

**Community**
- [Workshop Slack/Discord Channel]
- Share tips and solutions
- Help each other
- Post success stories

---

## Quick Tips

💡 **Save your work frequently**
```bash
git add .
git commit -m "Work in progress"
```

💡 **Test after each change**  
Don't make multiple changes before testing

💡 **Read Claude's output**  
Don't just accept changes blindly - review them

💡 **Iterate**  
If the first result isn't perfect, ask Claude to improve it

💡 **Reference existing code**  
Point Claude to similar working examples

---

## Troubleshooting Quick Fixes

### Claude Code not working
```bash
# Check API key
echo $ANTHROPIC_API_KEY

# Reinstall
npm install -g @anthropic-ai/claude-code
```

### Database issues
```bash
# Reset database
rm northwind.db
npx drizzle-kit generate
npx drizzle-kit migrate
```

### Port in use
```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID [PID] /F
```

### Module not found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## Keyboard Shortcuts

### During Workshop
- Raise hand (Zoom): Alt+Y / Option+Y
- Mute/Unmute: Alt+A / Command+Shift+A
- Stop video: Alt+V / Command+Shift+V

### Development
- Start server: Terminal + `npm run dev`
- Stop server: Ctrl+C
- Hard refresh browser: Cmd/Ctrl+Shift+R
- Open DevTools: F12 or Cmd/Ctrl+Shift+I

---

## Workshop Etiquette

✅ Ask questions anytime  
✅ Help your neighbors  
✅ Share discoveries  
✅ Take breaks when needed  
✅ Experiment and explore

❌ Don't stay stuck silently  
❌ Don't skip testing  
❌ Don't worry about finishing everything

**Remember:** The goal is learning, not completion!

---

## Feedback

Your feedback helps us improve future workshops!

**What worked well?**

_______________________________________________

**What could be better?**

_______________________________________________

**Would you recommend this workshop?**

_______________________________________________

**Additional comments:**

_______________________________________________

---

## Contact Information

**Facilitator:** [NAME]  
**Email:** [EMAIL]  
**Slack/Discord:** [HANDLE]

**Workshop Repository:**  
[GITHUB URL]

**Follow-up Office Hours:**  
[DATE/TIME if applicable]

---

## Final Checklist

Before leaving:
- [ ] Completed at least Exercise 1
- [ ] Understand when to use Claude Code
- [ ] Know how to write effective prompts
- [ ] Have access to all materials
- [ ] Know where to get help
- [ ] Ready to try on real projects

---

# Thank You for Participating! 🚀

Questions? Reach out anytime!

Happy coding with Claude Code!
