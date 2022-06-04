import express, { Express } from "express"
import mongoose, { ConnectOptions } from "mongoose"
// import MongoClient from "mongoose"
import cors from "cors"
import activityRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(activityRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@activitiescluster.1s3kxqs.mongodb.net/?retryWrites=true&w=majority`
// const connectOptions: ConnectOptions = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose.set("", false)
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })