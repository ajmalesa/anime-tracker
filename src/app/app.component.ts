import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  animes!: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Simple GET request with response type <any>
    this.http.get<any>('https://kitsu.io/api/edge/anime').subscribe(data => {
      this.animes = data.data;
      console.log(this.animes);
    })
  }

  title = 'Anime Tracker';
}
