# Bank accounting software server
Bank accounting software is a server application coded using **MongoDB**, **Express.js** and **Node.js** with **TypeScript**

## Dependencies

This list of dependencies needs to be installed manually in your development environment:

* [nodejs >= 10](http://nodejs.org/)
* [Docker](https://www.docker.com/get-started)

## Install the dependencies

```
npm install
```

## Run the application
- Start the database with Docker
```bash
cd src/server
docker-compose up
```
- Open another instance of the terminal and start the server
```bash
cd src/server
npm run start:dev
```

## Run the tests
- Start the database with Docker
```bash
cd src/server
docker-compose up
```

- Open another instance of the terminal and start the server
```bash
cd src/server
npm run start
```

- Open another instance of the terminal and run or open the tests
```bash
cd src/server
npm run test:e2e:run // Run the tests
npm run test:e2e:open // Open end to end application so you can run the tests
```

## Npm scripts

Scripts                       | Description
------------------------------|---------------------------------------------------------------------------------------
npm run start                 | Start a development server on `http://localhost:8001`
npm run start:dev             | Start a development server on `http://localhost:8001` with hot reload 
npm run build                 | Build app
npm run lint                  | Lint code (TypeScript)
npm run test:e2e:run          | Open end to end application so you can run the tests
npm run test:e2e:open         | Run end to end tests

## File structure
    .
    ├── api                     # Folder created by create-react-app and used by React which contains favicon.ico, index.html, manifest.json and robots.txt
    ├── bankData                # Generated by MongoDB. Here we store the data 
    ├── config                  # Configuration related files and folders
    ├── cypress                 # end-to-end tests related
    ├── domain                  # Domain related folders and files
    ├── errors                  # Errors related folders and files
    ├── insfrastructure         # Infrastructure related folders and files
    ├── .eslintrc.js            # ESlint configuration file
    ├── .gitignore              # File that specifies intentionally untracked files that Git should ignore
    ├── package-lock.json       # It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
    ├── package.json            # Lists the packages your project depends on, specifies versions of a package that your project can use using semantic versioning rules, makes your build reproducible, and therefore easier to share with other developers
    ├── README.md               # You are reading it right now!
    ├── tsconfig.json           # TypeScript configuration
    ├── cypress.json            # end-to-end tests uses this file to store the projectId (after configuring your tests to record) and any configuration values you supply
    ├── nodemon.json            # Nodemon uses this file to store any configuration values you supply
    ├── docker-compose.yml      # File to configure application services. Right now, only the database is configured
    └── ...

## Testing

- Use of [Cypress](https://www.cypress.io/) as End to End Testing Framework
- Use of [ESLint](https://eslint.org/) as static code analysis tool for TypeScript
