#!/usr/bin/env bash
npm version patch
git add . 
git commit -m "release: $1"
# git push origin dev
