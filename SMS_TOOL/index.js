
import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();

//import toolsDAO from "./dao/toolsDAO.js";

const mongo_username = process.env.DB_USERNAME;
const mongo_password = process.env.DB_PASSWORD;
const MongoClient = mongodb.MongoClient
const uri = "mongodb+srv://${mongo_username}:${mongo_password}@cluster0.tbejsis.mongodb.net/?retryWrites=true&w=majority";

const port = 8080;
MongoClient.connect(
    uri,
    {
      maxPoolSize: 50,
      wtimeoutMS: 2500,
      useNewUrlParser: true
    })
    .catch(err => {
      console.error(err.stack)
      process.exit(1)
    })
    .then(async client => {
      //await toolsDAO.injectDB(client)
      app.listen(port, () => {
        console.log(`listening on port ${port}`)
      })
    });
