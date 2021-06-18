import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Release } from '../model/release';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-devlog-modal',
  templateUrl: './devlog-modal.component.html',
  styleUrls: ['./devlog-modal.component.scss']
})
export class DevlogModalComponent implements OnInit {
  releases?: Release[];
  closeResult = '';

  constructor(private modalService: NgbModal, private http: HttpClient) { }

  ngOnInit() {
    // Get all releases
    this.http
      .get<any>(`https://api.github.com/repos/ajmalesa/anime-tracker/releases`)
      .subscribe(
        data => {
          this.releases = data;

          this.releases?.forEach(release => {
            // Split release features by new lines
            release.features = release.body.split('\r\n');

            // Convert published date to locale date string
            release.published_at_locale = new Date(release.published_at).toLocaleDateString();
          })

        },
        error => {
          console.log('Error: ', error);
        });
  }

  open(content: any) {
    this.modalService
      .open(content, {
        size: 'md',
        scrollable: true
      })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed`;
        }
      );
  }

}
