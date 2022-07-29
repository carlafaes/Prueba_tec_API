const express= require('express');
const morgan= require('morgan');
const routes= require('./src/routes/routes');
const app= express();

const port = process.env.PORT || 5000;


app.use(express.json());
app.use(morgan('dev'));

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:5000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))

app.use('/api',routes);

const server= app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

app.use('/', (req,res) => {
    res.header("Access-Control-Allow-Origin", `*`); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    
});