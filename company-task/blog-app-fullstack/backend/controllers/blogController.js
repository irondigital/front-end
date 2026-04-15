const Blog = require('../models/Blog');
const { createBlogSchema, updateBlogSchema } = require('../validations/blogValidation');

// @desc    Create a new blog
// @route   POST /api/blogs
// @access  Private
const createBlog = async (req, res, next) => {
    try {
        const { error } = createBlogSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ success: false, message: error.details[0].message });
        }

        const { title, content } = req.body;

        const blog = await Blog.create({
            title,
            content,
            author: req.user._id
        });

        res.status(201).json({ success: true, data: blog });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'You already have a blog with this title' });
        }
        next(error);
    }
};

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Private (Owner only)
const updateBlog = async (req, res, next) => {
    try {
        const { error } = updateBlogSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ success: false, message: error.details[0].message });
        }

        let blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }

        // Make sure user is blog owner
        if (blog.author.toString() !== req.user._id.toString()) {
            return res.status(401).json({ success: false, message: 'Not authorized to update this blog' });
        }

        blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.json({ success: true, data: blog });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  Private (Owner only)
const deleteBlog = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }

        // Make sure user is blog owner
        if (blog.author.toString() !== req.user._id.toString()) {
            return res.status(401).json({ success: false, message: 'Not authorized to delete this blog' });
        }

        await blog.deleteOne();

        res.json({ success: true, message: 'Blog removed' });
    } catch (error) {
        next(error);
    }
};

// @desc    Get logged in user's blogs
// @route   GET /api/blogs/me
// @access  Private
const getMyBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find({ author: req.user._id }).sort('-createdAt');
        res.json({ success: true, count: blogs.length, data: blogs });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createBlog,
    updateBlog,
    deleteBlog,
    getMyBlogs
};
