import { useState, useEffect } from "react";

import { ReviewInterface, ReviewProps } from "../../utils/dataAndTypes/interfaces";

import ReviewCard from "../ReviewCard/ReviewCard";
import "./Reviews.css";

import generateURL from "../../utils/helpers/generateURL";

const Reviews = ({ rating, keyword, title, regionName, start, end }: ReviewProps) => {
  const [page, setPage] = useState<number>(0);
  const [url, setUrl] = useState<URL>(new URL(generateURL(rating, keyword, page, start, end)));
  const [reviews, setReviews] = useState<ReviewInterface[]>([]);
  const [displayCount, setDisplayCount] = useState<number>(2);
  const [prev, setPrev] = useState<number>(0);
  const [loaded, setLoaded] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setUrl(generateURL(rating, keyword, page, start, end));
  }, [page, rating, keyword, end, start]);

  useEffect(() => {
    if (start === null){
      // pass here to NOT display This Month section if the reviews would overlap with this / last week.
    } else {
      console.log(url);
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setReviews(reviews.concat(data.reviews))
        setLoaded(loaded + 25);
        setTotal(data.total);
      }).catch((err) => { alert(err.message) })
    }
  }, [url]);

  const addDisplayed = () => {
    if (displayCount < 5) {
      setDisplayCount(5);
    } else {
      setDisplayCount(displayCount + 5)
    }
    if (displayCount > loaded) {
      setPrev(displayCount);
      setPage(page + 1);
    }
  }

  if (reviews === null || total === 0) {
    return null;
  }

  else {
    return (
      <div id="reviews">
        <div className="reviewSection">
          <h3>{title}</h3>
          <p>{total} reviews</p>
          <p>{url.toString()}</p>
          <ul className="reviewList">
            {reviews.map((item: ReviewInterface, index: number) => {
              if (index < displayCount && index >= prev) {
                if (item !== undefined) {
                  return (<li key={item.id}><ReviewCard {...item} regionName={regionName} /></li>)
                }
              }
              return null;
            })}
          </ul>
          <button className="loadMore" onClick={addDisplayed}>Load more reviews from {title}</button>
        </div>
      </div>
    )
  }
}

export default Reviews;
