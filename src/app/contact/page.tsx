"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="ministry-page">
      <header className="ministry-header">
        <div className="ministry-nav">
          <Link href="/">
            <h1 className="ministry-logo">Bible Vision</h1>
          </Link>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/store">Bookstore</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <div className="contact-page">
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Send us a message, and we'll respond as soon as possible.</p>

          {submitted ? (
            <div className="success-message">
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. We'll get back to you soon.</p>
              <button onClick={() => setSubmitted(false)} className="cta-button">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Subject *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button type="submit" className="cta-button" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        <div className="contact-info">
          <h3>Ministry Information</h3>
          <div className="info-item">
            <strong>Email</strong>
            <p>contact@biblevision.org</p>
          </div>
          <div className="info-item">
            <strong>Location</strong>
            <p>Serving communities across India</p>
          </div>
          <div className="info-item">
            <strong>Response Time</strong>
            <p>We typically respond within 24-48 hours</p>
          </div>
        </div>
      </div>

      <footer className="ministry-footer">
        <p>© 2024 Bible Vision Ministry. Serving God's Kingdom.</p>
      </footer>
    </div>
  );
}
