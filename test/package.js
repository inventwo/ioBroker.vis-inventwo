const path = require("path");
const { tests } = require("@ioBroker/testing");

// Validate the package files
tests.packageFiles(path.join(__dirname, ".."));
