#!/bin/bash

yarn start

npx json-server --watch data/db.json --poty 8000 --delay 1000