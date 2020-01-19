/* eslint-disable no-console */
/* eslint-disable import/no-duplicates */

import * as express from "express"
import { Request, Response, NextFunction } from "express"
import * as helmet from "helmet"
import * as createHttpError from "http-errors"
import * as listEndpoints from "express-list-endpoints"
import { getConnectionOptions, createConnection, BaseEntity } from "typeorm"

import index from "./routes/index"
import users from "./routes/users"

const main = async (): Promise<void> => {
  const app = express()
  app.use(helmet())

  // DB接続
  const option = await getConnectionOptions()
  const connection = await createConnection(option)
  BaseEntity.useConnection(connection)

  // ルーティング設定
  app.use("/", index)
  app.use("/users", users)

  // エラー処理
  app.use((request: Request, response: Response, next: NextFunction): void => {
    next(createHttpError(404))
  })

  // サーバ起動
  const port = process.env.PORT || 9000
  app.listen(port, (): void => {
    console.log(`listening on port ${port}!`)
    console.log(listEndpoints(app))
  })
}

main()
