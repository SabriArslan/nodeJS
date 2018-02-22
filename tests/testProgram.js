var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where the program is running.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("responds with Hello, World!", function() {

  // #1 should return home page
  it("should return home page", function(done) {
    // calling home page
    server
        .get("/api/test")
        .expect("Content-type",/text/)
        .expect(200) // THis is HTTP response
        .end( function(err,res) {
            res.status.should.equal(200);
            res.text.should.equal("success");
            done();
        });
  });

});