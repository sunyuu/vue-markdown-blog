const fs = require('fs')
const path = require('path')
const R = require('ramda')
const md = require('./markdown')

function isDir(fliename) {
    return fs.statSync(fliename).isDirectory()
}

//todo: 搞清楚map和flatMap间的关系
function findFiles(source) {
    let fileArr = source.map(filename => {
        if (isDir(filename)) {
            const subFiles = fs.readdirSync(filename).map(file => path.join(filename, file))

            return findFiles(subFiles)
        }
        return filename
    }) 
    return fileArr.join(',').split(',')
}

function readMdFile(filePath) {
    const fileContent = fs.readFileSync(path.join(process.cwd(), filePath))
    return md(fileContent)
}

module.exports = function generate(source) {
    // if (typeof source == 'object' && !Array.isArray(source)) {
    //     return source.map(value => generate(value))
    // }
    source = Array.isArray(source) ? source : [source]
    const filePaths = findFiles(source)
    let data = {}
    filePaths.forEach(elem => {
        let mdfile = readMdFile(elem)
        if (!mdfile) return
        let mdfilename = path.basename(elem, '.md')
        data[mdfilename] = {...mdfile, filepath: path.join(process.cwd(), elem)}
    })
    // return filePaths.map(elem => {
    //     let mdfile = readMdFile(elem)
    //     let data = {}
    //     data.filepath = elem
    //     data.filedata = mdfile ? mdfile : ''

    //     return data
    // })
    return data
    
}