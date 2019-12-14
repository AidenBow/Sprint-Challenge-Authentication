const Users = require("./auth-router-model.js")
const db = require("../database/dbConfig.js")

describe("auth-router-model", () => {
  test("testing the server environment", () =>{
    expect(process.env.DB_ENV).toBe("testing")
  })
  
  describe("add", () => {
    it("should register a new user to the db", async () => {
      await Users.add({username: "aiden", password: "123"})

      const users = await db("users")
      expect(users).toHaveLength(1)
    })

    it("should return registered user", async() => {
      await Users.add({
        username: "aiden",
        password: "123"
      })
      let res = await db("users")
      expect(user.username).toBe("aiden")
    })

    beforeEach(async () => {
      await db("users").truncate()
    })
  })
})