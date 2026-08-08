export function formatDate(
  dateString: string | undefined,
  options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' }
): string {
  if (!dateString) return '';
  if (dateString.toLowerCase() === 'present') {
    return 'Present';
  }

  const parsedDate = new Date(dateString);
  if (Number.isNaN(parsedDate.getTime())) {
    return dateString;
  }

  return parsedDate.toLocaleDateString('en-US', options);
}

export function formatDateRange(startDate?: string, endDate?: string): string {
  if (!startDate && !endDate) return '';

  const start = startDate ? formatDate(startDate) : '';
  const end = endDate ? formatDate(endDate) : '';

  if (start && end) {
    return `${start} – ${end}`;
  }

  return start || end;
}

/** Years only — for the compact timeline, where months are noise. */
export function formatYearRange(startDate?: string, endDate?: string): string {
  const year = (value?: string) => {
    if (!value) return '';
    if (value.toLowerCase() === 'present') return 'Present';
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? value : String(parsed.getFullYear());
  };

  const start = year(startDate);
  const end = year(endDate);

  if (start && end) return start === end ? start : `${start} – ${end}`;
  return start || end;
}

export function getSortableDate(item: {
  date?: string;
  endDate?: string;
  startDate?: string;
}): Date {
  const candidates = [item.date, item.endDate, item.startDate];

  for (const value of candidates) {
    if (!value) continue;

    if (value.toLowerCase() === 'present') {
      return new Date();
    }

    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed;
    }
  }

  return new Date(0);
}
