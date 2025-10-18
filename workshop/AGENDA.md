# Claude Code Workshop Agenda
## Getting Started with AI-Powered Development

**Duration:** 3 hours  
**Format:** Hands-on workshop with live demos and exercises  
**Audience:** Software engineers with Next.js/React experience

---

## Pre-Workshop (1 week before)

### For Participants
- [ ] Complete setup guide
- [ ] Install Claude Code
- [ ] Clone workshop repository
- [ ] Verify environment works
- [ ] Join workshop communication channel

### For Facilitators
- [ ] Test all demos
- [ ] Create exercise branches
- [ ] Create solution branches
- [ ] Prepare backup plans (recordings, screenshots)
- [ ] Send setup guide to participants
- [ ] Set up communication channel

---

## Workshop Schedule

### Opening (5 minutes) - 0:00-0:05

**Facilitator Actions:**
- Welcome participants
- Quick introductions
- Overview of agenda
- Housekeeping (breaks, Q&A format, communication)

**Talking Points:**
```
"Welcome! Today we're learning Claude Code - an AI-powered coding assistant 
that goes beyond autocomplete. By the end, you'll be able to delegate entire 
features to Claude and understand when and how to use it effectively.

We'll start with demos, then you'll practice with hands-on exercises. 
Don't hesitate to ask questions - we have helpers available."
```

---

### Part 1: Introduction & Setup (45 minutes) - 0:05-0:50

#### What is Claude Code? (15 minutes) - 0:05-0:20

**Content:**
- What Claude Code is and isn't
- Key capabilities demonstration
- Comparison to other tools (Copilot, ChatGPT)
- When to use Claude Code
- Live quick demo (5 minutes)

**Facilitator Script:**
```
"Claude Code is not just autocomplete - it's an agentic assistant that can:
- Read your entire codebase
- Make changes across multiple files
- Run tests and see results
- Iterate on solutions autonomously

Let me show you a quick example..."
[Run Demo 1 from demo scripts]
```

**Activities:**
- Show Demo 1: Add error handling (5 min)
- Q&A (5 min)

#### Setup Verification (15 minutes) - 0:20-0:35

**Activities:**
- Verify Claude Code installation
- Test with simple command
- Troubleshoot issues
- Verify project runs locally

**Facilitator Actions:**
- Poll the room: "Who has Claude Code working?"
- Help troubleshoot common issues
- Have helpers assist individuals

**Key Command to Test:**
```bash
claude-code "Explain the structure of this Next.js application"
```

#### AWS Bedrock Setup (if applicable) (15 minutes) - 0:35-0:50

**Activities:**
- AWS credentials configuration
- Bedrock model access verification
- Test connection
- Troubleshooting

**Facilitator Note:**
If most participants are using Anthropic API, keep this brief or skip.

---

### Part 2: Core Concepts (20 minutes) - 0:50-1:10

#### How Claude Code Works (10 minutes) - 0:50-1:00

**Topics:**
- Agentic workflow explained
- Tool use and iteration
- Context and file reading
- Cost considerations

**Visual Aid:**
```
User Request
    ↓
Claude reads files
    ↓
Claude makes changes
    ↓
Claude runs tests
    ↓
Claude sees results
    ↓
Claude iterates/fixes
    ↓
Done!
```

**Facilitator Script:**
```
"Unlike traditional tools, Claude Code works autonomously. You give it a task, 
and it figures out what files to read, what changes to make, and can even 
run tests to verify its work. If something fails, it sees the error and 
tries to fix it - just like you would."
```

#### Best Practices (10 minutes) - 1:00-1:10

**Topics:**
- Writing effective prompts
- When to use vs. when not to use
- Project context tips
- Common pitfalls
- Integration with existing workflow

**Key Points:**
✅ DO:
- Be specific about requirements
- Reference existing patterns
- Include edge cases
- Specify all affected files

❌ DON'T:
- Be too vague
- Use for simple one-line changes
- Ignore the output without reviewing
- Skip testing

---

### Part 3: Live Demos (35 minutes) - 1:10-1:45

**Goal:** Show Claude Code's capabilities with progressively complex examples

#### Demo 2: Multi-File Feature (10 minutes) - 1:10-1:20

**Feature:** Add user authentication to todo app

**Facilitator Actions:**
- Show the starting code briefly
- Run the Claude Code command
- Narrate what's happening
- Show the results
- Highlight key learnings

**Key Points to Emphasize:**
- Multiple files changed
- Maintains consistency
- Understands relationships

**Command:**
```bash
claude-code "Add user authentication to this todo app. Each user should 
have their own todos. Add a simple auth middleware, update the todo model 
to associate todos with users, and modify the routes to filter todos by 
user. Keep it simple - no passwords needed, just user identification."
```

#### Demo 3: Debugging & Iteration (8 minutes) - 1:20-1:28

**Feature:** Fix failing calculator tests

