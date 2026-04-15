const Blog = require('../models/Blog');

// @desc    Get all blogs (Public)
// @route   GET /api/public/blogs
// @access  Public
const getPublicBlogs = async (req, res, next) => {
    try {
        const { search, sortBy, order, page = 1, limit = 10 } = req.query;

        const skip = (parseInt(page) - 1) * parseInt(limit);
        
        // Build aggregation pipeline
        let pipeline = [
            {
                $lookup: {
                    from: 'users',
                    localField: 'author',
                    foreignField: '_id',
                    as: 'authorInfo'
                }
            },
            { $unwind: '$authorInfo' },
            {
                $project: {
                    title: 1,
                    content: 1,
                    createdAt: 1,
                    'authorInfo.name': 1,
                    'authorInfo._id': 1
                }
            }
        ];

        // Search logic
        if (search) {
            pipeline.push({
                $match: {
                    $or: [
                        { title: { $regex: search, $options: 'i' } },
                        { 'authorInfo.name': { $regex: search, $options: 'i' } }
                    ]
                }
            });
        }

        // Sorting logic
        let sortField = 'createdAt';
        if (sortBy === 'title') sortField = 'title';
        if (sortBy === 'userName') sortField = 'authorInfo.name';

        const sortOrder = order === 'desc' ? -1 : 1;
        pipeline.push({ $sort: { [sortField]: sortOrder } });

        // Pagination - To get total count before skipping
        const countPipeline = [...pipeline, { $count: 'total' }];
        const totalResult = await Blog.aggregate(countPipeline);
        const total = totalResult.length > 0 ? totalResult[0].total : 0;

        // Apply pagination
        pipeline.push({ $skip: skip });
        pipeline.push({ $limit: parseInt(limit) });

        const blogs = await Blog.aggregate(pipeline);

        res.json({
            success: true,
            count: blogs.length,
            total,
            page: parseInt(page),
            pages: Math.ceil(total / limit),
            data: blogs
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getPublicBlogs
};
