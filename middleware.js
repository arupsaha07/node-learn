module.exports = reqFilters = (req, res, next) => {
    if (!req.query.age) {
        res.send("plz provide age")
    }else if(req.query.age <18){
        res.send("age must be 18+")
    }else {
        next();
    }
}