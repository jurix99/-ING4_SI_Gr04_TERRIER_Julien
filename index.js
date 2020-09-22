const express = require('express')
const app = express()

require('./handles')(app);

app.listen(3000);