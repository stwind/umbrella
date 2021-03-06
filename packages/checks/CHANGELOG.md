# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.1.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/checks@2.0.2...@thi.ng/checks@2.1.0) (2019-02-10)


### Features

* **checks:** add isPrimitive() ([190701e](https://github.com/thi-ng/umbrella/commit/190701e))





## [2.0.2](https://github.com/thi-ng/umbrella/compare/@thi.ng/checks@2.0.1...@thi.ng/checks@2.0.2) (2019-02-05)

**Note:** Version bump only for package @thi.ng/checks





## [2.0.1](https://github.com/thi-ng/umbrella/compare/@thi.ng/checks@2.0.0...@thi.ng/checks@2.0.1) (2019-01-21)

**Note:** Version bump only for package @thi.ng/checks





# [2.0.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/checks@1.5.14...@thi.ng/checks@2.0.0) (2019-01-21)


### Build System

* update package build scripts & outputs, imports in ~50 packages ([b54b703](https://github.com/thi-ng/umbrella/commit/b54b703))


### BREAKING CHANGES

* enabled multi-outputs (ES6 modules, CJS, UMD)

- build scripts now first build ES6 modules in package root, then call
  `scripts/bundle-module` to build minified CJS & UMD bundles in `/lib`
- all imports MUST be updated to only refer to package level
  (not individual files anymore). tree shaking in user land will get rid of
  all unused imported symbols.


<a name="1.5.4"></a>
## [1.5.4](https://github.com/thi-ng/umbrella/compare/@thi.ng/checks@1.5.3...@thi.ng/checks@1.5.4) (2018-06-18)


### Bug Fixes

* **checks:** isOdd() for negative values ([3589e15](https://github.com/thi-ng/umbrella/commit/3589e15))


<a name="1.5.1"></a>
## [1.5.1](https://github.com/thi-ng/umbrella/compare/@thi.ng/checks@1.5.0...@thi.ng/checks@1.5.1) (2018-04-29)


### Bug Fixes

* **checks:** exclude functions in isArrayLike() ([ac60404](https://github.com/thi-ng/umbrella/commit/ac60404))
* **checks:** return type isMap() ([76920f7](https://github.com/thi-ng/umbrella/commit/76920f7))


<a name="1.5.0"></a>
# [1.5.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/checks@1.4.0...@thi.ng/checks@1.5.0) (2018-04-26)


### Features

* **checks:** add date, map, nan, set checks ([a865f62](https://github.com/thi-ng/umbrella/commit/a865f62))


<a name="1.4.0"></a>
# [1.4.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/checks@1.3.2...@thi.ng/checks@1.4.0) (2018-04-08)


### Features

* **checks:** add hasPerformance() check (performance.now) ([40d706b](https://github.com/thi-ng/umbrella/commit/40d706b))


<a name="1.3.2"></a>
## [1.3.2](https://github.com/thi-ng/umbrella/compare/@thi.ng/checks@1.3.1...@thi.ng/checks@1.3.2) (2018-04-04)


### Bug Fixes

* **checks:** add prototype check for isPlainObject(), add tests ([bffc443](https://github.com/thi-ng/umbrella/commit/bffc443))


<a name="1.3.0"></a>
# [1.3.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/checks@1.2.1...@thi.ng/checks@1.3.0) (2018-03-08)


### Features

* **checks:** add isPromise() & isPromiseLike() ([9900e99](https://github.com/thi-ng/umbrella/commit/9900e99))


<a name="1.2.0"></a>
# [1.2.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/checks@1.1.6...@thi.ng/checks@1.2.0) (2018-02-08)


### Features

* **checks:** add new predicates, refactor existing ([68f8fc2](https://github.com/thi-ng/umbrella/commit/68f8fc2))
