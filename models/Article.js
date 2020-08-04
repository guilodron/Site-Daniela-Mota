const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
    default: null
  },
}, {timestamps: {createdAt: 'created_at'}});

module.exports =  mongoose.models.Article || mongoose.model('Article', articleSchema);