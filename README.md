# Bank accounting software
Bank accounting software is an application coded using the **MERN (MongoDB, Express.js, React.js, Node.js)** stack with **TypeScript**

## Dependencies

This list of dependencies needs to be installed manually in your development environment:

* [Node.js >= 10](http://nodejs.org/)
* [Git](https://git-scm.com/downloads)
* [Docker](https://www.docker.com/get-started)

## Get the code

### HTTPS
```bash
git clone https://github.com/anderconal/accounting-software
git checkout main
```
### SSH
```bash
git clone git@github.com:anderconal/accounting-software.git
git checkout main
```

## Run the application
- Install the dependencies
```
cd src/client
npm install
```

```
cd src/server
npm install
```

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

- Open another instance of the terminal and start the client
```bash
cd src/client
npm run start
```
- Open http://localhost:3000

## File structure
    .
    ├── src                     # Source code
    │   ├── client              # Client related folders and files
    │   ├── server              # Server related folders and files
    └── README.md               # You are reading it right now!

## Testing

- Use of [Cypress](https://www.cypress.io/) as End to End Testing Framework
- Use of [React Testing Library](https://testing-library.com/) and [Jest](https://jestjs.io/) to write unit and integration tests
- Use of [ESLint](https://eslint.org/) as static code analysis tool for TypeScript

## Run the tests
Check the corresponding **README.md** file to run the tests on **client** (src/client/README.md) and **server** (src/server/README.md)