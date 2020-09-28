# Using

1. [Home](../README.md)
2. [Architecture](architecture.md)
3. [DevOps](devops.md)
4. Using
6. [GraphQL API](graphql.md)
7. [Roadmap](roadmap.md)

## Development environment

In the root folder there is a [Makefile](../Makefile) to KISS the development environment creating.

After clone the git repository, you need install node dependencies and run docker with the db. Look for the make commands avalailable below:


### Starting the API locally

```
make start
```

### Starting PostgresSQL locally

```
make db
```

### Starting AWS SAM API

Requires make db and to create file .envs/default.json to overrides environment variables

```
make sam
```

### Running migrations to create the database tables

Requires make db

```
make migrate-dev
```

### Running Apollo with NodeJS without SAM

```
make dev
```

### Running tests

```
make test
```

### Running tests, watching files change and collect code coverage

```
make test-dev
```

### Installing NodeJS dependencies

```
make test-dev
```

### Running migrations

```
make migrate
```

### Creating deployment bucket

```
make mb-dev
```

### Running pipeline deployment

Any changes on file [pipeline.yml](../iaas/pipeline.yml) can be deployed with this comnand.

Requires `make mb-dev`

```
make deploy-dev
```

### Destroying all cloud (WARNING, this can't be undone)

Delete the CloudFormation stack and S3 bucket deployment

```
make cleanup-dev
````

### Fixing NPM bug

There is a npm bug in one dependency that does not support mtime timestamps, I don't have more know how about that, but this command it's a workaround to solve.

```
make fix-npm-bug
```

See the Makefile commands to learn more about the commands.

## Environment variables

You can create a .env file in the api/src folder to configure the environment variables or update the [docker-compose.yml](../api/docker-compose.yml) and change it self.

````
APOLLO_KEY=<your apollo studio key>
DB_HOST=localhost
DB_NAME=example
DB_USERNAME=example
DB_PASSWORD=example
DEBUG=true
````

## Debug

For easy debug use the VSCode JavaScript Debug Terminal and run the `make dev` command.

[Next - GraphQL API](graphql.md)
