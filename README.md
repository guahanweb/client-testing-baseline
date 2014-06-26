Client Testing Baseline
=======================

## About

This project sets up a baseline testing structure for both unit and e2e tests for a web project.
There are multiple parts and tools available to be integrated with your site, so you can pick
and choose the one(s) you wish to use.

## Usage

Once you have cloned the repository, there are a few tasks that need to be run to get everything
up to date. First and foremost, you need to install all the devDependencies present in the
package.json file:

```sh
npm install
```

Next, if you are going to be taking advantage of the E2E testing, you need to update protractor
by downloading the Chrome driver. There is a grunt task to assist you with this:

```sh
grunt webdriver:update
```

At this point, everything should be configured to run appropriately, and you will be able to run
the default grunt task and see the default unit test passing. Keep in mind that, by default,
E2E tests are run as a separate grunt task, since you need to have a webdriver instance running,
but you can read more on that in the E2E Testing section below.

## Test Suites

In order to help ease the pain of setting up testing for client architecture, this repo provides
a basic configuration for both Unit and E2E (end-to-end) testing. This section will break down
configuration for both testing environments and how to customize them to your needs.

### Unit Testing

For unit testing, we have implemented the [Karma test runner](http://karma-runner.github.io/0.12/index.html)
and [Jasmine test framework](http://jasmine.github.io/) out of the box. Packaged in this repo
are all dependencies for running these tests in [PhantomJS](https://github.com/karma-runner/karma-phantomjs-launcher).
Default configuration will run all tests matching the `tst/unit/**/*spec.js` pattern but can be
customized within the `tst/conf/karma.js` file.

To execute your unit tests (including the default base included), run the following grunt task:

```sh
grunt test:unit
```

### E2E Testing

Executing E2E tests is a little more complex, since it requires a running instance of the WebDriver.
We are implementing Google's WebDriver (Selenium 2) driver (Protractor) for use in all E2E testing.
You can launch a standalone WebDriver instance in a terminal tab by running the following grunt task:

```sh
grunt webdriver
```

**NOTE:** You must have this instance running in the background for tests to execute!

Once the standalone WebDriver is running, you can run all the E2E tests with this grunt task:

```sh
grunt test:e2e
```

By default, E2E tests are configured to run in Chrome via `tst/conf/protractor.chrome.js`. You can add
additional browsers to test by setting up an additional config file for each browser. The grunt task
accepts an optional parameter to specify the browser config file to retrieve:

```sh
# This is an alias for the default
grunt test:e2e:chrome
```

For additional information regarding use of Protractor on both AngularJS and non-Angular sites, check
out the [Protractor documenation](https://github.com/angular/protractor) and
[this Stack Overflow article](http://stackoverflow.com/questions/22239207/use-protractor-to-test-login-on-non-angularjs-page).

## Additional Tools

There are additional tools provided with this setup to give you another boost to your code quality.

### [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

Running the `grunt jshint` task will check all files configured in your `Gruntfile.js`. Additionally, it
will load its options from the `.jshintrc` in your git root.

### [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)

Once your source JavaScript files are ready for production, you can use the `grunt uglify` task to
automatically merge and minify into distribution code. Uglify is also configured directly in the
`Gruntfile.js` task definition.

### [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc)

Also supported out of the box is the ability to build API documentation of your client application
by use of the `grunt jsdoc` task. Configuration for this task can be modified in `docs/conf.json`.

## License

Copyright (c) 2014 Garth Henson (@guahanweb)  
Licensed under the MIT license.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/guahanweb/client-testing-baseline/trend.png)](https://bitdeli.com/free "Bitdeli Badge")