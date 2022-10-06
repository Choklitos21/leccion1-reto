import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {QuotesAPI} from "../interfaces/quotes.interface";

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  quotes: QuotesAPI[] = []

  get quotesList() {
    console.log(this.findQuotes())
    return this.findQuotes()
    /*return this.quotes*/
  }

  constructor(
    private http: HttpClient
  ) { }

  findQuotes(): QuotesAPI[] {
    let output: QuotesAPI[] = []

    this.http.get<QuotesAPI[]>('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').subscribe(
      (data) => {
        output = data
      }
    )

    return output
  }

}
