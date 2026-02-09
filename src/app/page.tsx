import Link from "next/link";

export default function Home() {
  return (
    <div className="ministry-page">
      <header className="ministry-header">
        <div className="ministry-nav">
          <h1 className="ministry-logo">Bible Vision</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/store">Bookstore</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Bible Vision</h2>
          <p className="hero-tagline">Bible Based Healing Hearts</p>
          <div className="hero-divider"></div>
        </div>
      </section>

      <section className="believer-section">
        <div className="believer-content">
          <h3 className="section-title">Every Believer is</h3>
          <div className="believer-grid">
            <div className="believer-card">
              <p>A caring evangelist living missionally</p>
            </div>
            <div className="believer-card">
              <p>An effective counsellor</p>
            </div>
            <div className="believer-card">
              <p>An institution of love</p>
            </div>
          </div>
        </div>
      </section>

      <section className="prayer-section">
        <div className="prayer-container">
          <h3 className="section-title">Believer's Prayer</h3>
          <div className="prayer-cards">
            <div className="prayer-card">
              <p className="prayer-text">
                <strong>Gracious Father,</strong>
                <br />
                Use me to build Your people, my church, and the unchurched
                community through caring evangelism with missional living,
                effective counselling, and loving service.
                <br />
                <em>In Jesus' Name, Amen.</em>
              </p>
            </div>
            <div className="prayer-card">
              <p className="prayer-text">
                <strong>Loving Father,</strong>
                <br />
                Graciously do not forsake me until I do my part in building Your
                people, my church, and the unchurched congregation through
                evangelism, counselling, and loving service.
                <br />
                <em>In Jesus' Name, Amen.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <div className="resources-content">
          <h3 className="section-title">Our services</h3>
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-card-content">
                <h4>Bridging Resources</h4>
                <p>
                  Connecting believers with essential spiritual tools and
                  guidance
                </p>
              </div>
            </div>
            <div className="resource-card">
              <div className="resource-card-content">
                <h4>Evangelism Kits</h4>
                <p>
                  Equipping you to share the Gospel effectively in your
                  community
                </p>
              </div>
            </div>
            <div className="resource-card">
              <div className="resource-card-content">
                <h4>Counsellor's Package</h4>
                <p>
                  Comprehensive resources for effective biblical counselling
                </p>
              </div>
            </div>
            <div className="resource-card">
              <div className="resource-card-content">
                <h4>Literature Store</h4>
                <p>
                  Inspiring Christian books and materials for spiritual growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Explore Our Christian Bookstore</h2>
          <p>
            Discover inspiring books, devotionals, and resources for your
            spiritual journey.
          </p>
          <Link href="/store" className="cta-button">
            Visit Bookstore →
          </Link>
        </div>
      </section>

      <footer className="ministry-footer">
        <p>© 2024 Bible Vision Ministry. Serving God's Kingdom.</p>
        <Link href="/contact">Get in Touch</Link>
      </footer>
    </div>
  );
}
