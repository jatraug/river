
JSFILES = $(wildcard */*.js)

default:
	echo "Targets: run lint"

run :
	nodejs server/web.js

lint:
	jshint $(JSFILES)
local:
	heroku local web

## node install -g eslint
eslint :
	eslint $(JSFILES)
