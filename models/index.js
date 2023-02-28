const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment ');


User.belongsTo(Post, {
    foreignKey: 'user_id',
  });
  

  