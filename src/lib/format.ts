/** YYYY-MM を「2024年10月」にする */
export const formatYm = (ym: string) => {
  const [y, m] = ym.split('-');
  return `${y}年${Number(m)}月`;
};

/** YYYY-MM-DD を「2024.10.01」にする */
export const formatDate = (date: string | null) => (date ? date.replaceAll('-', '.') : '');

export const yearOf = (date: string | null) => (date ? date.slice(0, 4) : '日付なし');
