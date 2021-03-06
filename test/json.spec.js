var junitMerge = require("../lib/index.js");
var should = require("chai").should(); // eslint-disable-line no-unused-vars
/*
describe("JSON Handling", function() {
  describe("getTestsuites()", function() {
    it("should return a testsuite", function() {
      junitMerge
        .getTestsuites("./test/fixtures/1.xml")
        .should.have.string("testsuite name");
    });

    it("should return 1 testsuites", function() {
      junitMerge.getTestsuites("./test/fixtures/1.xml").should.be.a("string");
      junitMerge.testsuiteCount.should.equal(1);
    });

    it("should return 1 testsuite", function() {
      junitMerge
        .getTestsuites("./test/fixtures/testcase-1.xml")
        .should.be.a("string");
      junitMerge.testsuiteCount.should.equal(1);
    });

    it("should return 2 testsuites", function() {
      junitMerge.getTestsuites("./test/fixtures/3.xml").should.be.a("string");
      junitMerge.testsuiteCount.should.equal(2);
    });

    it("should return No testsuites found", function() {
      try {
        junitMerge.getTestsuites("./test/fixtures/12.xml");
      } catch (err) {
        err.message.should.equal("File not found");
      }
    });
  });
});
*/

describe("File Handling", function() {
  describe("mergeFiles()", function() {
    it("should return No tests found", function() {
      try {
        junitMerge.mergeFiles(["./test/fixtures/empty.json"]);
      } catch (err) {
        err.message.should.equal("Invalid JSON content");
      }
    });

    it("should return merged json file", function() {
      junitMerge
        .mergeFiles(["./test/fixtures/2.json", "./test/fixtures/2.json"])
        .length.should.equal(3771);
    });
  });
});
