angular.module('app')
.service('tutorService', function(){
   /*Format a Date object following ISO standard*
   **params: date (String or date object)********
   **return: a string formatted yyyy/mm/dd ******
  */
  this.isoDate = function(date){
    token = "-";
    if(date instanceof Date)
      return date.getFullYear() + token + (date.getMonth() + 1) + token + date.getDay();
    else
      return date.substring(0, 10);
  };
  /*Create a JSON object Date ********************
   *params: date (could be Date object or String)*
   *return : A JSON containing day month and year*
   */
  this.parseDate = function(date){
    if(date instanceof Date)
      return {'year': date.getFullYear(), 'month': date.getMonth(), 'day': date.getDay()};
    else
      newDate = date.substring(0, 10).split('-');
      return {'year': parseInt(newDate[0]), 'month': parseInt(newDate[1]), 'day': parseInt(newDate[2])};
  };
  /*Create a ranged array
   *params: start: value from start
   *params: finish: value from finish
   *return: a new array with ranged value
  */
  this.range = function(start, finish){
    var tmp = new Array(finish - start);
    for(var i=start; i<=finish; i++){
        tmp[i-start] = i;
    }
    return tmp;
  };
  
  this.createMonths = function(){
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July','August',
            'September', 'October', 'November', 'December'];
  };
});