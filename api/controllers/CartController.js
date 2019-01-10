/**
 * CartController
 *
 * @description :: Server-side logic for managing carts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req,res,next) {
        Cart.create(req.params.all(), function (err,data) {
            if (err) return next(err);
            if(data) return data;
        })
    }
};

