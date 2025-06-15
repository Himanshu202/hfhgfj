export function createEducation() {
  return `
    <section id="education" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header">
          <h2>Education</h2>
          <p>My academic journey and achievements</p>
        </div>
        <div class="grid grid-2">
          <div class="card">
            <h3>Bachelor of Science in Computer Science</h3>
            <p><strong>University Name</strong> | 2022 - 2026</p>
            <p>Currently pursuing my degree with a focus on software engineering, data structures, algorithms, and web development. Maintaining a strong GPA while actively participating in coding competitions and tech clubs.</p>
            <p><strong>Relevant Coursework:</strong></p>
            <ul style="margin-left: 1.5rem;">
              <li>Data Structures and Algorithms</li>
              <li>Object-Oriented Programming</li>
              <li>Database Management Systems</li>
              <li>Web Development</li>
              <li>Software Engineering</li>
            </ul>
          </div>
          <div class="card">
            <h3>Certifications & Achievements</h3>
            <div style="margin-bottom: 1.5rem;">
              <h4>Online Certifications</h4>
              <ul style="margin-left: 1.5rem;">
                <li>JavaScript Algorithms and Data Structures - freeCodeCamp</li>
                <li>Responsive Web Design - freeCodeCamp</li>
                <li>React Development - Coursera</li>
              </ul>
            </div>
            <div>
              <h4>Academic Achievements</h4>
              <ul style="margin-left: 1.5rem;">
                <li>Dean's List - Fall 2023</li>
                <li>Programming Competition - 2nd Place</li>
                <li>Hackathon Winner - Best UI/UX Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}