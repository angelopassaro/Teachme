/*
start function for tutor
name as id
*/
module.exports = function(Course) {


/*
findTutor
@param university
@param coruse
@param student

find course and take all tutors
check on studet for passpartout
*/
  Course.findTutor = function(university,course,student,cb){
    Course.find(wherefind({ where: { and: [
      { universityId: university },
      { courseId: course },
    ] }}, function(err, courses){
      if(err)                     //course not find
        cb(err);
      else {
        if(student)        // student with pass
        cb();                 //create a response json (name ,lastName, feedback,contact)
        else                  // no pass
          cb();             //create a response json (feedback)
      }
    })
  );
  }


  Course.remoteMethod(
    'findTutor',
    {
      accepts: [
        {arg: 'university', type: 'string'},
        {arg: 'course', type: 'string'},
        {arg: 'student' , type: 'string'}
      ],
      returns: {arg: '', type: 'string'}
    }
  );
}