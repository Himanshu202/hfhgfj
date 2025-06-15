export function createAbout() {
  return `
    <section id="about">
      <div class="container">
        <div class="section-header">
          <h2>About Me</h2>
          <p>Get to know more about my background, interests, and goals</p>
        </div>
        <div class="grid grid-2">
          <div class="card">
            <h3>My Story</h3>
            <p>I'm a dedicated Computer Science student with a passion for technology and problem-solving. My journey in programming began in high school, and since then, I've been constantly learning and growing in this field.</p>
            <p>I enjoy working on both front-end and back-end development, with a particular interest in creating user-friendly applications that solve real-world problems.</p>
          </div>
          <div class="card">
            <h3>Interests & Goals</h3>
            <p>Beyond coding, I'm interested in:</p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Open Source Contributions</li>
              <li>UI/UX Design</li>
              <li>Mobile App Development</li>
            </ul>
            <p>My goal is to become a full-stack developer and contribute to meaningful projects that make a positive impact.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}