'use strict';

// HTTP client
const axios = require('axios').default

// Readability, dom and dom purify
const {JSDOM} = require('jsdom')
const readability = require('readability')
const createDOMPurify = require('dompurify')
const DOMPurify = createDOMPurify((new JSDOM('')).window)

// Not too happy to allow iframe, but it's the only way to get youtube videos
const domPurifyOptions = {
    ADD_TAGS: ['iframe', 'video']
}

module.exports.extract = (event, context, callback) => {
    axios
        .get(event.url)
        .then((response) => {
            const dom = new JSDOM(response.data, {
                url: event.url
            })
            const parsed = new readability(dom.window.document, {}).parse()
            console.log('Fetched and parsed ' + event.url + ' successfully')
            return callback(null, {
                statusCode: 200,
                headers: {'Content-Type': 'text/html'},
                body: {
                    url: event.url,
                    content: DOMPurify.sanitize(parsed.content, domPurifyOptions),
                    excerpt: parsed.excerpt || ''
                },
            });
        })
        .catch((error) => {
            console.log(error)
            const response = {
                statusCode: 200,
                body: JSON.stringify({
                    error: 'Error while fetching the content',
                    details: error
                }),
            };
            return callback(null, response);
        });


};

