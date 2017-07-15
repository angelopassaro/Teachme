module.exports = function(Feedback) {

	"use strict";

	/*
	 * Check the value of field
	 */
	Feedback.validatesLengthOf('text', {max: 255,  message: {max: ' Enter max 255 characters  '}});
	Feedback.validatesNumericalityOf('preparation', {int: true});
	Feedback.validatesNumericalityOf('capacityToExplain', {int: true});


	/*
	 * Create a new feedback
	 */
	Feedback.observe('before save', function(ctx, next) {


		var error = new Error();
		error.status = 401;

		/*
		 * Check the new instance of feedback
		 */
		if (ctx.isNewInstance) {
			Feedback.app.models.Lesson.findById(ctx.instance.relativeId, function (err, lesson) {
				/*
				 * Check the date of lesson for add a feedback
				 */
				if (lesson) {
					var lessontime = new Date(lesson.dateLesson);
					lessontime.setMinutes(lessontime.getMinutes() + lesson.duration);

					if (Date.now() > lessontime) {
						Feedback.app.models.Student.findById(ctx.instance.studentId, function(err , student) {
							/*
							 * Delete lesson from require of student
							 */
							student.require.destroyAll({ lessonId: ctx.instance.relativeId }, function(err, count) {
								if(count['count'] == 1) {
									/*
									 * Create a notification for tutor
									 */
									student.notification.create(
											{ text : "Have a new feedback for you lesson ",
												"creation":  new Date()}
									);

									/*
									 * Add  the value for specific feedback
									 */
									ctx.instance.belongId = lesson.studentId;
									ctx.instance.course = lesson.courseId;
									ctx.instance.teacher = lesson.belongsId;
									ctx.instance.average = (ctx.instance.capacityToExplain + ctx.instance.preparation) / 2;

									next();
								} else {
									/*
									 * The lesson wasn't in list
									 */
									next(error.message = "Can't add a Feedback");
								}
							})
						})
					} else {
						/*
						 * The lesson is not over yet
						 */
						next(error.message = "Can't add a Feedback. You need to finish the lesson");
					}
				} else {
					/*
					 * Don't exist the lesson
					 */
					next(error.message = " Lesson don't find");
				}
			})
		} else {
			/*
			 * Feedback isn't a new instance
			 */
			next(error.message = "Can't edit the feedback");
		}
	})
};
