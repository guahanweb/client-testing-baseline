Client Testing Baseline
=======================

This project sets up a baseline testing structure for both unit and e2e tests for a web project.
There are multiple parts and tools available to be integrated with your site, so you can pick
and choose the one(s) you wish to use.

## Installation

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
a basic configuration for both Unit and E2E (end-to-end) testing.

### Unit Testing

