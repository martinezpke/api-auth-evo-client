const express = require('express')
const config = require('./config/config');
const cors = require('cors');
/* const cookieParser = require('cookie-parser'); */


//initialization
const app = express()
app.use(cors());

//settings
app.set('port', config.port);

//Routes
app.use(require('./routes/route'));

//Server is listenning
app.listen(app.get('port'), () =>{
    console.log(`Server on http://localhost:${app.get('port')}`)
})