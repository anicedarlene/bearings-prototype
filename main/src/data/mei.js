// All copy shown in the screens lives here, so the team can edit text in one place.
// Battery values are SAMPLE data for the prototype; replace with realistic values for the film.
export const MEI = {
  transcript:
    '"I can walk a few steps, but I need a wheelchair to the gate, and help with my transfer."',
  battery: { type: 'Lithium-ion', capacity: '280 Wh' },
  requests: [
    { title: 'Check-in', detail: 'Wheelchair from the desk' },
    { title: 'Boarding', detail: 'To the aircraft door' },
    { title: 'Transfer', detail: 'Met at arrival, to next gate' },
  ],
  options: [
    { title: "Night's rest + morning flight", reason: 'Accessible hotel, assistance at every step', chosen: true },
    { title: 'Tonight, via another hub', reason: 'Arrives sooner, one extra transfer', chosen: false },
  ],
  done: ['Accessible room booked', 'New flight booked', 'Assistance moving with you'],
};
