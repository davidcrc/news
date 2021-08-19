## Init

npx react-native init news --template react-native-template-typescript
npm install --save-dev @types/node

## Dotenv

npm install react-native-dotenv
npm install @types/react-native-dotenv

-- dependence faltante
npm i event-target-shim

> babel.config.js :

```js
plugins: [
    ["module:react-native-dotenv", {
      "moduleName": "react-native-dotenv"
    }]
]
```