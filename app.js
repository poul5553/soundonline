const express = require('express');
const app = express();
const paart = process.env.PORT || 4000;

/* Requires */
require('./config/index')(app);
require('./routes/index')(app);

//Angiver en listener på port 4000
app.set('port', paart);
app.listen(paart, () => {
    console.log(`Express server started http://localhost:${paart}`);
});