**Key Points to Emphasize:**
- Autonomous debugging
- Reads error messages
- Iterates until fixed
- Verifies solution

**Command:**
```bash
claude-code "The test in calculator.test.js is failing. Debug the issue 
and fix it."
```

#### Demo 4: Code Explanation (7 minutes) - 1:28-1:35

**Feature:** Understanding existing code

**Key Points to Emphasize:**
- Great for onboarding
- Understands complex flows
- Can answer follow-ups

**Command:**
```bash
claude-code "Explain how the authentication flow works in this todo app. 
What happens when a request comes in?"
```

#### Demo 5: Refactoring (10 minutes) - 1:35-1:45

**Feature:** Modernize code patterns

**Key Points to Emphasize:**
- Systematic improvements
- Maintains functionality
- Adds best practices

**Command:**
```bash
claude-code "Refactor this todo app to use async/await patterns everywhere 
instead of synchronous code. Add proper error handling with try-catch blocks 
in all routes. Make the code more production-ready."
```

---

### BREAK (10 minutes) - 1:45-1:55

**Facilitator Actions:**
- Announce 10-minute break
- Remind participants to stay on communication channel
- Be available for questions

---

### Part 4: Hands-on Exercises (60 minutes) - 1:55-2:55

**Goal:** Participants practice using Claude Code on real tasks

#### Exercise Introduction (5 minutes) - 1:55-2:00

**Facilitator Actions:**
- Explain exercise format
- Show how to check out exercise branches
- Explain where to find instructions
- Set expectations for completion

**Facilitator Script:**
```
"Now it's your turn! We have 4 exercises of increasing difficulty. 
Don't worry about completing all of them - focus on learning.

Exercise 1 is a warmup (15-20 min)
Exercise 2 is more involved (30-40 min)
Exercise 3 is advanced (45-60 min)
Exercise 4 is a bonus if you have time

Start with Exercise 1. Instructions are in the exercises/ folder. 
Use the Claude Code prompts we practiced. Ask for help if stuck!"
```

#### Exercise Work Time (50 minutes) - 2:00-2:50

**Exercise 1: Loading State** (Everyone should complete)
- Target: 15-20 minutes
- Check in at 10 minutes

**Exercise 2: Employee Details Page** (Most should reach this)
- Target: 30-40 minutes
- Check in at 20 minutes

**Exercise 3: Dashboard** (Advanced participants)
- Target: 45-60 minutes

**Exercise 4: Global Search** (Bonus)
- For fast finishers

**Facilitator Actions During Exercises:**
- Circulate the room
- Answer questions
- Watch for common issues
- Help stuck participants
- Encourage pair programming
- Remind about time at intervals

**Time Check Announcements:**
```
25 min in: "We're halfway through exercises. If you're done with Exercise 1, 
           move to Exercise 2. If stuck, raise your hand."
           
40 min in: "15 minutes left! Finish your current exercise. If you're ahead, 
           try Exercise 3 or review solutions."
           
50 min in: "5 minutes left! Wrap up what you're working on. We'll review 
           solutions next."
```

#### Quick Exercise Wrap-up (5 minutes) - 2:50-2:55

**Facilitator Actions:**
- Ask who completed each exercise
- Quick poll on difficulty
- Ask for interesting discoveries
- Preview solution review

---

### Part 5: Solution Review & Best Practices (25 minutes) - 2:55-3:20

#### Exercise 1 Review (5 minutes) - 2:55-3:00

**Content:**
- Show solution briefly
- Highlight key concepts
- Quick Q&A

**Facilitator Actions:**
- Check out solution branch
- Show the code
- Explain the pattern

**Key Points:**
- Next.js loading.tsx pattern
- Skeleton component usage
- Layout matching

#### Exercise 2 Review (8 minutes) - 3:00-3:08

**Content:**
- Walk through dynamic routes
- Explain Drizzle relational queries
- Discuss error handling

**Key Points:**
- Dynamic routes in Next.js
- Server actions with relations
- Not-found handling
- TypeScript types

#### Exercise 3 Review (7 minutes) - 3:08-3:15

**Content:**
- Demonstrate dashboard
- Explain aggregation queries
- Show chart integration

**Key Points:**
- Complex server actions
- Multiple parallel queries
- Recharts integration
- Dashboard layout

#### Best Practices Summary (5 minutes) - 3:15-3:20

**Content:**
- Effective prompt patterns
- When to use Claude Code
- Code review considerations
- Integration tips

**Key Takeaways:**
1. Be specific in your prompts
2. Reference existing patterns
3. Always review Claude's changes
4. Test thoroughly
5. Use for complex tasks, not simple edits

---

### Wrap-up & Next Steps (10 minutes) - 3:20-3:30

#### Key Learnings Review (3 minutes) - 3:20-3:23

**Poll the Room:**
- What was most surprising?
- What will you use this for?
- Any concerns or questions?

