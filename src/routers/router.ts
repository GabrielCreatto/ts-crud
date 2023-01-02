import express, { Request, Response, Express } from 'express';
import bodyParser from 'body-parser';
import { connect_database } from './models/model';

export async function init_routers(): Promise<Express> {

    const app = express();
    app.use(bodyParser.json());
    app.use('/') //someapp)

    await connect_database();

    return app;
    
}