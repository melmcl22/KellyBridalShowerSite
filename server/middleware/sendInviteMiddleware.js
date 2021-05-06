module.exports = (req, res, next) => {
    res.body = {message: "this is the message from middleware"};
    return next();
}
