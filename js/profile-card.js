const X_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;

class ProfileCard extends HTMLElement {
  connectedCallback() {
    const name     = this.getAttribute('name')     || 'Jamie Ogundiran';
    const title    = this.getAttribute('title')    || 'Founder @ Stealth';
    const imgSrc   = this.getAttribute('img-src')  || 'images/jamieo.png';
    const imgAlt   = this.getAttribute('img-alt')  || name;
    const linkedin = this.getAttribute('linkedin') || 'https://www.linkedin.com/in/jamie-ogundiran-874aa3230/';
    const github   = this.getAttribute('github')   || 'https://github.com/JamieOgundiran';
    const twitter  = this.getAttribute('twitter')  || 'https://x.com/JamieOgundiran';
    const email    = this.getAttribute('email')    || 'jamieogundiran@gmail.com';

    const card = document.createElement('div');
    card.className = 'profile';

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = imgAlt;
    img.className = 'sidebar-image';

    const nameEl = document.createElement('h2');
    nameEl.className = 'sidebar-name';
    nameEl.textContent = name;

    const bio = document.createElement('p');
    bio.className = 'profile-bio';
    bio.textContent = title;

    const socials = document.createElement('div');
    socials.className = 'social-media-container';

    const links = [
      { href: linkedin,          label: 'LinkedIn',  iconClass: 'fab fa-linkedin-in' },
      { href: github,            label: 'GitHub',    iconClass: 'fab fa-github'      },
      { href: twitter,           label: 'X/Twitter', svg: X_ICON_SVG                 },
      { href: `mailto:${email}`, label: 'Email',     iconClass: 'fas fa-envelope'    },
    ];

    links.forEach(({ href, label, iconClass, svg }) => {
      const a = document.createElement('a');
      a.href = href;
      a.className = 'social-icon';
      a.setAttribute('aria-label', label);
      if (!href.startsWith('mailto:')) {
        a.target = '_blank';
        a.rel = 'noopener';
      }
      if (svg) {
        a.innerHTML = svg;
      } else {
        const icon = document.createElement('i');
        icon.className = iconClass;
        a.appendChild(icon);
      }
      socials.appendChild(a);
    });

    card.append(img, nameEl, bio, socials);
    this.appendChild(card);
  }
}

customElements.define('profile-card', ProfileCard);
