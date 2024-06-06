git add -A
git commit -m 'new message'
# git pull
git push origin main

git worktree add /tmp/homepage gh-pages
rm -rf /tmp/homepage/* # this won't delete the .git directory
cp -rp dist/* /tmp/homepage/
cd /tmp/homepage
git add -A
git commit -m 'new homepage message'
git push origin gh-pages
git worktree remove /tmp/homepage
cd -
