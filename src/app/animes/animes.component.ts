import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {
  animes!: string;
  pageNumber = 1;
  showPerPage = 20;
  selectedSort = "-averageRating";
  sortOptions = [
    {
      display: 'Average Rating ▼',
      value: '-averageRating'
    },
    {
      display: 'Average Rating ▲',
      value: 'averageRating'
    },
    {
      display: 'Start Date ▼',
      value: '-startDate'
    },
    {
      display: 'Start Date ▲',
      value: 'startDate'
    },
  ]

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAnimes();
  }

  onSortOptionChange(eventValue: Event) {
    this.selectedSort = <string>(<HTMLInputElement>eventValue.target).value;

    this.getAnimes();
  }

  onPreviousPageButtonClick() {
    this.pageNumber--;

    this.getAnimes();
  }

  onNextPageButtonClick() {
    this.pageNumber++;

    this.getAnimes();
  }

  getAnimes() {
    this.animes = "";

    const params = new HttpParams()
      .set('sort', this.selectedSort)
      .set('page[limit]', this.showPerPage)
      .set('page[offset]', (this.pageNumber - 1) * this.showPerPage)

    this.http
      .get<any>(`https://kitsu.io/api/edge/anime`, { params })
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
