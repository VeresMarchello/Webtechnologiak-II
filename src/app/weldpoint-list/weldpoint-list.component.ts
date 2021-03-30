import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { WeldPointService } from '../services/weldpoint.service'

@Component({
  selector: 'app-weldpoint-list',
  templateUrl: './weldpoint-list.component.html',
  styleUrls: ['./weldpoint-list.component.css'],
})
export class WeldpointListComponent implements OnInit {
  WeldPoints: any = []

  constructor(
    private router: Router,
    private weldPointService: WeldPointService
  ) {
    this.getWeldPoints()
  }

  ngOnInit(): void {}

  getWeldPoints() {
    this.weldPointService.getWeldPoints().subscribe((data) =>{
      this.WeldPoints = data
    })
  }

  editWeldPoint(index){
    var id = this.WeldPoints[index]._id
    this.router.navigate(['/edit-weldpoint/:' + id])
  }
}
