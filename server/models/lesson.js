


module.exports = function(Lesson) {



// check the student for tutoring
    Lesson.observe('before save', function(ctx, next) {

        var id = " ";

        var error = new Error();
        error.status = 401;
        error.message = 'Need to be tutor';


        if(ctx.isNewInstance) {
           id = ctx.instance.studentId;
         }

        if(ctx.data) {
            id = ctx.data.studentId;
        }


        Lesson.app.models.Student.findById(id, function(err, student) {
             student.isTutor ?  next() : next(error);
        })

    })

};
