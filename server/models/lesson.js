module.exports = function(Lesson) {



// check the student for tutoring
    Lesson.observe('before save', function(ctx, next) {

        var error = new Error();
        error.status = 401;
        error.message = 'Need to be tutor';

        Lesson.app.models.Student.findOne({
            where:{
                email: ctx.instance.studentId
            }
        }, function(err, student) {
             student.isTutor ?  next() : next(error);
        })

    })

};
