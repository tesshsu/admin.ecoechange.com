const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51HgmzIBjqnSC21bhuUPX8DMnH1ynu6iKdvoVMhjUqKgdVqDGKmrBximAok0WD9ypSgk6b3uq1ZE1uqsEEoM4PKzP00iDeWHIKx');
app.use(express.static('.'));

const YOUR_DOMAIN = 'http://localhost:3000/';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'euro',
          product_data: {
            name: 'Abonement Premium',
            images: ['https://01car.fr/_next/static/images/profile-ffd68d406893440e3d7638cc173ddb0a.jpg'],
          },
          unit_amount: 6.99,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log('Running on port 4242'));