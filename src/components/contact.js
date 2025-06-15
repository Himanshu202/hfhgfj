export function createContact() {
  return `
    <section id="contact">
      <div class="container">
        <div class="section-header">
          <h2>Get In Touch</h2>
          <p>Let's connect and discuss opportunities</p>
        </div>
        <div class="grid grid-2">
          <div class="card">
            <h3>Contact Information</h3>
            <div style="margin-bottom: 2rem;">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <div style="width: 40px; height: 40px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>john.doe@email.com</p>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <div style="width: 40px; height: 40px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <div style="width: 40px; height: 40px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>City, State, Country</p>
                </div>
              </div>
            </div>
            <div class="social-links" style="justify-content: flex-start;">
              <a href="#" target="_blank" title="LinkedIn">💼</a>
              <a href="#" target="_blank" title="GitHub">🐱</a>
              <a href="#" target="_blank" title="Twitter">🐦</a>
              <a href="#" target="_blank" title="Instagram">📷</a>
            </div>
          </div>
          <div class="card">
            <h3>Send a Message</h3>
            <form class="contact-form">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" required>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="social-links">
          <a href="#" target="_blank">💼</a>
          <a href="#" target="_blank">🐱</a>
          <a href="#" target="_blank">🐦</a>
          <a href="#" target="_blank">📷</a>
        </div>
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </div>
    </footer>
  `;
}