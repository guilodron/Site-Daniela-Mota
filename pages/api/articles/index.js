import dbConnect from '../../../utils/dbConnect';
import Article from '../../../models/Article';

dbConnect();

export default async(req, res) => {
  if(req.method === 'POST') {
    const {title, subtitle, content} = req.body;
    const titleExists = await Article.findOne({title})
    if(titleExists !== null){
      return res.json({success: false});
    }
    const article = await Article.create({
      title,
      subtitle,
      content
    });
    return res.json({success: true, article});
  }
  

  else if(req.method === 'GET') {
    const articles = await Article.find({});
    return res.json(articles);
  }

  else if(req.method === 'DELETE') {
    const {id} = req.body;

    await Article.findByIdAndDelete(id);
    return res.json({ success: true});
  }
}