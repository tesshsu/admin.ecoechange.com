import {loadStripe} from "@stripe/stripe-js";

const stripeClient = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export function setupStripe() {
  // setup stripe if necessary
}


export default stripeClient;
