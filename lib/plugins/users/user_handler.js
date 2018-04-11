var Users=require("./users")

module.exports = {
    login: function (request, h) {
        let username = request.query.username;

        Users.forEach(element => {
            if(element.username==username){
                return element.store_id
            }
        })

        return ""
    }
}

