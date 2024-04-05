/** @format */
const http = require('http');

class Haseeb {
   constructor(app) {
      this.app = app;
      this.http = http.createServer(app);
   }

   on() {
      // this.app.listen(80, '0.0.0.0', () => console.log('running'));

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
