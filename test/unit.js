const path = require("path");
const { tests } = require("@ioBroker/testing");

// Run unit tests - See https://github.com/ioBroker/testing for a detailed explanation and further options
tests.unit(path.join(__dirname, ".."));
