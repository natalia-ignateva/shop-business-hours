const base = require('airtable').base('appzjEhuCWgK4Kcd8');
const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

let records;

app.get('/', async (req, res) => {
  if (records) {
    console.log('cached');
    res.render('page', {
      records,
    });
  } else {
    (async () => {
      records = await base('Shop business hours')
        .select({
          view: 'Grid view',
        })
        .firstPage();

      res.render('page', {
        records,
      });

      setTimeout(() => {
        records = null;
      }, 10 * 1000);
    })();
  }
});

app.listen(3000, () => console.log('Server ready'));
