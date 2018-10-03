const Timetable = require('./timetable.js');

let timetable = null;

beforeAll( ()=>{
    timetable = new Timetable();
})


it('should find a ferry to kilcreggan on Monday morning', () => {
    let when = new Date('September 10, 2018 05:00:00');
    let sailing = timetable.getNextDepartureTo('kilcreggan', when);
    expect(sailing).not.toBeNull();
    expect(sailing.departurePort).toBeDefined();
    expect(sailing.departurePort).toBe('gourock');
    expect(sailing.departureTime).toBeDefined();
    expect(sailing.departureTime.hour).toBe(6);
    expect(sailing.departureTime.min).toBe(41);
});

it('should find a ferry from gourock on Monday morning', () => {
    let when = new Date('September 10, 2018 05:00:00');
    let sailing = timetable.getNextDepartureFrom('gourock', when);
    expect(sailing).not.toBeNull();
    expect(sailing.departurePort).toBeDefined();
    expect(sailing.departurePort).toBe('gourock');
    expect(sailing.departureTime).toBeDefined();
    expect(sailing.departureTime.hour).toBe(6);
    expect(sailing.departureTime.min).toBe(41);
})