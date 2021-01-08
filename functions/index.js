const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I4halH0OQ8P8A4gkecTqVmgB1lQzUSGVHCIsJLAmxeiaEOlAZLFXTM30bmyvg6LK8AcE2ypcV79LWibMCQRnxzD006trxetmS')

//API

//API config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/checkout/create', async (request, response) => {

    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });

    console.log('BOOOOM!!! payment request recieved for >>>>>>', total)

    //200 -> OK, 201 -> CREATED
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

//Listen command
exports.api = functions.https.onRequest(app);