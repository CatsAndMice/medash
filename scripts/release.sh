#!/usr/bin/env bash
git add . 
git commit -m "release: $1"
git push origin dev
