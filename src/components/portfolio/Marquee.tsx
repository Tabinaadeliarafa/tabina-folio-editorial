export function Marquee({ items, reverse = false, small = false }: { items: string[]; reverse?: boolean; small?: boolean }) {
  const content = [...items, ...items];
  return <div className={`marquee ${small ? "marquee-small" : ""}`} aria-hidden="true"><div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>{content.map((item, index) => <span key={`${item}-${index}`}>{item}<b>—</b></span>)}</div></div>;
}