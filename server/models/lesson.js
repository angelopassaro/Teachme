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
                // if the lesson is require can't change price pure per la data ???
                ctx.currentInstance.available == false && ctx.data.hasOwnProperty('totalPrice') ? next(error.message = "Can't change che price now") : next ();
            }
        }
    })


//     Lesson.search = function (token, course, teacher, cb) {
//
//         var error = new Error();
//         error.status = 401;
//
//         var list = [];
//
//         Lesson.find({
//             where:{
//                 courseId: course,
//                 belongId: teacher
//             }
//         }, function(err, lessons) {
//             if (lessons) {
//                 Lessons.app.models.AccessToken.findById(token, function(err, token) {
//                     if (token) {
//                         Lesson.app.models.Student.findById(token.userId, function(err, student) {
//                             if (student) {
//                                 var length = lessons.length;
//                                 if(student.mypasspartout.expiredDate > Date.now()) {
//
//                                     /* Deve tornare tutte le lezioni con course e teacher lo studente di quella lezione più una media dei Feedback
//                                     student find ->lesson[i].studentId  feed  find -> lesson[i].studentid , lesson[i].courseId TODO chiedi privacy
//                                     JSON {lessonid :{ username : valore ,name:valore , cognome:valore , contact: valore, prezzo: valore, data:valore, durata:valore,  feed: valore} }
//
//                                     mydata = {}
//                                     mydata[username] = valore
//                                     ...
//                                     list.push(mydata)
//
//
//                                     provare una funzione (lessons, bool, cb)  richiamata function (lessons, true,function (result){  cb(result) })
//                                     */
//                                     cb(null,lessons);
//
//                                 } else {
//
//                                 }
//                             } else {
//                                 cb(error.message = "Student don't exist");
//                             }
//                         })
//
//                     } else {
//                         cb(error.message = "Invalid session");
//                     }
//                 })
//
//
//             } else {
//                 cb(error.message = " No lessons found");
//
//             }
//
//         })
//
//     }
//
//
//
//     Lesson.remoteMethod(
//         'search',
//         {
//             description: 'Find all lessons with specific course and teacher ',
//             accepts: [
//                 {arg: 'token', type: 'string', required: true, description: 'The token of current user'},
//                 {arg: 'course', type: 'string', required: true, description: 'The course of lesson'},
//                 {arg: 'teacher', type: 'string', required: true, description: ' The teacher of course'}
//             ],
//             returns: {arg: 'list', type: 'array'},
//             http: {verb: 'post', path: '/search'}
//         }
//     )
//
//
// }
