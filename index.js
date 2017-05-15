const nest = require('depnest')
const test = require('pull-test')

module.exports = {
  gives: nest('test'),
  needs: nest({
    'tests': 'reduce'
  }),
  create: function (api) {
    return nest('test', function () {
      const tests = api.tests({})
      test(tests)
    })
  }
}
