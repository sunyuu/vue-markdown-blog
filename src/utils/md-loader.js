const generate = require('./get-data.js')
const path = require('path')

module.exports = function mdLoader(source) {
    let data =  JSON.stringify(generate('./post'))
    return `module.exports = { markdown: ${data}}`
}