import { MEI } from '../data/mei';

export default function Battery() {
  const { type, capacity } = MEI.battery;
  return (
    <>
      <p className="brand">Bearings</p>
      <div className="viewfinder">
        <div className="label">
          <p><b>BATTERY</b></p><p>{type}</p><p>{capacity}</p>
        </div>
        <i className="corner tl" /><i className="corner tr" /><i className="corner bl" /><i className="corner br" />
      </div>
      <p className="eyebrow">Read from photo</p>
      <div className="table">
        <div className="row"><span className="muted-text">Battery</span><b>{type}</b></div>
        <div className="row"><span className="muted-text">Capacity</span><b>{capacity}</b></div>
      </div>
    </>
  );
}
