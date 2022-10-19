// DEPRECIATED AND REPLACED WITH MOMENT.

const longAgo = (date: string, today: number) => {
    const postDate = new Date(date);
    const timeDiff = today - postDate.getTime();

    // timeDiff is in milliseconds so I need usable output.
    // Returns the highest time denomination available w/ info
    const mins = timeDiff / 1000 / 60;
    if (mins < 60) {
        return pluralOrNot(mins, "min");
    }
    const hours = mins / 60;
    if (hours < 24) {
        return pluralOrNot(hours, "hour");
    }
    const days = hours / 24
    if (days < 7) {
        return pluralOrNot(days, "day");
    }
    const weeks = days / 7;
    if (weeks < 4) {
        return pluralOrNot(weeks, "week");
    }
    const months = weeks / 4
    if (months < 12) {
        return pluralOrNot(months, "month");
    }
    const years = months / 12;

    return pluralOrNot(years, "year");
}


const pluralOrNot = (num: number, unit: string) => {
    const rounded = Math.round(num);
    if (rounded > 1) {
        return `${rounded} ${unit}s ago.`;
    } else {
        return `${rounded} ${unit} ago.`;
    }
}

export default longAgo;
