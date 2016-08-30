var app = require('D:/home/site/wwwroot/server/server.js');

app.models.Lesson.find({
    dateLesson:{lt: Date.now()}
}, function(err, lessons) {
    console.log('> update lesson');
    for(var i = 0; i < lessons.length; i++) {
        lessons[i].updateAttribute('available', false, function(err,update) {
            if (update) {
                console.log("updated")
            }
        })
    }
    process.exit();
})
