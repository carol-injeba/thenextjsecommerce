import Link from "next/link";
import { getBooks, getCategories } from "../lib/books";
import Image from "next/image";
import Header from "../components/Header";

export default async function StorePage() {
  const books = await getBooks();
  const categories = await getCategories();
  const featuredBooks = books.slice(0, 3);

  return (
    <div className="container">
      <Header />

      <section className="hero">
        <h2>Discover Faith-Building Resources</h2>
        <p>Explore Christian books that inspire, encourage, and strengthen your walk with God.</p>
      </section>

      <section className="categories">
        <h3>Browse by Category</h3>
        <div className="category-grid">
          {categories
            .filter((c) => c !== "All")
            .map((category) => (
              <Link
                key={category}
                href={`/store/books?category=${category}`}
                className="category-card"
              >
                {category}
              </Link>
            ))}
        </div>
      </section>

      <section className="featured">
        <h3>Featured Books</h3>
        <div className="book-grid">
          {featuredBooks.map((book) => (
            <Link
              key={book.id}
              href={`/store/books/${book.id}`}
              className="book-card"
            >
              <div className="book-image">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={200}
                  height={300}
                />
              </div>
              <h4>{book.title}</h4>
              <p className="author">{book.author}</p>
              <div className="book-footer">
                <span className="price">₹{book.price}</span>
                <span className="rating">⭐ {book.rating}</span>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/store/books" className="view-all">
          View All Books →
        </Link>
      </section>

      <footer className="footer">
        <p>© 2024 Bible Vision - The Book Services</p>
      </footer>
    </div>
  );
}
