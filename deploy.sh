#!/bin/bash

# Build for production
ng build --base-href "https://giltest99.github.io/git-simple/"

# Deploy on GH Pages
ngh --dir=dist/git-simple

