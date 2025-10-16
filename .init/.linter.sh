#!/bin/bash
cd /home/kavia/workspace/code-generation/simple-tic-tac-toe-210075-210084/tic_tac_toe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

