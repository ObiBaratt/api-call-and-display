// set default params so calling without passing anything = all reviews

const generateURL = (rating: string="0", keyword: string="", page: number=0, start: string | null, end: string | null) => {

    let url = new URL('fakeapicallurl.com'); // BASE API URL REMOVED

    if (start !== null) {
        url.searchParams.append("start", start)
    }
    if (end !== null) {
        url.searchParams.append("end", end)
    }
    if (rating !== "0") {
        url.searchParams.append("stars", rating);
    }

    if (keyword !== "") {
        url.searchParams.append("q", keyword);
    }

    if (page > 0) {
        url.searchParams.append("page", page.toString());
    }

    return url
}

export default generateURL
