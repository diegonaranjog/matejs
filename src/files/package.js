const packageJsonContent = {
  name: 'mi-proyecto',
  version: '1.0.0',
  main: 'src/app.js',
  scripts: {
    start: 'node src/app.js',
  },
  dependencies: {
    express: '^4.17.1',
    cors: '^2.8.5',
    morgan: '^1.10.0',
  },
}

module.exports = packageJsonContent
