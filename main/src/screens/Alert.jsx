import { WarningIcon } from '../components/Icons';

export default function Alert() {
  return (
    <>
      <p className="brand">Bearings</p>
      <div className="banner warn">
        <WarningIcon />
        <p className="banner-text">Your flight is delayed. You'll miss your connection.</p>
      </div>
      <p className="body">Your assistance needs are saved. We're checking options that keep them in place.</p>
      <div className="spacer" />
      <button className="cta" type="button">See my options</button>
    </>
  );
}
