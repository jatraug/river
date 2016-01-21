
JSFILES = $(wildcard */*.js)

default:
	echo "Targets: run lint"

run :
	node server/web.js

lint:
	jshint $(JSFILES)

## node install -g eslint
eslint :
	eslint $(JSFILES)
