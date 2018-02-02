const remark = require('remark')
const jsonml = require('jsonml.js')
const YFM = require('yaml-front-matter')
const html = require('remark-html')

module.exports = function md(markdown) {
    const data = {}

    const raw = YFM.loadFront(markdown)
    const processor = remark().use(html)
    data.content = processor.processSync(raw.__content)

    delete raw.__content
    data.meta = raw

    return raw.title && raw.publishDate ?  data : false
}