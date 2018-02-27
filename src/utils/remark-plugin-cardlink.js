module.exports = cardlink

function cardlink() {
    var Parser = this.Parser
    var tokenizers = Parser.prototype.inlineTokenizers
    var methods = Parser.prototype.inlineMethods

    tokenizers.cardlink = tokenizCardlink

    methods.splice(methods.indexOf('link'), 0, 'cardlink')
}



tokenizCardlink.notInLink = true
tokenizCardlink.locator = locateCardlink

function tokenizCardlink(eat, value, silent) {
    if (value.charAt(0) !== '@') {
        return
    }

    var match = /@\[(\w+)\]\((\w+)(?:\"(\w+)\")?(?:\"(\w+)\")?\)/.exec(value)

    if (match) {
        console.log(match)
        if (silent) {
            return true
        }
        return eat(match[0])({
            type: 'link',
            url: match[2],
            title: match[3] ? match[3] : null,
            data: {
                hProperties: {
                    className: 'cardlink'
                }
            },
            children: [
                {
                    type: 'element',
                    children: [
                        {
                            type: 'element',
                            data: { hName: 'span' },
                            children: [
                                { type: 'text', value: match[1] }
                            ]
                        },
                        {
                            type: 'element',
                            data: { hName: 'span' },
                            children: [
                                { type: 'text', value: match[2] }
                            ]
                        }
                    ]
                },
                {
                    type: 'image',
                    url: match[4] ? match[4] : ''
                }
            ]
        });
    }
}

function locateCardlink(value, fromIndex) {
    return value.indexOf('@[', fromIndex)
}