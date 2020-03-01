const path = require("path");
const { tests } = require("@iobroker/testing");

// Run unit tests - See https://github.com/iobroker/testing for a detailed explanation and further options
tests.unit(path.join(__dirname, ".."));
