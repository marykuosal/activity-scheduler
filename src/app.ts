import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import activityRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(activityRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const connectOptions = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose.set("", false)

mongoose
  .connect(uri, Option: connectOptions)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })