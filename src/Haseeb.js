/** @format */

class Haseeb {
   constructor(app) {
      this.app = app;
   }

   on() {
      this.app.listen(9999, () => {
         console.log('running');
      });
   }

   error(error) {
      console.log(error.message);
      console.log(error.stack.slice(0, 50));
   }
}

module.exports = Haseeb;
