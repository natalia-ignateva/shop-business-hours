const base = require('airtable').base('appzjEhuCWgK4Kcd8');
const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  (async () => {
    const records = await base('Shop business hours')
      .select({
        view: 'Grid view',
      })
      .firstPage();

    res.render('page', {
      records,
    });
  })();
});

app.listen(3000, () => console.log('Server ready'));
