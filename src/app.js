const express = require('express');
const { v1Router, v2Router } = require('./router');

const app = express();

app.use(v1Router);
app.use(v2Router);

module.exports = app;
