const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        required: true
    },
    images: [String],
    technologies: [String],
    githubLink: {
        type: String,
        default: ''
    },
    liveLink: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        enum: ['fullstack', 'frontend', 'backend', 'mobile', 'ai'],
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    order: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);