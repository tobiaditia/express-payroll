const success = (statusCode, message , data, res) => {
    res.json(statusCode, {
        'success': true,
        message,
        data,
    })
}

const serverError = (data, res) => {
    res.json(500, {
        'success': false,
        'message':'Server Error',
        data
    })
}

const validate = (data, res) => {
    res.json(400, {
        'success': false,
        'message':'Validate Error',
        data
    })
}

module.exports = {
    success,
    serverError,
    validate
}