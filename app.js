const express = require('express')
const mongoose = require('mongoose')

const url ='mongodb://localhost/ProgrammerDBex'
const PORT = process.env.PORT || 3000;
const DB = 'mongodb+srv://sneha:Sneha20@cluster0.onku0.mongodb.net/ProgrammerDBex?retryWrites=true&w=majority';

const app = express()

mongoose.connect((DB),{useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true,
useFindAndModify:false}).then(()=>{
    console.log('connection successful..');
    }).catch((err) => console.log('no connection..'));

//mongoose.connect('mongodb://localhost:27017/ProgrammerDBex', {useNewUrlParser:true},{useUnifiedTopology:true}); 
/*
const con = mongoose.connection 
 
con.on('open',()=> {
    console.log('connected...')
})
*/
app.use(express.json())


const studentRouter = require('./routers/students')
app.use('/students',studentRouter)    

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });