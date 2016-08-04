define(['app'], function(app){
  app.service('dateService', function(){
    
  /*Format a Date object following ISO standard
   *params: date (String or date object)
   *return: a string formatted yyyy-mm-dd  or for selected token
   */
  this.isoDate = function(date, token="-"){
    if(date instanceof Date)
      return [date.getFullYear(), (date.getMonth() + 1), date.getDay()].join(token);
    else
      return date.substring(0, 10).replace("-", token);
  };
  
  /*Create a JSON object Date
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
  
  /*Create an array for generating ranged days or years
   *params: start: value from start
   *params: finish: value from finish
   *return: a new array with ranged values
   *throws: TypeException if paramenters are not integer positive
   */
  this.range = function(start, finish){
    try{
      if(start < 0 || finish < 0){
        throw new Error(':parameters must be positive integers');
      }
        var tmp = new Array(finish - start);
        for(var i=start; i<=finish; i++){
          tmp[i-start] = i;
        }
      return tmp;
    }catch(e){console.log(e.name + e.message);}
  };
  /*Create array of named months. Index matches with Javascript Date
   *params: none
   * returns: array of months
   */
  this.createMonths = function(){
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July','August',
            'September', 'October', 'November', 'December'];
  };
  });
});