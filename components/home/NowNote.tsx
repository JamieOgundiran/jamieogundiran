import { focus } from '@/lib/data/focus';
import { FormattedText } from '@/components/ui/FormattedText';

export function NowNote() {
  return (
    <div className="flex max-w-[62ch] flex-col gap-5">
      {focus.paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-muted">
          <FormattedText text={paragraph} />
        </p>
      ))}
    </div>
  );
}
