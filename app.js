const express = require('express');
const app = express();
const paart = process.env.PORT || 4000;

//Set port
app.set('port', paart);
//Set view directory (__dirname => DOCUMENT_ROOT)
app.set('views', __dirname + '/views');
//Set view engine to ejs
app.set('view engine', 'ejs');

//Set static path
app.use(express.static(__dirname + '/'));

//Requires
require('./routes/index')(app);

//Angiver en listener på port 4000
app.listen(paart, () => {
    console.log(`Express server started http://localhost:${paart}`);
});