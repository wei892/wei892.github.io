
import app from "./server.js";
import mongodb from "mongodb";
//import toolsDAO from "./dao/toolsDAO.js";

const MongoClient = mongodb.MongoClient
const uri = "mongodb+srv://ircsmstool:<password>@cluster0.tbejsis.mongodb.net/?retryWrites=true&w=majority";

const port = 8000;
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
      await toolsDAO.injectDB(client)
      app.listen(port, () => {
        console.log(`listening on port ${port}`)
      })
    });
