exports.getTransactions = (req, res, next) => {
    res.send('GET transactions')
}

exports.addTransaction = (req, res, next) => {
    res.send('POST transaction')
}

exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transactions')
}