import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeldPointService } from '../services/weldpoint.service';

@Component({
  selector: 'app-delete-weldpoint',
  templateUrl: './delete-weldpoint.component.html',
  styleUrls: ['./delete-weldpoint.component.css'],
})
export class DeleteWeldpointComponent implements OnInit {
  WeldPoints: any = [];

  constructor(
    private router: Router,
    private weldPointService: WeldPointService
  ) {}

  ngOnInit(): void {
    this.getWeldPoints();
  }

  getWeldPoints() {
    this.weldPointService.getWeldPoints().subscribe((data) => {
      this.WeldPoints = data;
    });
  }

  deleteWeldPoint(index) {
    var id = this.WeldPoints[index]._id;
    this.weldPointService.deleteWeldPoint(id).subscribe(
      () => {
        console.log('WeldPoint deleted successfully!');
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
