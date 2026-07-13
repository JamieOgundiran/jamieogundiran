export function Footer() {
  return (
    <footer className="bg-background p-8 text-center text-[0.9rem] text-muted">
      <div className="mb-4">
        <a
          href="https://github.com/JamieOgundiran"
          target="_blank"
          rel="noopener"
          className="mx-2 text-[1.2rem] text-accent hover:text-foreground"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/jamie-ogundiran-874aa3230/"
          target="_blank"
          rel="noopener"
          className="mx-2 text-[1.2rem] text-accent hover:text-foreground"
        >
          Linkedin
        </a>
        <a
          href="mailto:jamieogundiran@gmail.com"
          className="mx-2 text-[1.2rem] text-accent hover:text-foreground"
        >
          jamieogundiran@gmail.com
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Jamie Ogundiran. All rights reserved.</p>
    </footer>
  );
}
