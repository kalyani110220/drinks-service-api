import express from 'express'; 
export const app = express(); 
app.get('/', (req, res) =>
 res.send('Welcome to the Drinks API!')); 
 export const app1 = express(); 
app.get('/coffeelover', (req, res) =>
 res.send('I like coffee!'));
