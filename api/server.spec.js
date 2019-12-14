const server = require("./server")
const request = require("supertest")

describe("server", () => {
  test("testing the server environment", () =>{
    expect(process.env.DB_ENV).toBe("testing")
  })

  describe("GET /api/jokes", () => {
    it("should return 404", async () => {
      const res = await request(server).get("/")
      expect(res.status).toBe(404)
    })
  })
})