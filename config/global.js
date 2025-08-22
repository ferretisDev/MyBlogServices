import 'dotenv/config';

const global = {
    PORT: process.env.PORT,
    USER_DB: process.env.USER_DB,
    PASS_DB: process.env.PASS_DB,
    SERVER_DB: process.env.SERVER_DB,
    NAME_DB: process.env.NAME_DB,
    AUTH_DB: process.env.AUTH_DB
};

export default global;