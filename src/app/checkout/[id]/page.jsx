import CheckoutForm from "@/components/forms/CheckoutForm";
import React from "react";

export default async function CheckoutPage({ params }) {
  const p = await params;

  const res = await fetch(`${process.env.SERVER_ADDRESS}/api/service/${p.id}`);
  const data = await res.json();
  return (
    <div>
      <CheckoutForm data={data} />
    </div>
  );
}
