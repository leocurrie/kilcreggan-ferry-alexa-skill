// timetable sorted chronologically
module.exports = class {
    constructor() {

    }

    getDayList(now) {
        let dayList = null;
        if (now.getDay() === 6) {
            dayList = timetable.saturday;
        } else if ((now.getDay() > 0) && (now.getDay() < 6)) {
            dayList = timetable.weekdays;
        } else {
            dayList = new Array();
        }
        return dayList;

    }

    getNextDepartureTo(port, now) {
        let dayList = this.getDayList(now);
        let result = null;
        for (let i=0; i<dayList.length; i++) {
            let departure = dayList[i];
            if (departure.arrivalPort === port) {
                if ((departure.departureTime.hour > now.getHours()) ||
                    ((departure.departureTime.hour === now.getHours()) && (departure.departureTime.mins > now.getMinutes()))) {
                    result = departure;
                    break;
                }
            }
        }
        return result;
    }

    getNextDepartureFrom(port, now) {
        let dayList = this.getDayList(now);
        let result = null;
        for (let i=0; i<dayList.length; i++) {
            let departure = dayList[i];
            if (departure.departurePort === port) {
                if ((departure.departureTime.hour > now.getHours()) ||
                    ((departure.departureTime.hour === now.getHours()) && (departure.departureTime.mins > now.getMinutes()))) {
                    result = departure;
                    break;
                }
            }
        }
        return result;
    }
}

const timetable = {
    weekdays : [
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 6, min: 41},
            arrivalTime: {hour: 6, min: 55}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 7, min: 4},
            arrivalTime: {hour: 7, min: 17}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 7, min: 27},
            arrivalTime: {hour: 7, min: 40}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 7, min: 50},
            arrivalTime: {hour: 8, min: 3}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 8, min: 20},
            arrivalTime: {hour: 8, min: 33}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 8, min: 43},
            arrivalTime: {hour: 8, min: 56}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 9, min: 16},
            arrivalTime: {hour: 9, min: 29}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 9, min: 53},
            arrivalTime: {hour: 10, min: 6}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 10, min: 16},
            arrivalTime: {hour: 10, min: 29}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 10, min: 53},
            arrivalTime: {hour: 11, min: 6 }
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 11, min: 16},
            arrivalTime: {hour: 11, min: 29}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 11, min: 39},
            arrivalTime: {hour: 11, min: 52}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 12, min: 56},
            arrivalTime: {hour: 13, min: 9}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 13, min: 19},
            arrivalTime: {hour: 13, min: 32}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 13, min: 42},
            arrivalTime: {hour: 13, min: 55}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 14, min: 5},
            arrivalTime: {hour: 14, min: 18}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 14, min: 28},
            arrivalTime: {hour: 14, min: 41}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 14, min: 55},
            arrivalTime: {hour: 15, min: 8}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 15, min: 18},
            arrivalTime: {hour: 15, min: 31}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 15, min: 55},
            arrivalTime: {hour: 16, min: 8}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 16, min: 18},
            arrivalTime: {hour: 16, min: 31}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 17, min: 2},
            arrivalTime: {hour: 17, min: 15}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 17, min: 25},
            arrivalTime: {hour: 17, min: 38}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 17, min: 48},
            arrivalTime: {hour: 18, min: 1}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 18, min: 13},
            arrivalTime: {hour: 18, min: 26}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 18, min: 36},
            arrivalTime: {hour: 18, min: 49}
        },

    ],
    saturday : [
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 8, min: 4},
            arrivalTime: {hour: 8, min: 17}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 8, min: 27},
            arrivalTime: {hour: 8, min: 40}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 8, min: 50},
            arrivalTime: {hour: 9, min: 3}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 9, min: 14},
            arrivalTime: {hour: 9, min: 26}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 9, min: 36},
            arrivalTime: {hour: 9, min: 49}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 9, min: 59},
            arrivalTime: {hour: 10, min: 12}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 10, min: 22},
            arrivalTime: {hour: 10, min: 35}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 10, min: 53},
            arrivalTime: {hour: 11, min: 6}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 11, min: 16},
            arrivalTime: {hour: 11, min: 29}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 11, min: 39},
            arrivalTime: {hour: 11, min: 52}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 12, min: 56},
            arrivalTime: {hour: 13, min: 9}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 13, min: 19},
            arrivalTime: {hour: 13, min: 33}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 13, min: 43},
            arrivalTime: {hour: 13, min: 56}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 14, min: 6},
            arrivalTime: {hour: 14, min: 19}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 14, min: 29},
            arrivalTime: {hour: 14, min: 42}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 14, min: 55},
            arrivalTime: {hour: 15, min: 8}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 15, min: 18},
            arrivalTime: {hour: 15, min: 31}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 15, min: 55},
            arrivalTime: {hour: 16, min: 8}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 16, min: 18},
            arrivalTime: {hour: 16, min: 31}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 17, min: 2},
            arrivalTime: {hour: 17, min: 15}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 17, min: 25},
            arrivalTime: {hour: 17, min: 38}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 17, min: 48},
            arrivalTime: {hour: 18, min: 1}
        },
        {
            departurePort: "gourock",
            arrivalPort: "kilcreggan",
            departureTime: {hour: 18, min: 13},
            arrivalTime: {hour: 18, min: 26}
        },
        {
            departurePort: "kilcreggan",
            arrivalPort: "gourock",
            departureTime: {hour: 18, min: 36},
            arrivalTime: {hour: 18, min: 49}
        },
    ]
}