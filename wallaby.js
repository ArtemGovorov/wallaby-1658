module.exports = function (w) {
  console.log(process.version)
  process.env.NODE_ENV = 'test';

  return {
    files: [{
      pattern: 'src/routes.ts',
      instrument: false
    },
      {
        pattern: 'src/index.ts',
        instrument: false
      },
      'test/fixtures/*.ts',
      'src/*.ts',
      'src/controllers/*.ts',
      'config/config.yml',
      'config/config.override.yml'
    ],

    tests: [
      'test/*.ts'
    ],

    env: {
      type: 'node'
    },
    // or any other supported testing framework:
    // https://wallabyjs.com/docs/integration/overview.html#supported-testing-frameworks
    testFramework: 'mocha',
    setup: function (wallaby) {
      require("should");
      var mocha = wallaby.testFramework;
      mocha.timeout(15000);
    },
    workers: {
      initial: 1,
      regular: 1
    },
    // hints: {
    //     ignoreCoverage: /istanbul ignore/
    // },
    delays: {
      run: 500
    },
    debug: true
  };
};