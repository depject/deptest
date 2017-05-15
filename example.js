const combine = require('depject')
const {first} = require('depject/apply')
const deptest = require('./')

const tests = {
  gives: 'tests',
  create: function (api) {
    return function (tests) {
      tests['addition'] = function (assert, cb) {
        assert(1 + 1 === 2)
        cb()
      }
      tests['async maths'] = function (assert, cb) {
        setTimeout(() => {
          assert(1 + 1 === 2)
          cb()
        }, 300)
      }
      return tests
    }
  }
}

const modules = combine([tests, deptest])

first(modules.test)()
