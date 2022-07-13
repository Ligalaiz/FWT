const authors = require('./authors.db.json');
const locations = require('./locations.db.json');
const paintings = require('./paintings.db.json');

module.exports = () => ({
  authors,
  locations,
  paintings,
});
