const Users = require("./auth-router-model.js")
const db = require("../database/dbConfig")

describe("auth-router-model", () => {
  describe("add", () => {
    it("should register a new user to the db", async () => {
      await Users.add({
        username: "aiden",
        password: "123"
      })
      let res = await db("users")
      expect(res).toHaveLength(0)
    })

    it("should return registered user", async () => {
      await Users.add({
        username: "aiden",
        password: "123"
      })
      let res = await db("users")
      expect(user.name).toBe("aiden")
    })
  })
})