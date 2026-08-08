import { focus } from '@/lib/data/focus';
import { FormattedText } from '@/components/ui/FormattedText';

export function NowNote() {
  return (
    <div className="max-w-[62ch]">
      <div className="flex flex-col gap-5">
        {focus.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-muted">
            <FormattedText text={paragraph} />
          </p>
        ))}
      </div>

      {focus.credit && (
        <p className="eyebrow mt-7 text-accent">
          {focus.credit.prefix}{' '}
          <a
            href={focus.credit.href}
            target="_blank"
            rel="noopener"
            className="underline decoration-border decoration-1 underline-offset-4 hover:text-foreground hover:decoration-foreground"
          >
            {focus.credit.label}
          </a>
        </p>
      )}
    </div>
  );
}
