import Koa from 'koa'
import static from 'koa-static'

const app = new Koa()

app.use(static('./assets'))

app.use(async ctx => {
    ctx.body = 'Welcome to modern blog'
})

app.listen(3000, () => {
    console.log('server start at http://localhost:3000')
})