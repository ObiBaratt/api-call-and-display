export interface HeaderProps {
  appname: string;
  logo: string;
}

export interface SearchProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setRating: React.Dispatch<React.SetStateAction<string>>;
}

export interface ReviewInterface {
  author: string;
  title: string;
  review: string;
  original_title: string;
  original_review: string;
  stars: string;
  iso: string;
  version: string | null;
  date: string;
  deleted: boolean;
  has_response: boolean;
  product: number;
  product_id: number;
  product_name: string;
  vendor_id: string;
  store: string;
  weight: number;
  id: string;
  predicted_langs: string[];
  regionName: Intl.DisplayNames;
}

export interface ResultData {
  total: number;
  pages: number;
  this_page: number;
  reviews: ReviewInterface[];
}

export interface ReviewProps {
  rating: string;
  keyword: string;
  title: string;
  start: string | null;
  end: string | null;
  regionName: Intl.DisplayNames;
}

export interface RangeInterface {
    title: string;
    start: string | null;
    end: string | null;
}
