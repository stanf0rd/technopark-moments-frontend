const fallback = require('express-history-api-fallback');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('./dist'));
app.use(fallback('index.html', { root: 'dist' }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening port ${port}`);
});
