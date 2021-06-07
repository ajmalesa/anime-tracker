import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {
  animes!: string;
  sortOptions = [
    {
      display: 'Average Rating',
      value: 'averageRating'
    }, 
    {
      display: 'Start Date',
      value: 'startDate'
    }, 
  ]

  constructor(private http: HttpClient) { }

  onSortOptionChange(eventValue: Event) {
    this.http
    .get<any>(`https://kitsu.io/api/edge/anime?sort=-${(<HTMLInputElement>eventValue.target).value}`)
    .subscribe(
      data => {
        console.log('Success: ', data);
        this.animes = data.data;
      },
      error => {
        console.log('Error: ', error);
      });
    console.log((<HTMLInputElement>eventValue.target).value);
  }

  ngOnInit() {
    this.http
      .get<any>('https://kitsu.io/api/edge/anime?sort=-averageRating')
      .subscribe(
        data => {
          console.log('Success: ', data);
          this.animes = data.data;
        },
        error => {
          console.log('Error: ', error);
        });
  }
}
