const base = require('airtable').base('appzjEhuCWgK4Kcd8');

(async () => {
  const records = await base('Shop business hours')
    .select({
      view: 'Grid view',
    })
    .firstPage();

  for (const record of records) {
    console.log(record.get('Day'), record.get('Hours'));
  }
})();
