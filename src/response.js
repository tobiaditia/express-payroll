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
    if(data.name == 'SequelizeValidationError'){
        res.json(400, {
            'success': false,
            'message':'Validate Error',
            'data':data.errors
        })
    }else{
        serverError(data, res)
    }

}

module.exports = {
    success,
    serverError,
    validate
}