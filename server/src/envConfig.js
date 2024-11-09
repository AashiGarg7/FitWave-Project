import dotenv from 'dotenv';
dotenv.config();
export default {
    dbURI: process.env.DB_URI,
    JWTSECRET: process.env.JWTSECRET
}