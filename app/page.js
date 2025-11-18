export default function Home() {
  return (
     <main className="bg-blue text-gold min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Hello T!</h1>
      <section id="home"><h1>IDONTKNOW</h1></section>
      <section id="about"><h2>About Us</h2><p>Write about your brand here.</p></section>
      <section id="services"><h2>Services</h2><p>List what you offer.</p></section>
      <section id="blog"><h2>Blog</h2><p>Future posts go here.</p></section>
      <section id="shop"><h2>Shop</h2><p>Products or links to sales.</p></section>
      <section id="gallery"><h2>Gallery</h2><p>Images or portfolio.</p></section>
      <section id="testimonials"><h2>Testimonials</h2><p>Customer feedback.</p></section>
      <section id="faq"><h2>FAQ</h2><p>Answer common questions.</p></section>
      <section id="contact">
        <h2>Contact</h2>
        <form action="https://formspree.io/f/your-id" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
      <section id="footer"><p>© {new Date().getFullYear()} IDONTKNOW</p></section>
    </main>
  );
}
