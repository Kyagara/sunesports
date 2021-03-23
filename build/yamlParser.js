const fs = require('fs')
const yaml = require('js-yaml')

function YamlParser(obj, path) {
    let yamlParsed = yaml.dump(obj)
    fs.writeFileSync(path, yamlParsed)
}

exports.YamlParser = YamlParser
