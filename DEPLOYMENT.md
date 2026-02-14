# How to View Your Portfolio Online

## Quick Answer
**Your portfolio will be accessible at:** https://robertgpatch.github.io/Robert-portfolio/

## ⚠️ IMPORTANT: First-Time Setup Required

**Before deploying, you must enable GitHub Pages:**

1. Go to your repository: https://github.com/RobertgPatch/Robert-portfolio
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Build and deployment":
   - **Source**: Select **GitHub Actions** (NOT "Deploy from a branch")
4. Click **Save**

Once Pages is enabled, you can deploy using either option below.

## Steps to Make It Live

### Option 1: Merge This PR (Recommended)
1. **Enable GitHub Pages first** (see above if not done)
2. Merge this pull request into the `main` branch
3. The GitHub Actions workflow will automatically build and deploy
4. Visit https://robertgpatch.github.io/Robert-portfolio/ in 2-3 minutes

### Option 2: Enable GitHub Pages Manually
If you want to deploy from this branch right now:

1. **Enable GitHub Pages first** (see instructions above if not done)
2. Go to your repository: https://github.com/RobertgPatch/Robert-portfolio
3. Go to **Actions** tab
4. Click on "Deploy to GitHub Pages" workflow
5. Click **Run workflow** → Select your current branch
6. Wait 2-3 minutes for deployment
7. Visit: https://robertgpatch.github.io/Robert-portfolio/

## What Was Set Up

✅ **Vite Configuration** - Added base path `/Robert-portfolio/` for GitHub Pages
✅ **GitHub Actions Workflow** - Automatic deployment on push to main
✅ **Production Build** - Verified build works correctly
✅ **README Updated** - Added live demo link

## Testing Locally

You can preview the production build locally:
```bash
npm run build
npm run preview
```

Then visit: http://localhost:4173/Robert-portfolio/

## Features Available

Once deployed, visitors can:
- View your portfolio projects
- Click on projects to see detailed information
- See links to live demos and GitHub repos
- Responsive design works on all devices

You can manage projects by:
- Visiting https://robertgpatch.github.io/Robert-portfolio/admin
- Adding/editing/deleting projects
- Changes persist in browser localStorage
