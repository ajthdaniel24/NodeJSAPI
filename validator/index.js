exports.createPostValidator = (req, res, next) => {
  //title
  req.check("title", "Write a title").notEmpty();
  req.check("title", " Title must be 4 to 150 characters").isLength({
    min: 4,
    max: 150,
  });
  //body
  req.check("body", "Write a body").notEmpty();
  req.check("body", " Title must be 4 to 2000 characters").isLength({
    min: 4,
    max: 2000,
  });
  //check for errors
  const errors = req.validationErrors();
  // if error show the first one as they came
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  //proceed to next midleware when error occurs
  next();
};
