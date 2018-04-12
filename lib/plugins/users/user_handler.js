var Users=require("./users")

module.exports = {
    login: function (request, h) {
        let username = request.query.username
        let result = ""

        Users.forEach(element => {
            if(element.username==username){
                result = element.store_id
            }
        })

        return result
    }
}

