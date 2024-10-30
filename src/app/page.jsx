import Link from "next/link";
import React from "react";

export default function PageApp() {
  return (
    <div>
      <h1>page</h1>
      <Link href="/products">products</Link>
    </div>
  );
}
