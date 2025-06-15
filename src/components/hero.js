export function createHero() {
  return `
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>John Doe</h1>
            <p class="subtitle">Computer Science Student & Aspiring Developer</p>
            <p>Passionate about creating innovative solutions and learning new technologies. Currently pursuing my degree in Computer Science with a focus on web development and software engineering.</p>
            <div class="hero-buttons">
              <a href="#projects" class="btn btn-primary">View My Work</a>
              <a href="#contact" class="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div class="hero-image">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Profile" class="profile-image">
          </div>
        </div>
      </div>
    </section>
  `;
}