module.exports = function(Lesson) {

	"use strict";

	/*
	 * Create a  lesson and edit it
	 */
	Lesson.observe('before save', function(ctx, next) {

		var error = new Error();
		error.status = 401;

		/*
		 * Create a new lesson
		 * Search the specific course with specific teacher and create the lesson
		 */
		if(ctx.isNewInstance) {
			Lesson.app.models.Course.findById(ctx.instance.courseId, function(err, course) {
				if(course) {
					course.toughtBy.count({teacherId: ctx.instance.belongsId},function(err,count) {
						if (count == 1) {
							Lesson.app.models.Student.findById(ctx.instance.studentId, function(err, student) {
								//TODO rivedere/rendere leggibile
								/*
								 * Check the student and lesson date for creat a lesson
								 */
								student !== null &&
								student.isTutor &&
								ctx.instance.dateLesson > Date.now() &&
								ctx.instance.startLesson > ctx.instance.dateLesson ?  next() : next(error.message = "Can't create this lesson(check the data of lesson). You need to be tutor. ");

							})
						} else {
							/*
                             * No teacher found
							 */
							next(error.message = "Don't exist a course with this teacher");
						}
					})
				} else {
					/*
					 * No course found
					 */
					next(error.message = "Course don't exist");
				}
			})
		} else {
			/*
			 * Update a lesson
			 */
			if(ctx.data) {
				ctx.currentInstance.available == false && ctx.data.hasOwnProperty('totalPrice') ? next(error.message = "Can't change che price now") : next ();
			}
		}
	})


	/*
	 * Delete a lesson
	 */
	Lesson.observe('before delete', function (ctx, next) {

		var error = new Error();
		error.status = 401;
		/*
		 * Delete a lesson if not available
            se da problemi provare ad aggiungere  || ctx.where.studentId nella find(non ha senso)
		 */
		Lesson.findById(ctx.where.id , function(err, lesson) {
			if(lesson) {
				if (lesson.available == false) {
					/*
					 * The lesson is up. Can't delete now
					 */
					next(error.message = "Can't delete this lesson now. You must finish it.");
				} else {
					next();
				}
			} else {
				/*
				 * Fail the find on lesson
				 */
				next(error.message = "This lesson don't exist");
			}
		})
	})



	/**
	 * Search the lessons with specific tutor and specific teacher
	 * @param {string} token - user token that searches
	 * @param {string} course - required course
	 * @param {string} teacher - required teacher
	 * @callback cb
	 */
	Lesson.search = function (token, course, teacher, cb) {

		var error = new Error();
		error.status = 401;

		/*
		 * Find the specific lesson
		 */
		Lesson.find({
			where:{
				courseId: course,
				belongsId: teacher
			}
		}, function(err, lessons) {
			/*
			 * Check the lesson existence
			 */
			 if (lessons.length > 0) {
				 Lesson.app.models.AccessToken.findById(token, function(err, token) {
					 /*
					  * So check user existence and session
					  */
					 if (token) {
						 Lesson.app.models.Student.findById(token.userId, function(err, student) {
							 if (student) {
								 var length = lessons.length;
								 var response = [];
								 /*
								  * and student proprieties
								  */
								  if(student.hasOwnProperty('mypasspartout') && student.mypasspartout.hasOwnProperty('expiredDate')
										  && student.mypasspartout.expiredDate > Date.now()) {

									  //TODO riscrivere
									  /*
									   * Create a json for every lesson founded
									   */
									  for( var i = 0; i < length; i++) {
										  makeLesson(lessons[i], true, student.email,function (mylesson) {
											  response.push(mylesson);
											  if(response.length === length) {
												  cb(null,response);
											  }
										  });
									  }

								  } else {

									  for( var i = 0; i < length; i++) {
										  makeLesson(lessons[i], false, student.email, function (mylesson) {
											  response.push(mylesson);
											  if(response.length === length) {
												  cb(null,response);
											  }
										  });
									  }
								  }

							 } else {
								 /*
								  * Student not founded
								  */
								 cb(error.message = "Student don't exist");
							 }
						 })

					 } else {
						 /*
						  * Fail the check on token
						  */
						 cb(error.message = "Invalid session");
					 }
				 })


			 } else {
				 /*
				  * Fail the check on lesson
				  */
				 cb(error.message = " No lessons found");

			 }

		})

	}

	/**
	 * Create a json for a lesson
	 * Create a json for normal user or  passpartout user
	 * @param {string} lesson - the lesson founded
	 * @param {boolean} bool -  true student have a valid passpartout, otherwise false
	 * @param {string} studentMail - the email of student  that search for lessons
	 * @callback cb
	 */
	function makeLesson(lesson, bool, studentMail, cb) {

		var data = {};

		/*
		 * find the tutor
		 */
		Lesson.app.models.Student.findById(lesson.studentId, function(err,tutor) {

			/*
			 * Lesson requirements
			 * need to be available , can't tutor himself, the lesson must be up
			 */
			if(lesson.available == true && tutor.email != studentMail && lesson.dateLesson > Date.now() ) {

				/*
				 * Check tutor proprieties
				 */
				if(bool || (tutor.hasOwnProperty('mypasspartout') && tutor.mypasspartout.hasOwnProperty('expiredDate')
						&& tutor.mypasspartout.expiredDate > Date.now())) {

					data["username"] = tutor.username;
					data["name"] = tutor.name;
					data["lastName"] = tutor.lastName;
					data["contacs"] = tutor.contacts;
				}

				data['idLesson'] = lesson.id;
				data["price"] = lesson.totalPrice;
				data["dataLesson"] = lesson.dateLesson;
				data["duration"] = lesson.duration;



				/*
				 * Find the feedback tutor/course/teacher
				 */
				Lesson.app.models.Feedback.find({
					where :{
						belongId: tutor.id,
						course: lesson.courseId,
						teacher: lesson.belongsId
					}
				},function(err,feeds) {
					var length = feeds.length;


					if(length == 0) {
						data['Feedback'] = "No feedback";
					} else {
						var average = 0;

						for(var c = 0; c < length; c++) {
							average += feeds[c].average;
						}

						data['Feedback'] = average / length;

					}
					cb(data);
				})

			} else {
				/*
				 * Check on lesson requirements fail
				 */
				cb("No available lesson");
			}
		})
	}


	/*
	 * API for search a specific lesson
	 */
	Lesson.remoteMethod(
			'search',
			{
				description: 'Find all lessons with specific course and teacher ',
				accepts: [
					{arg: 'token', type: 'string', required: true, description: 'The token of current user'},
					{arg: 'course', type: 'string', required: true, description: 'The course of lesson'},
					{arg: 'teacher', type: 'string', required: true, description: ' The teacher of course'}
					],
					returns: {arg: 'list', type: 'array'},
					http: {verb: 'post', path: '/search'}
			}
	)


}
