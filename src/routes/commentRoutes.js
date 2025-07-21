const express = require('express')
const { protect } = require('../middlewares/authMiddleware')
const { createComment, getCommentsByBlogId } = require('../controllers/commentControllers')

const router = express.Router()

router.post('/create/:id', protect, createComment)
router.get('/getcomment/:id', protect, getCommentsByBlogId)

module.exports = router;