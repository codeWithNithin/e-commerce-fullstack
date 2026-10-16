import app from './app.js'
import connectDB from './config/db.js'
import { Config } from './config/env.js'
import logger from './config/logger.js'

async function startServer() {
    try {
        // connect db first
        await connectDB()

        logger.info('DB connected successfully')

        const PORT: number = Number(Config.port)

        app.listen(PORT, () => {
            logger.info('server running at PORT', { port: PORT })
        })
    } catch (err) {
        logger.error('err from server', { err: err })
    }
}

startServer()
