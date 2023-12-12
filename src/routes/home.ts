import express, { Express, Request, Response, Application } from 'express';
import { app } from '../index';

app.get('/', async (req: Request, res: Response) => {
    res.render('home', { pageTitle: 'Home' });
});