"use client";

import Link from "next/link";
import { useCart } from "../lib/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <Link href="/">
        <h1>Bible Vision</h1>
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/store">Bookstore</Link>
        <Link href="/store/books">All Books</Link>
        <Link href="/store/cart">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
}
