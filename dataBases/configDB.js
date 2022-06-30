import 'dotenv/config'


export default {
    mongoDb:{
        URL: "mongodb+srv://pablo:pablo@cluster0.krjoq.mongodb.net/ecommerce?retryWrites=true&w=majority",
        options:{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
    }
}

export const options = {
    mariaDB:{
        client:"mysql2",
        connection:{
            host:"127.0.0.1",
            user:"root",
            password:"process.env.PASS_ROOT",
            database:"ecommerce",
        },
    },
    sqLite:{
        client:"sqlite3",
        connection:{
            filename:"./db.sqlite",
        },
        useNullAsDefault: true
    },
};