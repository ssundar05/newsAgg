
const User = require('./user')
const Politics = require('./politics')
const Entertainment = require('./entertainment')
const Sports = require('./sports')
const Technology = require('./technology')
const Financial = require('./financial')
const SourcesSelected = require('./sourcesSelected')


SourcesSelected.belongsTo(User)

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Politics,
  SourcesSelected, 
  Entertainment,
  Sports,
  Financial,
  Technology,
}
