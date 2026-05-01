type MarketBackdropProps = {
  page: 'home' | 'partnership' | 'faq';
};

export function MarketBackdrop({ page }: MarketBackdropProps) {
  return (
    <div aria-hidden="true" className={`market-backdrop market-backdrop--${page}`}>
      <div className="market-backdrop__base" />
      <div className="market-backdrop__mist market-backdrop__mist--amber" />
      <div className="market-backdrop__mist market-backdrop__mist--emerald" />
      <div className="market-backdrop__mist market-backdrop__mist--sand" />
      <div className="market-backdrop__beam market-backdrop__beam--one" />
      <div className="market-backdrop__beam market-backdrop__beam--two" />
      <div className="market-backdrop__plate market-backdrop__plate--alpha" />
      <div className="market-backdrop__plate market-backdrop__plate--beta" />
      <div className="market-backdrop__plate market-backdrop__plate--gamma" />
      <div className="market-backdrop__pattern" />
      <div className="market-backdrop__cityline" />
      <div className="market-backdrop__grain" />
      <div className="market-backdrop__vignette" />
    </div>
  );
}
