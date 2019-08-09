import { Application } from 'express';

import passport from 'passport';
import passportLocal from 'passport-local';
import passportJWT from 'passport-jwt';

import { User, UserType } from '../database';

export const initPassport = (app: Application) => {
    passport.use(new passportLocal.Strategy({
        usernameField: 'username',
        passwordField: 'password'
    }, User.authenticate()));

    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    passport.use(new passportJWT.Strategy({
        jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'pokemonichooseyou' //Should be in a env variable
    }, async (jwtPayload, done) => {
        return User.findById(jwtPayload.id).then((user) => {
            return done(null, user);
        }).catch((err) => {
            return done(err);
        })
    }));

    app.use(passport.initialize());
}