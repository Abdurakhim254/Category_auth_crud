import dotenv from "dotenv"

dotenv.config()


export const application={
    PORT:process.env.PORT,
    URL:process.env.URL
}