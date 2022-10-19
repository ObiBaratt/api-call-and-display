import moment from "moment";

const today = moment(new Date()).format("YYYY-MM-DD");

const yesterday = moment().subtract(1, 'days').format("YYYY-MM-DD");

const beforeYesterday = moment().subtract(2, 'days').format("YYYY-MM-DD");

const thisWeek = moment().startOf('isoWeek').format("YYYY-MM-DD");

const beforeThisWeek = moment().startOf('week').format("YYYY-MM-DD");

const lastWeek = moment().subtract(1, 'weeks').startOf('isoWeek').format("YYYY-MM-DD");

const prevMonth = moment().subtract(1, "month").startOf("month").format("YYYY-MM-DD");

const prevMonthEnd = moment().subtract(1, "month").endOf("month").format("YYYY-MM-DD");


// Was initially using the following, but that obviously returned the inclusive month:
// const thisMonth = moment(new Date()).format("YYYY-MM") + "-01"; // Will continue using this as its the first of the month
// const monthEnd = moment().endOf("month").format("YYYY-MM-DD");

// Function to generate this month (exclusive of this and last week.)
// Logically if current day is <= 14, this month should be empty...
// What about if day > 14? Then need to subtract 14 from day and return that as end?
// Return start / end values in an arr -> No need to return start, just end (since start will always be 1)
// ^^ Above is wrong due to the way Review component show/hide logic is written. Since there was a valid start day even if
// the end day was null, it just displayed the entire month. Need to return null for both to hide.
// This may not be a perfect solution because it doesn't take into account the weeks start on Monday rule

const exclusiveThisMonth = () => {
  const curDay = parseInt(moment(new Date()).format("DD"));
  if (curDay <= 14) {
    return [null, null];
  } else { // curDay > 14 so return the days 1 to curDay - 14
    const dayDiff = curDay - 14;
    const start = moment(new Date()).format("YYYY-MM") + "-01";
    const end = moment().subtract(dayDiff, "days").format("YYYY-MM-DD");
    return [start, end];
  }
}

const exclusiveMonth = exclusiveThisMonth();

const monthStart = exclusiveMonth[0];
const monthEnd = exclusiveMonth[1];

export const rangeData = [
    {
      title: "Today",
      start: today,
      end: today
    },
    {
      title: "Yesterday",
      start: yesterday,
      end: yesterday
    },
    {
      title: "This Week",
      start: thisWeek,
      end: beforeYesterday
    },
    {
      title: "Last Week",
      start: lastWeek,
      end: beforeThisWeek
    },
    {
      title: "This Month",
      start: monthStart,
      end: monthEnd
    },
    {
      title: "Prev Month",
      start: prevMonth,
      end: prevMonthEnd
    },
]
