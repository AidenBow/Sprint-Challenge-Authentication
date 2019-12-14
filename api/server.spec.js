const server = require("./server")
const request = require("supertest")

describe("server", () => {
  test("testing the server environment", () =>{
    expect(process.env.DB_ENV).toBe("testing")
  })

  describe("/GET ", () => {
    it("should return 401", async () => {
      const res = await request(server).get("/api/jokes")
      expect(res.status).toBe(401)
    })

    it("should return 401", async () => {
      const res = await request(server).get("/api/auth/users")
      expect(res.status).toBe(401)
    })
  })
})