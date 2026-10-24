import { MEI } from '../data/mei';
const BARS = [24, 52, 36, 72, 44, 60, 28, 48, 20];

export default function TellOnce() {
  return (
    <>
      <p className="brand">Bearings</p>
      <h1 className="title">Tell us what you need for this trip</h1>
      <div className="bubble"><p className="body">{MEI.transcript}</p></div>
      <div className="spacer" />
      <div className="wave">{BARS.map((h, i) => <span key={i} style={{ height: h }} />)}</div>
      <p className="muted center">Listening…</p>
    </>
  );
}
