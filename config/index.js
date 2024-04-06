import { createPool } from "mysql";
import { config } from "dotenv";
config()
let connection=createPool({

    HOST : process.env.DB_HOST,
    DATABASE: process.env.DB_Name,
    USER: process.env.DB_UserName,
    PASSWORD: process.env.DB_UserPass,
    multipleStatements:true,
    connectionLimit: 90
})
export{
connection
}