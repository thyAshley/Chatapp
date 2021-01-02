import path from "path";
import express from "express";

const publicPath = path.join(__dirname, "public");
const PORT = process.env.PORT || 3000
const app = express();

app.use(express.static(publicPath));
console.log(publicPath);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
