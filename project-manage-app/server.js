const express=require('express');
const app=express();
const connectDB=require('./database/connection');
const projectrouter=require('./Route/Project');
const memberrouter=require('./Route/Member')
const cors=require('cors');

app.use(cors());

connectDB();

app.use(express.json({extended:false}))

app.use('/project',projectrouter);
app.use('/member',memberrouter);

const Port=process.env.Port||3000;

app.listen(Port,()=> console.log(`Server is running at port ${Port}`))


