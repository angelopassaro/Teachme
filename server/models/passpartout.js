module.exports = function(Passpartout) {


    Passpartout.observe('before save', function(ctx, next){
        console.log("prova");
            if(ctx.data)
                updatePasspartout(ctx);
            next();
    });


    // finire
    function updatePasspartout(ctx){
        console.log("called");
        Passpartout.app.models.Student.findOne({
            "where" : { username : ctx.currentInstance.username}
        }, function(err,student){
            if(student.mypasspartout != undefined){
                var data = Date();
                var newDate = ctx.data.mypasspartout.expiredDate;
                var  oldDate = student.mypasspartout.expiredDate;
                if(oldDate.getFullYear < newDate.getFullYear()){
                    newDate.setFullYear(newDate.getFullYear() +
                    (newDate.getFullYear() - oldDate.getFullYear()));
                }
                if(oldDate.getUTCMonth() + 1 < newDate.getUTCMonth() + 1)
                newDate.setUTCMonth((newDate.getUTCMonth() +
                (getUTCMonth() - oldDate.getUTCMonth())));
                if(oldDate.getUTCDate() < newDate.getUTCDate())
                newDate.setUTCDate((newDate.getUTCDate() +
                (newDate.getUTCDate()-oldDate.getUTCDate())));
                console.log(newDate);
            }
        });
    }
}
