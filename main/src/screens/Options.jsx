import { MEI } from '../data/mei';

export default function Options() {
  return (
    <>
      <p className="brand">Bearings</p>
      <h1 className="title">Your options</h1>
      {MEI.options.map((o) => (
        <div className={`card ${o.chosen ? 'active' : ''}`} key={o.title}>
          <p className="option-title">{o.title}</p>
          <p className="muted">{o.reason}</p>
        </div>
      ))}
      <div className="spacer" />
      <p className="eyebrow rust center">You choose</p>
    </>
  );
}
