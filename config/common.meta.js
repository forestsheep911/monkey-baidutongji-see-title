const pj = require('../package.json')
module.exports = {
  name: pj.name,
  namespace: pj.homepage,
  version: pj.version,
  description: pj.description,
  author: pj.author,
  copyright: pj.author,
  license: pj.license,
  match: ['https://tongji.baidu.com/*'],
  require: [],
  'run-at': 'document-start',
  supportURL: pj.bugs.url,
  homepage: pj.homepage,
  grant: ['GM_xmlhttpRequest'],
  icon: 'https://img.icons8.com/ios/50/000000/happy-eyes.png',
}
