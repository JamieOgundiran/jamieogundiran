class PortfolioDataLoader {
  constructor() {
    this.data = null;
  }

  // Load JSON data
  async loadData() {
    try {
      const response = await fetch('data/portfolio-data.json');
      this.data = await response.json();
      return this.data;
    } catch (error) {
      console.error('Error loading portfolio data:', error);
      return null;
    }
  }

  // Generate project card HTML
  generateProjectCard(project) {
    return `
      <a href="${project.githubUrl}" target="_blank" class="project-card" data-category="${project.category}">
        <div class="project-image">
          <img src="${project.image}" alt="${project.imageAlt}">
        </div>
        <div class="project-content">
          <h3 class="project-heading">${project.title}</h3>
          <p>${project.description}</p>
        </div>
      </a>
    `;
  }

  // Generate research card HTML
  generateResearchCard(research) {
    const period = research.endDate === 'present' 
      ? `${new Date(research.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - Present`
      : `${new Date(research.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${new Date(research.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`;

    return `
      <a class="experience-card" target="_blank" href="${research.githubUrl}">
        <div class="company">
          ${research.title}
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        <p class="description">${research.description}</p>
        <p class="period">${period}</p>
      </a>
    `;
  }

  // Generate achievement card HTML
  generateAchievementCard(achievement) {
    return `
      <a class="experience-card" target="_blank" href="${achievement.linkedinUrl}">
        <div class="company">
          ${achievement.title}
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        <p class="description">${achievement.description}</p>
        <p class="period">${achievement.period}</p>
      </a>
    `;
  }

  // Generate blog post card HTML
  generateBlogCard(post) {
    const formattedDate = new Date(post.publishedDate).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    // Pick a post-specific image when provided; otherwise fallback to a category image
    const dummyImage = this.getDummyImage(post.category);
    const imageSrc = post.image || dummyImage;

    return `
      <a href="blog-post-${post.id}.html" class="blog-card" data-category="${post.category.toLowerCase().replace(' ', '-')}">
        <div class="blog-image">
          <img src="${imageSrc}" alt="${post.title}" loading="lazy">
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <span class="blog-date">${formattedDate}</span>
            <span class="blog-read-time">${post.readTime}</span>
          </div>
          <h2 class="blog-title">${post.title}</h2>
          <p class="blog-excerpt">${post.excerpt}</p>
        </div>
      </a>
    `;
  }

  // Get dummy image based on category
  getDummyImage(category) {
    const imageMap = {
      'AI Technology': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center',
      'Research': 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&h=400&fit=crop&crop=center',
      'Industry Insights': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center',
      'Career Development': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center'
    };
    
    return imageMap[category] || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center';
  }

  // Display projects with optional limit
  displayProjects(containerId, limit = null) {
    if (!this.data) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    let projects = this.data.personalProjects.filter(p => p.featured);
    if (limit) {
      projects = projects.slice(0, limit);
    }

    container.innerHTML = projects.map(project => this.generateProjectCard(project)).join('');
  }

  // Display research with optional limit
  displayResearch(containerId, limit = null) {
    if (!this.data) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    let research = this.data.recentResearch.filter(r => r.featured);
    if (limit) {
      research = research.slice(0, limit);
    }

    container.innerHTML = research.map(item => this.generateResearchCard(item)).join('');
  }

  // Display achievements with optional limit
  displayAchievements(containerId, limit = null) {
    if (!this.data) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    let achievements = this.data.recentAchievements.filter(a => a.featured);
    if (limit) {
      achievements = achievements.slice(0, limit);
    }

    container.innerHTML = achievements.map(achievement => this.generateAchievementCard(achievement)).join('');
  }

  // Display blog posts with optional limit
  displayBlogs(containerId, limit = null) {
    if (!this.data) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    let posts = this.data.blogPosts.filter(p => p.status === 'published');
    if (limit) {
      posts = posts.slice(0, limit);
    }

    container.innerHTML = posts.map(post => this.generateBlogCard(post)).join('');
  }

  // Initialize data loading and display for index page
  async initIndexPage() {
    await this.loadData();
    if (this.data) {
      this.displayProjects('projects-grid', 4);
      this.displayResearch('research-list', 3);
      this.displayAchievements('achievements-list', 3);
    }
  }

  // Initialize data loading and display for projects page
  async initProjectsPage() {
    await this.loadData();
    if (this.data) {
      this.displayProjects('projects-grid');
    }
  }

  // Initialize data loading and display for research page
  async initResearchPage() {
    await this.loadData();
    if (this.data) {
      this.displayResearch('research-list');
    }
  }

  // Initialize data loading and display for achievements page
  async initAchievementsPage() {
    await this.loadData();
    if (this.data) {
      this.displayAchievements('achievements-list');
    }
  }

  // Initialize data loading and display for blog page
  async initBlogPage() {
    await this.loadData();
    if (this.data) {
      this.displayBlogs('blog-posts-container');
    }
  }
}

// Create global instance
window.portfolioLoader = new PortfolioDataLoader();
