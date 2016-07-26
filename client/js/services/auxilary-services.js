angular.module('app')
.service('tutorService', function(){
  this.isoDate = function(date){
    token = "-";
    if(date instanceof Date)
      return date.getFullYear() + token + (date.getMonth() + 1) + token + date.getDay();
    else
      return date.substring(0, 10);
  };
  
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