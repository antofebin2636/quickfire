![Node.js Package](https://github.com/brave-agency/stylelint-config/workflows/Node.js%20Package/badge.svg)
# stylelint-config

Brave's shareable Stylelint config for use across projects.

## Installation 

Install [stylelint](https://stylelint.io/) and `@brave-agency/stylelint-config`:

**With Yarn**
```
yarn add --dev stylelint @brave-agency/stylelint-config
```

**With npm**
```
npm install stylelint @brave-agency/stylelint-config --save-dev
```


## Usage
Brave's stylelint rules come bundled in `@brave-agency/stylelint-config`. To enable these rules, add a `stylelint` property in your `package.json`. See the [stylelint configuration docs](https://stylelint.io/user-guide/configuration/) for more details.
```
"stylelint": {
  "extends": ["@brave-agency/stylelint-config"]
}
```

Now you can run stylelint by adding the following linting script to your `package.json`. See the [stylelint CLI docs](https://stylelint.io/user-guide/cli/) for more details.
```
"scripts": {
   "lint:styles": "stylelint \"src/styles/**/*.scss\" --fix --formatter verbose",
}
```
Run it:

**With Yarn**
```
yarn run lint:styles
```

**With npm**
```
npm run lint:styles
```
