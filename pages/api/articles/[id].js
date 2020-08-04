import dbConnect from '../../../utils/dbConnect';
import Article from '../../../models/Article';

dbConnect();

export default async function (req, res) {
  const {id} = req.query;
  try{

    const article = await Article.findById(id);
    return res.json(article);
  }catch(e){
    return res.json({ msg: 'error'});
  }
}