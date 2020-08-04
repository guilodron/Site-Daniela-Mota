import mongoose from 'mongoose';

const dbConnect = async () => {
  
  try{
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }catch(e) {
    console.log('erro na conexao');
  }
}

export default dbConnect;