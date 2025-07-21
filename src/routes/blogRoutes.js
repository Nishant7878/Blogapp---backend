const express = require("express");
const { createBlog,getAllBlogs, deleteBlog, getSingleBlogById, updateBlog } = require("../controllers/blogController");
const { protect, authorizeRoles } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer");

const router =express.Router()

router.post('/create',protect, authorizeRoles("admin"), upload.array('images',5), createBlog)
router.get('/get-blogs', protect,getAllBlogs);
router.get('/get-blog/:id', protect, getSingleBlogById);
router.delete('/delete-blog/:id', protect,authorizeRoles("admin"), updateBlog);
router.patch('/update-blog/:id', protect, authorizeRoles("admin"), createBlog); // Assuming update uses the same create logic

module.exports = router;