import { useState } from 'react';
import moment from 'moment';
import './App.css';

import Search from './Components/Search/Search';
import Header from './Components/Header/Header';
import Reviews from './Components/Reviews/Reviews';

import { rangeData } from './utils/dataAndTypes/generateDateRanges';
import { RangeInterface } from './utils/dataAndTypes/interfaces';

// In a real app with multiple possible apps, the name would be taken from the URL and the img fetched.
const APPNAME = "Twitter"
const LOGO = "logo.png"

const App = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [rating, setRating] = useState<string>('0');
  const [nextMonth, setNextMonth] = useState<number>(2);
  const [ranges, setRanges] = useState<RangeInterface[]>(rangeData)

  const regionName = new Intl.DisplayNames(['en'], { type: 'region' });

  const updateRanges = (addedMonth: RangeInterface) => {
    const newRanges = [...ranges];
    newRanges.push(addedMonth);
    setRanges(newRanges);
  };

  const loadNextMonth = () => {
    const start = moment().subtract(nextMonth, "month").startOf("month").format("YYYY-MM-DD");
    const end = moment().subtract(nextMonth, "month").endOf("month").format("YYYY-MM-DD");
    const title = moment(end).format("MMM YYYY");

    setNextMonth(nextMonth + 1);

    const newMonth = {
              title: title,
              start: start,
              end: end,
            };
    updateRanges(newMonth);
  }

  return (
    <div className="App">
      <Header appname={APPNAME} logo={LOGO} />
      <Search setKeyword={setKeyword} setRating={setRating} />
      <ul id="reviewContainer">
        {ranges.map((range: RangeInterface) => {
          return (
            <li key={range.title}>
              <Reviews
                rating={rating}
                keyword={keyword}
                title={range.title}
                regionName={regionName}
                start={range.start}
                end={range.end}
                />
            </li>
          )
        })}
      <button className="loadMore" onClick={loadNextMonth}>Load Previous Month...</button>
      </ul>
    </div>
  );
}

export default App;
