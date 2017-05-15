# deptest

> depject plugin for tests

Give tests from your depject modules.

## Usage

```js
const combine = require('depject')
const {first} = require('depject/apply')
const deptest = require('deptest')

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
 
//lines below would normally be in test.js or similar
//combine your modules with deptest
const modules = combine([tests, deptest])

//Run the tests!
first(modules.test)()
```

outputs

```
✔ addition
✔ async maths
```

## API

### Needs

exports.needs = nest({
  'tests': 'reduce'
})

### Gives

exports.gives = nest({
  'test'
})


### Giving `tests` functions

You give `tests` functions from your modules that have the shape:
```js
  (tests) => tests
```
Where tests is an object that has shape:
```js
{
  'my test name': (assert, cb) =>{}   
}
```

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install deptest
```

## Acknowledgments

deptest was inspired by..

## See Also

- [`noffle/common-readme`](https://github.com/noffle/common-readme)
- [depject]() 
- [pull-test]() 

## License

MIT

