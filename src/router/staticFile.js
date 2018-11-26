import Router from 'koa-router'
import path from 'path'
import fs from 'fs'
const staticFileBasePath = path.resolve(__dirname, '../../assets/files')
let staticFiles = new Router()
staticFiles.get('/', async ctx => {
    debugger
    let data = fs.readdirSync(staticFileBasePath)
    ctx.body = `<ul>
        ${
            data.map(e => {
                return `<li><a href='/source/${e}'>${e}</a></li>`
            })
        }
    </ul>`
})

staticFiles.all('/*', async ctx => {
    debugger
    let capture = ctx.captures[0]
    const filePath = path.resolve(staticFileBasePath, capture)
    let stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
        let data = fs.readdirSync(filePath)
        ctx.body = `<ul style='margin: 0 auto; max-width: 1000px;'>
            ${
                data.map(e => {
                    return `<li><a href='/source/${capture}/${e}'>${e}</a></li>`
                }).join('')
            }
        </ul>`
    } else {
        const file = fs.readFileSync(filePath)
        ctx.body = `<pre style='margin: 0 auto; max-width: 1000px;font-size: 16px; padding: 10px; border: solid 1px #666; white-space: pre-line;'>${file.toString()}</pre>`
    }
})

export default staticFiles