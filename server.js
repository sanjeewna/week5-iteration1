const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getBlogs,
  createBlog,
  getBlog,
  deleteBlog,
  putBlog,

} = require("./controllers/blogController");

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));
// GET all blogs
app.get("/api/blogs", getBlogs);
// GET a single blog
app.get("/api/blogs/:id", getBlog);
// Add a new blog
app.post("/api/blogs", createBlog);
// DELETE a blog
app.delete("/api/blogs/:id", deleteBlog);
// Update blog using PUT
app.put("/api/blogs/:id", putBlog);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});