import { useEffect, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import Phone from './components/Phone';
import { SCREENS } from './screens';

const useHash = () => {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const on = () => setHash(window.location.hash);
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return hash;
};

// Renders the phone to a transparent PNG (3x for sharp slides) and downloads it.
async function downloadPng(node, name) {
  const url = await toPng(node, { pixelRatio: 3, cacheBust: true });
  const a = document.createElement('a');
  a.href = url;
  a.download = `${name}.png`;
  a.click();
}

export default function App() {
  const hash = useHash();
  const refs = useRef({});
  const only = SCREENS.find((s) => hash === `#/screen/${s.id}`);

  // #/screen/<id> shows just one phone on a transparent page (handy for screenshots).
  if (only) {
    const { Component } = only;
    return (
      <main className="single">
        <Phone label={only.title}><Component /></Phone>
      </main>
    );
  }

  const downloadAll = async () => {
    for (const s of SCREENS) {
      await downloadPng(refs.current[s.id], `phone-${s.id}`);
      await new Promise((r) => setTimeout(r, 300));
    }
  };

  return (
    <main className="gallery">
      <header>
        <h1>Bearings – app screens</h1>
        <p>Mei's journey, 0:45–1:10. Download each phone as a transparent PNG for Canva.</p>
        <button className="dl" onClick={downloadAll}>Download all PNGs</button>
      </header>
      <section className="grid">
        {SCREENS.map(({ id, time, title, note, Component }) => (
          <figure key={id}>
            <div className="shadow">
              <Phone ref={(n) => (refs.current[id] = n)} label={title}><Component /></Phone>
            </div>
            <figcaption>
              <span className="time">{time}</span>
              <strong>{title}</strong>
              <span>{note}</span>
              <button className="dl" onClick={() => downloadPng(refs.current[id], `phone-${id}`)}>Download PNG</button>
              <a href={`#/screen/${id}`}>Open alone</a>
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
