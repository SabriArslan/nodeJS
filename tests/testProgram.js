var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:3000");

describe("test api should success", function() {

  it("should return success", function(done) {
    // calling test api
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