import * as express from "express"

const router = express.Router()

router.get("/", (request: express.Request, response: express.Response) => {
  response.send("ホームページ")
})

export default router
