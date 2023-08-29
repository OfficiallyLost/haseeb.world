/** @format */
const http = require('http');

class Haseeb {
   constructor(app) {
      this.http = http.createServer(app);
   }

   on() {
      this.http.listen(8080, () => {
         console.log('running');
      });
   }

   error(error) {
      console.log(error.message);
      console.log(error.stack.slice(0, 50));
   }
}

module.exports = Haseeb;
