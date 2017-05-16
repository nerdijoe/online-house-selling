var Post = require('../models/post')


exports.create = (req, res, next) => {

  Post.create(req.body, (err, post) => {
    if(err) res.send(err)

    res.send(post)
  })

}
