var loopback = require('loopback');

/**
* Mixin that does a cascade delete on related items that are identifed in the
* settings for this mixin within a particular model
* @param Model
* @param options
*/


module.exports = function(Model, options) {


    Model.observe('before delete', function(ctx, next) {


        Model.findById( ctx.where.id , function(err, data) {


            if(data) {
                var  id = ctx.where.id;
                var  keys = Object.keys(options).forEach(function(model) {

                    var foreignKey = options[model];
                    var  linkModel = loopback.getModelByType(model);
                    var where = {};

                    where[foreignKey] = id;

                    linkModel.destroyAll(where, function(err) {
                        if (err)  console.log(err);
                    });
                })
            }


        });

        next();

    });



};
