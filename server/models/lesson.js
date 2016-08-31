module.exports = function(Lesson) {



    // check the student for tutoring
    Lesson.observe('before save', function(ctx, next) {

        var error = new Error();
        error.status = 401;

        if(ctx.isNewInstance) {

            Lesson.app.models.Course.findById(ctx.instance.courseId, function(err, course) {
                if(course) {
                    course.toughtBy.count({teacherId: ctx.instance.belongsId},function(err,count) {
                        if (count == 1) {
                            Lesson.app.models.Student.findById(ctx.instance.studentId, function(err, student) {
                                student.isTutor && ctx.instance.dateLesson > Date.now() ?  next() : next(error.message = "Can't create this lesson(check the data of lesson). You need to be tutor. ");
                            })
                        } else {
                        next(error.message = "Don't exist a course with this teacher");
                    }
                    })
                } else {
                    next(error.message = "Course don't exist");
                }
            })
        } else {
            if(ctx.data) {
                // if the lesson is require can't change price
                ctx.currentInstance.available == false && ctx.data.hasOwnProperty('totalPrice') ? next(error.message = "Can't change che price now") : next ();
            }
        }

    })


}
