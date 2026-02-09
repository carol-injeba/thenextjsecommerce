import Link from "next/link";
import { getBookById } from "../../../lib/books";
import Image from "next/image";
import BookDetailClient from "./BookDetailClient";
import Header from "../../../components/Header";

export default async function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = await getBookById(parseInt(id));

  if (!book) {
    return (
      <div className="container">
        <h2>Book not found</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <Header />

      <div className="book-detail">
        <div className="book-detail-image">
          <Image src={book.image} alt={book.title} width={400} height={600} />
        </div>

        <div className="book-detail-info">
          <span className="category-badge">{book.category}</span>
          <h1>{book.title}</h1>
          <p className="author">by {book.author}</p>

          <div className="rating-section">
            <span className="rating">⭐ {book.rating}</span>
            <span className="reviews">({book.reviews} reviews)</span>
          </div>

          <p className="description">{book.description}</p>

          <div className="price-section">
            <span className="price">₹{book.price}</span>
          </div>

          <div className="stock-section">
            {book.inStock ? (
              <span className="in-stock">
                ✓ In Stock ({book.stock} available)
              </span>
            ) : (
              <span className="out-of-stock-text">✗ Out of Stock</span>
            )}
          </div>

          {book.inStock && (
            <BookDetailClient
              bookId={book.id}
              stock={book.stock}
              title={book.title}
              author={book.author}
              price={book.price}
              image={book.image}
            />
          )}

          <Link href="/store/books" className="back-link">
            ← Back to Books
          </Link>
        </div>
      </div>
    </div>
  );
}
