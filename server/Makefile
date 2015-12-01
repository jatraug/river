
JSFILES = $(wildcard */*.js)

default:
	echo "Targets: run lint"

run :
	cd server && node web.js

lint:
	jshint $(JSFILES)

## node install -g eslint
eslint :
	eslint $(JSFILES)
