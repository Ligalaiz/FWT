install-dependencies:
	npm install

lint:
	npm run lint

test:
	npm run test --maxWorkers=2

smoke-test:
	npm run test:smoke --maxWorkers=2
