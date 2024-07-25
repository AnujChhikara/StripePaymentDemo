
"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "@/components/PaymentForm";
 const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
 );

export default function Home() {
 

  return (
    <main className="bg-white min-h-screen flex justify-center items-center">
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
    </main>
  );
}
