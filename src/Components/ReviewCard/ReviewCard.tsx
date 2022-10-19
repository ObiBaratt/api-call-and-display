import "./ReviewCard.css";

import moment from "moment";

import { ReviewInterface } from "../../utils/dataAndTypes/interfaces";

const ReviewCard = ({ review, title, author, iso, date, regionName, stars }: ReviewInterface) => {

    const starDisplay = () => {
        let displayed = []
        const numStars = parseInt(stars);
        for (let i = 0; i < 5; i++) {
            if (i < numStars) {
                displayed.push(<span key={i} className="star">*</span>);
            } else {
                displayed.push(<span key={i} className="noStar">*</span>);
            }
        }
        return (
            <span className="stars">{displayed}</span>
        );
    }

    return (
        <div className="reviewCard container">
            <div className="innerCard">
                {starDisplay()}
                <h1 className="cardTitle">{title}</h1>
                <div className="cardBody">{review}</div>
                <div className="author">By {author} - {regionName.of(iso)} - {moment(date, "YYYYMMDD").fromNow()}.</div>
            </div>
        </div>
    )
}

export default ReviewCard;
