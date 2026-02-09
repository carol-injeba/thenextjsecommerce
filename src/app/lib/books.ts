export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  inStock: boolean;
  stock: number;
}

export async function getBooks(): Promise<Book[]> {
  // TODO: Replace with actual database call
  // Example: const books = await db.query('SELECT * FROM books');
  return [
    {
      id: 1,
      title: "The Purpose Driven Life",
      author: "Rick Warren",
      price: 499,
      category: "Christian Living",
      rating: 4.8,
      reviews: 8500,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
      description: "Discover God's amazing plan for your life and your purpose.",
      inStock: true,
      stock: 120
    },
    {
      id: 2,
      title: "Jesus Calling",
      author: "Sarah Young",
      price: 599,
      category: "Devotional",
      rating: 4.9,
      reviews: 12000,
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400",
      description: "Daily devotional readings with Scripture for every day of the year.",
      inStock: true,
      stock: 95
    },
    {
      id: 3,
      title: "The Case for Christ",
      author: "Lee Strobel",
      price: 449,
      category: "Apologetics",
      rating: 4.7,
      reviews: 6200,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
      description: "A journalist's personal investigation of the evidence for Jesus.",
      inStock: true,
      stock: 78
    },
    {
      id: 4,
      title: "Mere Christianity",
      author: "C.S. Lewis",
      price: 399,
      category: "Theology",
      rating: 4.8,
      reviews: 9800,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
      description: "C.S. Lewis's classic exploration of Christian belief and practice.",
      inStock: true,
      stock: 145
    },
    {
      id: 5,
      title: "Praying God's Word",
      author: "Beth Moore",
      price: 549,
      category: "Prayer",
      rating: 4.6,
      reviews: 4300,
      image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=400",
      description: "Breaking free from spiritual strongholds through Scripture-based prayer.",
      inStock: false,
      stock: 0
    },
    {
      id: 6,
      title: "The Hiding Place",
      author: "Corrie ten Boom",
      price: 349,
      category: "Biography",
      rating: 4.9,
      reviews: 7600,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
      description: "The triumphant true story of faith and forgiveness during the Holocaust.",
      inStock: true,
      stock: 62
    }
  ];
}

export async function getBookById(id: number): Promise<Book | undefined> {
  // TODO: Replace with actual database call
  // Example: const book = await db.query('SELECT * FROM books WHERE id = ?', [id]);
  const books = await getBooks();
  return books.find(b => b.id === id);
}

export async function getCategories(): Promise<string[]> {
  // TODO: Replace with actual database call
  // Example: const categories = await db.query('SELECT DISTINCT category FROM books');
  return ["All", "Christian Living", "Devotional", "Apologetics", "Theology", "Prayer", "Biography"];
}
