export function createProjects() {
  return `
    <section id="projects">
      <div class="container">
        <div class="section-header">
          <h2>My Projects</h2>
          <p>A showcase of my recent work and personal projects</p>
        </div>
        <div class="grid grid-3">
          <div class="card project-card">
            <div class="project-image">🌐</div>
            <h3>E-Commerce Website</h3>
            <p>A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.</p>
            <p><strong>Technologies:</strong> React, Node.js, MongoDB, Express, Stripe API</p>
            <div class="project-links">
              <a href="#" target="_blank">🔗 Live Demo</a>
              <a href="#" target="_blank">📁 GitHub</a>
            </div>
          </div>
          <div class="card project-card">
            <div class="project-image">📱</div>
            <h3>Task Management App</h3>
            <p>A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features. Built using modern web technologies.</p>
            <p><strong>Technologies:</strong> Vue.js, Firebase, CSS3, JavaScript</p>
            <div class="project-links">
              <a href="#" target="_blank">🔗 Live Demo</a>
              <a href="#" target="_blank">📁 GitHub</a>
            </div>
          </div>
          <div class="card project-card">
            <div class="project-image">🎮</div>
            <h3>Game Development</h3>
            <p>A 2D platformer game developed using Unity and C#. Features multiple levels, character progression, and engaging gameplay mechanics with custom artwork and sound design.</p>
            <p><strong>Technologies:</strong> Unity, C#, Photoshop, Audacity</p>
            <div class="project-links">
              <a href="#" target="_blank">🎮 Play Game</a>
              <a href="#" target="_blank">📁 GitHub</a>
            </div>
          </div>
          <div class="card project-card">
            <div class="project-image">📊</div>
            <h3>Data Visualization Dashboard</h3>
            <p>An interactive dashboard for visualizing complex datasets with charts, graphs, and real-time data updates. Includes filtering, sorting, and export functionality.</p>
            <p><strong>Technologies:</strong> Python, Django, D3.js, PostgreSQL</p>
            <div class="project-links">
              <a href="#" target="_blank">🔗 Live Demo</a>
              <a href="#" target="_blank">📁 GitHub</a>
            </div>
          </div>
          <div class="card project-card">
            <div class="project-image">🤖</div>
            <h3>AI Chatbot</h3>
            <p>An intelligent chatbot using natural language processing to provide customer support. Integrated with machine learning models for improved response accuracy.</p>
            <p><strong>Technologies:</strong> Python, TensorFlow, Flask, NLP</p>
            <div class="project-links">
              <a href="#" target="_blank">🔗 Try Bot</a>
              <a href="#" target="_blank">📁 GitHub</a>
            </div>
          </div>
          <div class="card project-card">
            <div class="project-image">📚</div>
            <h3>Learning Management System</h3>
            <p>A comprehensive LMS for educational institutions with course management, student tracking, assignment submission, and grading system.</p>
            <p><strong>Technologies:</strong> Laravel, MySQL, Bootstrap, jQuery</p>
            <div class="project-links">
              <a href="#" target="_blank">🔗 Live Demo</a>
              <a href="#" target="_blank">📁 GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}