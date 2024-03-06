import express from "express"
import { engine } from 'express-handlebars';
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

import sessionsRouter from "./routes/sessions.js";
import viewsRouter from "./routes/views.js";

import passport from 'passport';
import initializePassport from './config/passport.config.js';


const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({extended:true}))

app.use(cookieParser());

initializePassport();

app.use(session({
    store:MongoStore.create({
        mongoUrl:"mongodb+srv://sebasfads:ZXCasdqwe123@ecommerce.rvp0qsu.mongodb.net/",
        ttl:15,
    }),
    secret:"secretCode",
    resave:true,
    saveUninitialized:true
}))

app.use("/api/sessions", sessionsRouter);
app.use("/", viewsRouter);

app.use(passport.initialize());

// Conexión MongoDB
mongoose.connect("mongodb+srv://sebasfads:ZXCasdqwe123@ecommerce.rvp0qsu.mongodb.net/");

app.listen(3000, () => {
    console.log("Listen on port 3000");
})

