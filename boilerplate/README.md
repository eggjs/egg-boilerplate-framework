# {{name}}

{{description}}

## QuickStart

```shell
$ npm install
$ npm test
$ open http://localhost:7001
```

publish your framework to npm, then change app's dependencies:

```js
// {app_root}/index.js
require('{{name}}').startCluster({
  baseDir: __dirname,
  // port: 7001, // default to 7001
  // workers: 1, // default to cpu count
});

```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

