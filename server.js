const BakeEnd = require('bake-end')

BakeEnd(
  {
    mongoURL: 'mongodb://localhost:27017/test',
    port: 8888,
    dataRequirements: {
      post: {
        title: { type: String },
        content: { type: String }
      }
    }
  }
)