#### Next Steps (4 minutes) - 3:23-3:27

**Share:**
- Post-workshop challenges document
- Additional resources
- Community/support channels
- Follow-up opportunities

**Facilitator Script:**
```
"Great work today! To continue learning:

1. Try the post-workshop challenges - 10 progressive projects
2. Use Claude Code on your real work projects
3. Share your experiences with the team
4. Join our community channel for tips and help

All materials are in the repository. Solutions are in the solution-* branches."
```

#### Q&A (3 minutes) - 3:27-3:30

**Final Questions**
- Open floor for any remaining questions
- Share contact info for follow-up
- Thank participants

---

## Timing Guidelines

### If Running Long (>3 hours)

**Priority Order:**
1. Keep: Intro, Setup, Demos 2-3, Exercises 1-2
2. Shorten: AWS Bedrock section, Demo 5
3. Skip if necessary: Exercise 4, Extended solution reviews

### If Running Short (<3 hours)

**Add:**
- More detailed solution walkthroughs
- Additional Q&A time
- Bonus demos
- Discussion of advanced patterns

---

## Facilitator Checklist

### Day Before Workshop
- [ ] Test all demos one final time
- [ ] Verify all branches pushed
- [ ] Test screen sharing setup
- [ ] Prepare recording equipment
- [ ] Send reminder email with:
  - [ ] Zoom/meeting link
  - [ ] Last-minute setup reminders
  - [ ] What to bring
  - [ ] Pre-workshop survey link (optional)

### Morning of Workshop
- [ ] Arrive 15 minutes early
- [ ] Test A/V equipment
- [ ] Open all necessary windows/tabs
- [ ] Terminal font size increased
- [ ] Repository checked out and ready
- [ ] Backup recordings/screenshots ready
- [ ] Communication channel open
- [ ] Helper volunteers briefed

### During Workshop
- [ ] Record session (if permitted)
- [ ] Take notes on issues
- [ ] Note which demos worked best
- [ ] Collect informal feedback
- [ ] Monitor chat for questions

### After Workshop
- [ ] Send follow-up email with resources
- [ ] Share recording (if available)
- [ ] Post solutions to all exercises
- [ ] Send feedback survey
- [ ] Update materials based on lessons learned

---

## Backup Plans

### If Live Demo Fails
- Show pre-recorded demo
- Show screenshots
- Explain conceptually and move on
- Have a working version in a separate repo

### If Participant Setup Issues
- Pair them with someone whose setup works
- Have them observe first half
- Help during break
- Follow up after workshop

### If Running Behind
- Skip Demo 5 (refactoring)
- Shorten solution reviews
- Focus on Exercises 1-2 only
- Send detailed solutions via email

### If Technical Difficulties
- Switch to backup machine
- Use co-facilitator's screen
- Convert to more discussion-based
- Reschedule if necessary

---

## Success Metrics

**Minimum Success:**
- 80% of participants complete Exercise 1
- Everyone understands when to use Claude Code
- No major technical blockers

**Good Success:**
- 70% complete Exercise 2
- Participants successfully use Claude Code independently
- Positive feedback on practical value

**Excellent Success:**
- 50% attempt Exercise 3
- Multiple "aha moments" shared
- Participants eager to use on real projects
- Plans to integrate into team workflow

---

## Post-Workshop Follow-up

### Week 1 After
- Send follow-up email with resources
- Share post-workshop challenges
- Create FAQ from common questions
- Schedule office hours (optional)

### Week 2-4 After
- Check in on challenge progress
- Share interesting solutions
- Collect success stories
- Plan advanced workshop if interest

---

## Notes for Co-Facilitators

### Roles During Workshop

**Lead Facilitator:**
- Presents content
- Runs demos
- Manages timing
- Handles main Q&A

**Co-Facilitator / Helper:**
- Monitors chat
- Helps with technical issues
- Assists during exercises
- Takes notes
- Manages breakout groups (if used)

### Communication Signals
- 👍 = Things going well
- ⚠️  = Someone needs help
- ⏰ = Time check needed
- 🤔 = Question brewing

---

## Contingency Timing

### 2-Hour Version (Compressed)
- Intro: 10 min
- Setup verify: 10 min
- Concepts: 10 min
- Demos: 20 min
- Break: 5 min
- Exercises: 45 min
- Review: 20 min

### 4-Hour Version (Extended)
- Add 30 min advanced demos
- Add 30 min extra exercise time
- Add 30 min deep-dive on best practices

---

## Final Reminders

✅ Energy and enthusiasm are contagious
✅ Slow down - let concepts sink in
✅ Encourage questions throughout
✅ Celebrate participants' successes
✅ Be patient with technical issues
✅ Have fun with it!

**Remember:** The goal isn't to cover everything, it's to give participants confidence to use Claude Code in their real work. Quality over quantity!
