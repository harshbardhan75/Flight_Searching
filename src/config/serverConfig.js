const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname, '../../.env') // goes up twice: from config -> src -> Searching_micro
});

module.exports = {
  PORT: process.env.PORT
   
};
