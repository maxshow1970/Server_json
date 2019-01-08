module.exports = function () {
   var faker = require("faker");
   var _ = require("lodash");

    return{
        magazin: _.times(100, function (n) {
            return{
                id: n,
                name : faker.name.lastName(),
                size: n,
                price : n

            }
        }) 
    }

}
