import Router from 'koa-router'
import staticFiles from './staticFile'

let router = new Router()

router.use('/source', staticFiles.routes(), staticFiles.allowedMethods())

export default router