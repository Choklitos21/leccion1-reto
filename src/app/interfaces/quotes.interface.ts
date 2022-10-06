export interface QuotesAPI {
  quotes: Quote[];
}

export interface Quote {
  quote:  string;
  author: string;
}
