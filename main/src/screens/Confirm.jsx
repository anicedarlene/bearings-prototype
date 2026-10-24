import { MEI } from '../data/mei';

export default function Confirm() {
  return (
    <>
      <p className="brand">Bearings</p>
      <h1 className="title">Your requests</h1>
      {MEI.requests.map((r) => (
        <div className="card active" key={r.title}>
          <p className="card-title">{r.title}</p>
          <p className="muted">{r.detail}</p>
          <p className="confirmed">✓ Confirmed</p>
        </div>
      ))}
    </>
  );
}
