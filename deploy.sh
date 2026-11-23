#!/usr/bin/env bash
# deploy.sh: push any Vite/React (or other static) app to GitHub and deploy it on Vercel.
# Reusable: run it from inside any project folder.
#
# Usage:   ./deploy.sh [repo-name] [public|private]
# Example: ./deploy.sh cliff-edge public
#
# One-time setup (Mac):
#   brew install gh node        # GitHub CLI + Node
#   gh auth login               # sign in to GitHub (choose HTTPS, browser)
#   npx vercel login            # sign in to Vercel (use "Continue with GitHub")
set -euo pipefail

REPO="${1:-$(basename "$PWD")}"
VISIBILITY="${2:-public}"

say() { printf '\n\033[1;34m==>\033[0m %s\n' "$1"; }
die() { printf '\n\033[1;31mError:\033[0m %s\n' "$1" >&2; exit 1; }

# 1. Check tools and sign-ins
command -v git  >/dev/null || die "git is not installed (run: xcode-select --install)"
command -v node >/dev/null || die "Node is not installed (run: brew install node)"
command -v gh   >/dev/null || die "GitHub CLI is not installed (run: brew install gh)"
gh auth status >/dev/null 2>&1 || die "Not signed in to GitHub (run: gh auth login)"
npx --yes vercel whoami >/dev/null 2>&1 || die "Not signed in to Vercel (run: npx vercel login)"
GH_USER="$(gh api user -q .login)"

# 2. Make sure it builds before publishing anything
say "Installing dependencies and building"
if [ -f package.json ]; then
  npm install
  npm run build
fi

# 3. Commit
say "Committing"
[ -d .git ] || git init -b main
[ -f .gitignore ] || printf 'node_modules\ndist\n.vercel\n.env*\n.DS_Store\n' > .gitignore
git add -A
git diff --cached --quiet || git commit -m "Deploy ${REPO}"

# 4. Create the GitHub repo on first run, push on later runs
if git remote get-url origin >/dev/null 2>&1; then
  say "Pushing to existing GitHub repo"
  git push -u origin main
else
  say "Creating github.com/${GH_USER}/${REPO} (${VISIBILITY})"
  gh repo create "${REPO}" "--${VISIBILITY}" --source . --remote origin --push
fi

# 5. Link to Vercel, connect the GitHub repo (so every future push auto-deploys), deploy to production
say "Deploying to Vercel"
npx --yes vercel link --yes --project "${REPO}"
npx --yes vercel git connect "https://github.com/${GH_USER}/${REPO}" --yes >/dev/null 2>&1 || true
URL="$(npx --yes vercel --prod --yes | tail -1)"

say "Done"
echo "  GitHub: https://github.com/${GH_USER}/${REPO}"
echo "  Live:   ${URL}"
echo "  From now on, 'git push' redeploys automatically."
