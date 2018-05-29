import {Context} from "../utils";

const Post =  {
  Query : {
    feed(parent, args, context: Context, info) {
      return context.db.query.posts({where: {isPublished: true}}, info)
    },
    drafts(parent, args, context: Context, info) {
      return context.db.query.posts({where: {isPublished: false}}, info)
    },
    post(parent, {id}, context: Context, info) {
      return context.db.query.post({where: {id: id}}, info)
    }
  }
}

export default Post