module.exports = function(Feedback) {


    Feedback.validatesLengthOf('text', {max: 255,  message: {max: ' Enter max 255 characters  '}});


    /* Per non far inviare un altro feedback alla stessa lezione eliminare il valore in requrie*/
    Feedback.observe('before save', function(ctx, next) {


        var error = new Error();
        error.status = 401;

        var requirebool;

        if (ctx.isNewInstance) {

            Feedback.app.models.Lesson.findById(ctx.instance.relativeId, function (err, lesson) {

                if (lesson) {

                    var lessontime = new Date(lesson.dateLesson);
                    lessontime.setMinutes(lessontime.getMinutes() + lesson.duration);

                    if (Date.now() > lessontime) {

                        Feedback.app.models.Student.findById(ctx.instance.studentId, function(err , student) {

                            student.require.destroyAll({ lessonId: ctx.instance.relativeId }, function(err, count) {
                                if(count['count'] == 1) {
                                    student.notification.create(
                                        { text : "Have a new feedback from " + lesson.username +"for the lesson ",
                                                    "creation":  new Date()}
                                     );
                                    ctx.instance.belongId = lesson.studentId
                                    next();
                                } else {
                                    next(error.message = "Can't add a Feedback");
                                }
                            })
                        })
                    } else {
                        next(error.message = "Can't add a Feedback. You need to finish the lesson");
                    }
                } else {
                    next(error.message = " Lesson don't find");
                }
            })
        } else {
            next();
        }

    })


    //
    // function required (id, lesson, cb) {
    //
    //     Feedback.app.models.Student.findById(id, function(err , student) {
    //
    //         student.require.destroyAll({ lessonId: lesson }, function(err, count) {
    //             return count
    //         })
    //     })
    //
    // }



};
