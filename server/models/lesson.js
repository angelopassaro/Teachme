module.exports = function(Lesson) {



// check the student for tutoring
    Lesson.observe('before save', function(ctx, next) {

        var id = "";
        var date = Date();


        var error = new Error();
        error.status = 401;
        error.message = "Can't create this lesson(check the data of lesson). You need to be tutor. ";


        if(ctx.isNewInstance) {
            
           id = ctx.instance.studentId;
           date = ctx.instance.dateLesson;
       }

        if(ctx.data) {

            id = ctx.currentInstance.studentId;
            date = ctx.currentInstance.dateLesson;
    }


        Lesson.app.models.Student.findById(id, function(err, student) {
             student.isTutor && date > Date.now() ?  next() : next(error);
        })

    })

};
