import app from "./app.js";
import { connectMongoDB } from "./config/mongo.config.js";
const PORT = process.env.PORT || 8080;

const startServer = async () => {
  await connectMongoDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
