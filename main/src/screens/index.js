import TellOnce from './TellOnce';
import Battery from './Battery';
import Confirm from './Confirm';
import Alert from './Alert';
import Options from './Options';
import Choose from './Choose';

// id is used for the URL (#/screen/<id>) and the downloaded file name.
export const SCREENS = [
  { id: 'tellonce', time: '0:45', title: 'Tell us once', note: 'Mei speaks her needs; the transcript appears as she talks.', Component: TellOnce },
  { id: 'battery', time: '0:50', title: 'Photo of the battery label', note: 'The fields the airline needs are filled in from the photo.', Component: Battery },
  { id: 'confirm', time: '0:55', title: 'Confirmed requests', note: 'Three requests: check-in, boarding, transfer.', Component: Confirm },
  { id: 'alert', time: '1:00', title: 'Delay alert', note: 'The delay breaks her connection; her needs are saved.', Component: Alert },
  { id: 'options', time: '1:06', title: 'Ranked options', note: 'Each option has one line on why. The choice stays hers.', Component: Options },
  { id: 'choose', time: '1:08', title: 'Her choice', note: "She picks a night's rest and the morning flight.", Component: Choose },
];
