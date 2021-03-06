(function () {
  'use-strict';
  define(['app'], function (app) {
    'use-strict';
    app.service('$date', $date);

    function $date() {
      var ACCEPTED_TOKENS = ['-', '/', '.', ' '];
      /*Format a Date object following ISO standard
     *params: date (String or date object), token: An integer that represent token separation
     * Possible values of token: 0 => '-', 1 => '/', 2 => '.', 3 =>' '. Values greater to 3 or lesser to 0 are 
     * assigned to 1
     *return: a string formatted yyyy-mm-dd  or for selected token
     */
      this.format = function (date, token) {
        token = (token < 0 || token > 3) ? 0 : token;
        if (date instanceof Date)
          return [date.getFullYear(), (date.getMonth() + 1), date.getDay()].join(ACCEPTED_TOKENS[token]);
        else
          return date.substring(0, 10).replace("-", ACCEPTED_TOKENS[token]);
      };

      /*Create a JSON object Date
       *params: date (could be Date object or String)*
       *return : A JSON containing day month and year*
       */
      this.toJSON = function (date) {
        if (date instanceof Date)
          return { 'year': date.getFullYear(), 'month': date.getMonth(), 'day': date.getDay() };
        else
          newDate = date.substring(0, 10).split('-');
        return { 'year': parseInt(newDate[0]), 'month': parseInt(newDate[1]), 'day': parseInt(newDate[2]) };
      };

      /*Create an array for generating ranged days or years
       *params: start: value from start
       *params: finish: value from finish
       *return: a new array with ranged values
       *throws: TypeException if paramenters are not integer positive
       */
      this.range = function (start, finish) {
        try {
          if (start < 0 || finish < 0) {
            throw new Error(':parameters must be positive integers');
          }
          var tmp = new Array(finish - start);
          for (var i = start; i <= finish; i++) {
            tmp[i - start] = i;
          }
          return tmp;
        } catch (e) { console.log(e.name + e.message); }
      };

      /*Create array of named months. Index matches with Javascript Date
       *params: none
       * returns: array of months
       */
      this.createMonths = function () {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'];
      };

      /** 
       * This method check if a date have a leap year
       * params: date => a date or a string formatted with format method
       */
      this.isLeapYear = function(year){ 
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
      };
      
      this.checkDays = function(month, year){
        switch(month){
          case 'February':
            if(this.isLeapYear(year))
              return this.range(1, 29);
            else
              return this.range(1, 28);
          case 'November': case 'April': case 'June': case 'September':
            return this.range(1, 30);
          default:
            return this.range(1, 31);
        }
      }
      
    }
  });
})();
