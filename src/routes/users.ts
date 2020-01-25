import * as express from "express"
import User from "../entities/user"

const router = express.Router()

router.get("/", (request: express.Request, response: express.Response) => {
  User.find().then((users: User[]): void => {
    response.send(users)
  })
})

export default router
