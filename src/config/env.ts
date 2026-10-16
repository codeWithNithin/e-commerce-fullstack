import dotenv from 'dotenv'
// .env.dev || prod || test

dotenv.config({ path: `./.env.${process.env.NODE_ENV || 'dev'}` })

const { NODE_ENV, PORT, DB_URL } = process.env

export const Config = {
    port: PORT || 5504,
    NODE_ENV: NODE_ENV || 'dev',
    DB_URL,
}
