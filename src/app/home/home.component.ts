import { Component, OnInit } from '@angular/core';
import {QuotesService} from "../services/quotes.service";
import {QuotesAPI, Quote} from "../interfaces/quotes.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quotesList: Quote[] = []

  colorsPalete: string[] = ['red', 'purple', 'blue', 'green', 'gold', 'brown', 'orange']
  currentColor: string = ''

  current!: Quote;

  constructor(
    private quotesService: QuotesService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.info()
  }

  info() {
    this.http.get<QuotesAPI>('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').subscribe(
      (data) => {
        this.quotesList = data.quotes;
        this.change()
      }
    )
  }

  change() {
    let rand = Math.floor(Math.random()*this.quotesList.length);
    let colorRand = Math.floor(Math.random()*this.colorsPalete.length);
    this.currentColor = this.colorsPalete[colorRand];
    this.current =  this.quotesList[rand];
  }

}
