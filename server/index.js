import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import "dotenv/config"
import postRoutes from './routes/posts.js'

const app = express();



// Express use sage
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//Routing
app.use("/posts", postRoutes)

app.get('/', (req, res) => {
  res.send("hello welcome to Memories API")
})


//Mongo db connection config with Mongoose
const CONNECTION_URL = process.env.DB_CONNECTION;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running ${PORT}`)))
  .catch((err) => console.log(err.message))

mongoose.set("useFindAndModify", false)

