const express= require('express');
const morgan= require('morgan');
const routes= require('./src/routes/routes');
const app= express();

const port = process.env.PORT || 3000;


app.use(express.json());
app.use(morgan('dev'));

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))

app.use('/api',routes);

const server= app.listen(port, ()=>{
    console.log('Server is running on port 3000');
});