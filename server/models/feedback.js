module.exports = function(Feedback) {


    Feedback.validatesLengthOf('text', {max: 255,  message: {max: ' Enter max 255 characters  '}});
    Feedback.validatesNumericalityOf('preparation', {int: true});
     Feedback.validatesNumericalityOf('capacityToExplain', {int: true});


    /* Per non far inviare un altro feedback alla stessa lezione eliminare il valore in requrie*/
    Feedback.observe('before save', function(ctx, next) {


        var error = new Error();
        error.status = 401;


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
                                        { text : "Have a new feedback for you lesson ",
                                                    "creation":  new Date()}
                                     );

                                    ctx.instance.belongId = lesson.studentId
                                    ctx.instance.average =(ctx.instance.capacityToExplain + ctx.instance.preparation) / 2

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


};
