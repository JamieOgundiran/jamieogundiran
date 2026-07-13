import Image from 'next/image';
import { FaLinkedinIn, FaGithub, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

interface ProfileCardProps {
  name?: string;
  title?: string;
  imgSrc?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  email?: string;
}

export function ProfileCard({
  name = 'Jamie Ogundiran',
  title = 'Founder @ Stealth',
  imgSrc = '/images/jamieo.jpg',
  linkedin = 'https://www.linkedin.com/in/jamie-ogundiran-874aa3230/',
  github = 'https://github.com/JamieOgundiran',
  twitter = 'https://x.com/JamieOgundiran',
  email = 'jamieogundiran@gmail.com',
}: ProfileCardProps) {
  const socials = [
    { href: linkedin, label: 'LinkedIn', Icon: FaLinkedinIn },
    { href: github, label: 'GitHub', Icon: FaGithub },
    { href: twitter, label: 'X/Twitter', Icon: FaXTwitter },
    { href: `mailto:${email}`, label: 'Email', Icon: FaEnvelope },
  ];

  return (
    <div className="flex flex-col items-center rounded-[10px] border border-border bg-surface p-8 text-center shadow-[0_4px_6px_rgba(0,0,0,0.3)] max-md:p-6">
      <Image
        src={imgSrc}
        alt={name}
        width={240}
        height={300}
        priority
        className="mb-6 h-[300px] w-[240px] rounded-[10px] object-cover max-md:h-[220px] max-md:w-[180px]"
      />
      <h2 className="mb-4 text-[1.8rem] font-bold text-foreground">{name}</h2>
      <p className="mb-6 text-center leading-normal text-muted">{title}</p>
      <div className="flex justify-center gap-4">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(href.startsWith('mailto:')
              ? {}
              : { target: '_blank', rel: 'noopener' })}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-accent transition-[transform,background-color,color] duration-200 hover:-translate-y-[3px] hover:bg-border hover:text-foreground"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
}
