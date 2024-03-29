const Post = require("../models/post");

exports.getPosts = (req, res) => {
  const posts = Post.find()
    .select("_id title body")
    .then((posts) => {
      res.status(200).json({ posts: posts });
    })
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  //console.log("Creating post", req.body);
  /*post
    .save()
    .then((result) => {
      res.status(200).json({
        post: result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });*/
  post.save().then((result) => {
    res.status(200).json({
      post: result,
    });
  });
};
