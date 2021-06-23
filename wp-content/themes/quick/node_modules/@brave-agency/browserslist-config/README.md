![Node.js Package](https://github.com/brave-agency/browserslist-config/workflows/Node.js%20Package/badge.svg)
# browserslist-config

Brave's shareable set of Browsers we support, to maintain Standards across projects.

## Installation 

Install `@brave-agency/browserslist-config`:

**With Yarn**
```
yarn add --dev @brave-agency/browserslist-config
```

**With npm**
```
npm install @brave-agency/browserslist-config --save-dev
```


## Usage
Brave's Browsers list comes bundled in `@brave-agency/browserslist-config`.
To enable, add a `.browserslistrc` file with the following:
```
{
  "extends": [
    "@brave-agency/browserslist-config"
  ]
}
```
