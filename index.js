const express= require('express');
const morgan= require('morgan');
const routes= require('./src/routes/routes');
const app= express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api',routes);

const server= app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});