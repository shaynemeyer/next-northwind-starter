# Workshop Setup Guide - Next Northwind Starter

## Prerequisites

Before the workshop, ensure you have the following installed:

### Required Software
- **Node.js**: Version 20 or higher
  - Check version: `node --version`
  - Download: https://nodejs.org/
- **npm**: Comes with Node.js
  - Check version: `npm --version`
- **Git**: For cloning the repository
  - Check version: `git --version`
  - Download: https://git-scm.com/

### Required Accounts
- **GitHub account**: To clone the repository
- **Anthropic API key** OR **AWS Account** (for Bedrock)
  - Option A: Get API key from https://console.anthropic.com/
  - Option B: AWS account with Bedrock access enabled

---

## Part 1: Install Claude Code

### Option A: Using Anthropic API (Recommended for Workshop)

1. **Install Claude Code globally:**
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

2. **Verify installation:**
   ```bash
   claude --version
   ```

3. **Configure your API key:**
   ```bash
   # Set your API key as an environment variable
   export ANTHROPIC_API_KEY='your-api-key-here'
   
   # On Windows (Command Prompt):
   set ANTHROPIC_API_KEY=your-api-key-here
   
   # On Windows (PowerShell):
   $env:ANTHROPIC_API_KEY='your-api-key-here'
   ```

4. **Make it permanent** (Optional but recommended):
   
   **macOS/Linux** - Add to `~/.zshrc` or `~/.bashrc`:
   ```bash
   echo 'export ANTHROPIC_API_KEY="your-api-key-here"' >> ~/.zshrc
   source ~/.zshrc
   ```
   
   **Windows** - Add as System Environment Variable:
   - Search for "Environment Variables" in Start menu
   - Click "Environment Variables" button
   - Under "User variables", click "New"
   - Variable name: `ANTHROPIC_API_KEY`
   - Variable value: Your API key
   - Click OK

### Option B: Using AWS Bedrock

1. **Install Claude Code globally:**
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

2. **Install AWS CLI** (if not already installed):
   ```bash
   # macOS
   brew install awscli
   
   # Windows
   # Download installer from: https://aws.amazon.com/cli/
   
   # Linux
   curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
   unzip awscliv2.zip
   sudo ./aws/install
   ```

3. **Configure AWS credentials:**
   ```bash
   aws configure
   ```
   Enter your:
   - AWS Access Key ID
   - AWS Secret Access Key
   - Default region (e.g., `us-east-1`)
   - Default output format: `json`

4. **Enable Claude models in Bedrock:**
   - Go to AWS Console → Bedrock
   - Navigate to "Model access"
   - Request access to Claude 3.5 Sonnet (or latest available)
   - Wait for approval (usually instant)

5. **Configure Claude Code for Bedrock:**
   ```bash
   # Set environment variables
   export AWS_PROFILE=your-profile-name  # if using named profiles
   export AWS_REGION=us-east-1  # your Bedrock region
   ```

6. **Verify IAM permissions:**
   Your IAM user/role needs these permissions:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "bedrock:InvokeModel",
           "bedrock:InvokeModelWithResponseStream"
         ],
         "Resource": "arn:aws:bedrock:*::foundation-model/anthropic.claude-*"
       }
     ]
   }
   ```

---

## Part 2: Clone and Setup the Workshop Repository

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shaynemeyer/next-northwind-starter
   cd next-northwind-starter
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```
   
   This may take 2-3 minutes depending on your internet connection.

3. **Initialize the database:**
   ```bash
   # Generate migrations from schema
   npx drizzle-kit generate
   
   # Apply migrations to create database
   npx drizzle-kit migrate
   ```

4. **Verify database setup:**
   ```bash
   # Launch Drizzle Studio to view database
   npx drizzle-kit studio
   ```
   
   This should open http://localhost:4983 in your browser showing the Northwind database tables.

5. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The app should be running at http://localhost:3000

6. **Verify the application:**
   - Open http://localhost:3000 in your browser
   - You should see the Northwind application
   - Navigate to Customers, Employees, and Products pages
   - Verify that data loads correctly

---

## Part 3: Test Claude Code

Let's verify Claude Code works with your setup:

1. **Navigate to the project directory:**
   ```bash
   cd next-northwind-starter
   ```

2. **Run a simple test command:**
   ```bash
   claude "Explain the structure of this Next.js application"
   ```

3. **Expected behavior:**
   - Claude Code should read various files in your project
   - It should provide an explanation of the app structure
   - This confirms Claude Code can access your project files

4. **If you see an error:**
   - **"API key not found"**: Check your `ANTHROPIC_API_KEY` environment variable
   - **"Permission denied"**: Check AWS IAM permissions (Bedrock users)
   - **"Model not found"**: Verify model access in AWS Bedrock console
   - **"Command not found"**: Reinstall Claude Code globally

---

## Part 4: Setup Verification Checklist

Run through this checklist to ensure you're ready:

### Environment Check
- [ ] Node.js v20+ installed: `node --version`
- [ ] npm installed: `npm --version`
- [ ] Git installed: `git --version`
- [ ] Claude Code installed: `claude --version`

### API Configuration
- [ ] API key configured (Anthropic or AWS)
- [ ] Environment variables set correctly
- [ ] Test command runs successfully

### Project Setup
- [ ] Repository cloned
- [ ] Dependencies installed (`node_modules/` folder exists)
- [ ] Database initialized (`northwind.db` file exists)
- [ ] Development server starts without errors
- [ ] Application loads in browser (http://localhost:3000)
- [ ] Can navigate to Customers, Employees, Products pages

### Optional but Recommended
- [ ] VS Code installed (or your preferred editor)
- [ ] Terminal with good font size for presentations
- [ ] Second monitor (helpful for following along)

---

## Troubleshooting Common Issues

### Issue: "Cannot find module" errors
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Database errors or missing tables
**Solution:**
```bash
# Delete database and recreate
rm northwind.db
npx drizzle-kit generate
npx drizzle-kit migrate
```

### Issue: Port 3000 already in use
**Solution:**
```bash
# Kill the process using port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
PORT=3001 npm run dev
```

### Issue: Claude Code not finding API key
**Solution:**
```bash
# Verify environment variable is set
echo $ANTHROPIC_API_KEY  # macOS/Linux
echo %ANTHROPIC_API_KEY%  # Windows CMD
echo $env:ANTHROPIC_API_KEY  # Windows PowerShell

# If empty, set it again and restart your terminal
```

### Issue: AWS Bedrock "Access Denied"
**Solution:**
1. Verify IAM permissions in AWS Console
2. Check that Claude models are enabled in Bedrock
3. Verify AWS CLI is configured: `aws sts get-caller-identity`
4. Check region has Bedrock available

### Issue: Slow npm install
**Solution:**
```bash
# Use a faster mirror (if in specific regions)
npm config set registry https://registry.npmjs.org/

# Or use pnpm (faster alternative)
npm install -g pnpm
pnpm install
```

---

## Pre-Workshop Preparation

### For Workshop Facilitators

1. **Test all demos:**
   - Run through each demo script at least once
   - Save terminal output/screenshots as backup
   - Time each demo to ensure it fits the schedule

2. **Prepare branches:**
   - Create exercise starter branches
   - Create solution branches
   - Test that exercises work as expected

3. **Environment setup:**
   - Increase terminal font size for visibility
   - Setup screen recording (backup plan)
   - Test screen sharing if virtual workshop

4. **Documentation:**
   - Print or share setup guide with participants beforehand
   - Prepare FAQ document
   - Have troubleshooting guide readily available

### For Participants

**The Day Before:**
- [ ] Complete all setup steps in this guide
- [ ] Run the verification checklist
- [ ] Test Claude Code with the simple test command
- [ ] Join workshop Slack/Discord channel (if applicable)
- [ ] Note any issues for troubleshooting at workshop start

**Day of Workshop:**
- [ ] Have project and terminal ready
- [ ] Close unnecessary applications (free up resources)
- [ ] Have documentation open in browser
- [ ] Charged laptop / power cable ready

---

## Getting Help

### During Setup
- Check the troubleshooting section above
- Review Claude Code documentation: https://docs.claude.com/en/docs/claude-code
- Workshop Slack/Discord channel (if provided)

### During Workshop
- Raise hand / use Zoom reactions
- Post in chat with specific error messages
- Pair up with another participant for peer troubleshooting

### After Workshop
- GitHub Issues on the workshop repo
- Claude Code documentation
- Anthropic Discord community

---

## Additional Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **Drizzle ORM Documentation**: https://orm.drizzle.team/
- **shadcn/ui Documentation**: https://ui.shadcn.com/
- **Claude Code Documentation**: https://docs.claude.com/en/docs/claude-code
- **Workshop Repository**: https://github.com/shaynemeyer/next-northwind-starter

---

## Quick Reference Commands

```bash
# Project commands
npm run dev              # Start development server
npm run build           # Build for production
npm run lint            # Run linting
npx drizzle-kit studio  # View database

# Claude Code commands
claude "your prompt here"  # Run a task
claude --help              # View help

# Git commands (for exercises)
git checkout -b exercise-1  # Create new branch
git status                  # Check status
git diff                    # See changes
```

---

## Next Steps

Once your setup is complete and verified:
1. Review the workshop agenda
2. Familiarize yourself with the Northwind database structure
3. Browse through the codebase to understand the patterns
4. Be ready to learn and experiment!

See you at the workshop! 🚀
