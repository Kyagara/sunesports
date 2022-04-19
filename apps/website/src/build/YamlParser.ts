import fs from 'fs'
import yaml from 'js-yaml'

export default function YamlParser(obj: any[], path: string) {
    const yamlParsed = yaml.dump(obj)

    fs.writeFileSync(path, yamlParsed)
}
