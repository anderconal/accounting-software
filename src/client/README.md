# Bank accounting software client
Bank accounting software is a client application coded using **React.js** with **TypeScript**

## Dependencies

This list of dependencies needs to be installed manually in your development environment:

* [nodejs >= 10](http://nodejs.org/)

## Install the dependencies

```
npm install
```

## Run the application
- Start the client
```bash
cd src/client
npm run start
```
- Open http://localhost:3000

## Npm scripts

Scripts                       | Description
------------------------------|---------------------------------------------------------------------------------------
npm run start                 | Start a development server on `http://localhost:3000`
npm run build                 | Build app in `build/` folder
npm run lint                  | Lint code (TypeScript)
npm run test                  | Run the tests related to files changed since the last commit

## File structure
    .
    ├── public                  # Folder created by create-react-app and used by React which contains favicon.ico, index.html, manifest.json and robots.txt
    ├── src                     # Source code
    │   ├── screens             # Screens of the application
    │   └── domain              # Domain related files and folders
    │   └── infrastructure      # Infrastructure related files and folders
    │   └── ...                 
    ├── .eslintrc.js            # ESlint configuration file
    ├── .gitignore              # File that specifies intentionally untracked files that Git should ignore
    ├── package-lock.json       # It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
    ├── package.json            # Lists the packages your project depends on, specifies versions of a package that your project can use using semantic versioning rules, makes your build reproducible, and therefore easier to share with other developers
    ├── README.md               # You are reading it right now!
    ├── tsconfig.json           # TypeScript configuration
    └── ...

## Testing

- Use of [React Testing Library](https://testing-library.com/) and [Jest](https://jestjs.io/) to write unit and integration tests
- Use of [ESLint](https://eslint.org/) as static code analysis tool for TypeScript
