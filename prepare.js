import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const config = JSON.parse(readFileSync('package.json', 'utf-8'))

let version = config.version
let dir = `epub.js-${version}`

execSync(`curl https://github.com/futurepress/epub.js/archive/refs/tags/v${version}.tar.gz -L -o v${version}.tar.gz`)
execSync(`tar -zxf v${version}.tar.gz`)
execSync(`mv ${dir} epub.js`)

let package_json = join('epub.js', 'package.json')
let json = JSON.parse(readFileSync(package_json, 'utf-8'))
delete json['scripts']
delete json['devDependencies']
writeFileSync(package_json, JSON.stringify(json, null, 4))
