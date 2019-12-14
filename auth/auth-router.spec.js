const server = require("../api/server")
const request = require("supertest")

describe("server", () => {
  test("testing the server environment", () =>{
    expect(process.env.DB_ENV).toBe("testing")
  })
  
})