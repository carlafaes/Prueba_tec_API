const express= require('express');
const morgan= require('morgan');
const routes= require('./src/routes/routes');
const app= express();

const port = process.env.PORT || 5000;


app.use(express.json());
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use('/api',routes);

const server= app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

