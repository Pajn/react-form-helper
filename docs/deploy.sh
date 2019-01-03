#!/bin/sh

yarn build

cd out
touch .nojekyll
git init
git checkout -b gh-pages
git add .
git commit -m 'Deploy'
git remote add origin git@github.com:Pajn/react-form-helper.git
git push origin gh-pages --force
rm -rf .git
