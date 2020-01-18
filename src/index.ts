/* eslint-disable no-console */

import "reflect-metadata"
import { IncomingMessage, ServerResponse, createServer } from "http"
import { getConnectionOptions, createConnection, BaseEntity } from "typeorm"

import { User } from "./entity/user"

const connect = async (): Promise<void> => {
  const option = await getConnectionOptions()
  const connection = await createConnection(option)
  BaseEntity.useConnection(connection)

  const result = await connection.manager.query("show variables like 'chara%';")
  console.log(result)
}
connect()

const listener = (request: IncomingMessage, response: ServerResponse): void => {
  const user = new User()
  user.name = "sttaf34"
  user.age = 38
  user
    .save()
    .then((): void => {
      console.log("user.save() success")
    })
    .catch((error: Error): void => {
      console.log(error)
    })

  response.end("Hello!!!")
}

const server = createServer(listener)
server.listen(process.env.PORT || 9000)
console.log("Start serving ...")
