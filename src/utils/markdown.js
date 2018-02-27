const remark = require('remark')
const jsonml = require('jsonml.js')
const YFM = require('yaml-front-matter')
const html = require('remark-html')
const github = require('remark-github')
const highlight = require('remark-highlight.js')
const cardlink = require('./remark-plugin-cardlink')

module.exports = function md(markdown) {
    const data = {}

    const raw = YFM.loadFront(markdown)
    const processor = remark().use(cardlink).use(highlight).use(html)
    data.content = processor.processSync(raw.__content)

    delete raw.__content
    data.meta = raw

    return raw.title && raw.publishDate ?  data : false
}