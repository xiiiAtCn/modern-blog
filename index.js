import Koa from 'koa'
import staticFile from 'koa-static'

import router from './src/router'

const app = new Koa()

app.use(staticFile('./assets'))

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('server start at http://localhost:3000')
})