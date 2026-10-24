import { CheckCircleIcon } from '../components/Icons';
import { MEI } from '../data/mei';

export default function Choose() {
  return (
    <>
      <p className="brand">Bearings</p>
      <div className="banner done">
        <CheckCircleIcon />
        <p className="banner-text big">{MEI.options[0].title}</p>
        <p className="selected">Selected</p>
      </div>
      <ul className="checklist">
        {MEI.done.map((d) => <li key={d}>✓ {d}</li>)}
      </ul>
    </>
  );
}
