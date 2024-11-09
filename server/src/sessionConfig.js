import session from 'express-session';

const sessionConfig = session({
    secret: 'some-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 5 * 60 * 1000,
    }
});

export default sessionConfig;