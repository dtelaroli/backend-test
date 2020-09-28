start:
	cd api && docker-compose up

db:
	cd api && docker-compose up -d

# Requires make db
# Create file ~/.envs/default.json to overrides environment variables
sam:
	cd iaas && sam local start-api -n ../.envs/default.json

sam-debug:
	cd iaas && sam local start-api -d 9229 -n ../.envs/default.json

# Requires make db
migrate-dev:
	cd iaas && sam local invoke MigrateFunction -n ../.envs/default.json

dev:
	cd api/src && npm run dev

test:
	cd api/src && npm test

test-dev:
	cd api/src && npm run test:dev

install:
	cd api/src &&	npm install

# Requires make db
migrate:
	cd api/src && NODE_ENV=development npx sequelize-cli db:migrate

mb-dev:
	aws s3 mb s3://backent-dev-test

# Requires make mb-dev
deploy-dev:
	cd iaas && aws-vault exec my-account-dev -- sh deploy-dev.sh

cleanup-dev:
	aws-vault exec my-account-dev -- aws cloudformation delete-stack --stack-name backend-test
	aws-vault exec my-account-dev -- aws s3 rb s3://backent-dev-test --force

fix-npm-bug:
	cd api/src && find ./node_modules/* -mtime +10950 -exec touch {} \;
