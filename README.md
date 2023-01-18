# OpenCTI client for Javascript

[![Website](https://img.shields.io/badge/website-opencti.io-blue.svg)](https://www.opencti.io)
[![GitHub release](https://img.shields.io/github/release/OpenCTI-Platform/client-javascript.svg)](https://github.com/OpenCTI-Platform/client-javascript/releases/latest)
[![Number of NPM downloads](https://img.shields.io/npm/dm/jscti.svg)](https://www.npmjs.com/package/@opencti/jscti)
[![Slack Status](https://slack.filigran.io/badge.svg)](https://community.filigran.io)

The official OpenCTI Javascript client helps developers to use the OpenCTI API by providing easy to use methods and utils.

## Install

To install the latest Javascript client library, please use `npm` or `yarn`:

```bash
$ npm install jscti
```

```bash
$ yarn add jscti
```

## Local development

```bash
# Fork the current repository, then clone your fork
$ git clone https://github.com/<YOUR-USERNAME>/client-javascript
$ cd client-javascript
$ git remote add upstream https://github.com/OpenCTI-Platform/client-javascript.git
# Create a branch for your feature/fix
$ git checkout -b [branch-name]
# Install the client-javascript and dependencies for the development and the documentation
$ npm link
$ npm link jscti
# Set up the git hook scripts
$ pre-commit install
# Create your feature/fix
# Create tests for your changes
# Push your feature/fix on Github
$ git add [file(s)]
$ git commit -m "[descriptive message]"
$ git push origin [branch-name]
# Open a pull request
```

## Documentation

### Client usage

To learn about how to use the OpenCTI Javascript client and read some examples and cases, refer to [the client documentation](https://opencti-client-for-javascript.readthedocs.io/en/latest/client_usage/getting_started.html).

### API reference

To learn about the methods available for executing queries and retrieving their answers, refer to [the client API Reference](https://opencti-client-for-javascript.readthedocs.io/en/latest/pycti/pycti.html).

## About

OpenCTI is a product powered by the collaboration of the private company [Filigran](https://www.filigran.io), the [French national cybersecurity agency (ANSSI)](https://ssi.gouv.fr), the [CERT-EU](https://cert.europa.eu) and the [Luatix](https://www.luatix.org) non-profit organization.
