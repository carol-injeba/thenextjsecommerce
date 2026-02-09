import Link from "next/link";
import { getBooks, getCategories } from "../../lib/books";
import Image from "next/image";
import Header from "../../components/Header";

export default async function BooksPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const selectedCategory = params.category || "All";
  
  const books = await getBooks();
  const categories = await getCategories();

  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  return (
    <div className="container">
      <Header />

      <div className="books-page">
        <aside className="sidebar">
          <h3>Categories</h3>
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={
                    category === "All"
                      ? "/store/books"
                      : `/store/books?category=${category}`
                  }
                  className={selectedCategory === category ? "active" : ""}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <main className="books-main">
          <h2>
            {selectedCategory} Books ({filteredBooks.length})
          </h2>
          <div className="book-grid">
            {filteredBooks.map((book) => (
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
                  {!book.inStock && (
                    <span className="out-of-stock">Out of Stock</span>
                  )}
                </div>
                <h4>{book.title}</h4>
                <p className="author">{book.author}</p>
                <p className="description">
                  {book.description.slice(0, 80)}...
                </p>
                <div className="book-footer">
                  <span className="price">₹{book.price}</span>
                  <span className="rating">
                    ⭐ {book.rating} ({book.reviews})
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
