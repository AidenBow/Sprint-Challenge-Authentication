const Users = require("./auth-router-model.js")
const db = require("../database/dbConfig.js")

describe("auth-router-model", () => {
  test("testing the server environment", () =>{
    expect(process.env.DB_ENV).toBe("testing")
  })

  describe("register", () => {
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
      let user = await db("users")
      expect(user[0].username).toBe("aiden")
    })

    beforeEach(async () => {
      await db("users").truncate()
    })
  })

  describe("login", () => {
    it("should find all users", async () => {
      await Users.add({
        username: "aiden",
        password: "123"
      })
      await Users.add({
        username: "joker",
        password: "123"
      })

      let users = await Users.find()
      expect(users).toHaveLength(2)
    })

    it("should find a specific user", async () => {
      await Users.add({
        username: "aiden",
        password: "123"
      })
      await Users.add({
        username: "joker",
        password: "123"
      })

      let user = await Users.findBy({username: "joker"}).first()
      expect(user.username).toBe("joker")
    })


    beforeEach(async () => {
      await db("users").truncate()
    })
  })
})