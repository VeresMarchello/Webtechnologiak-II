import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { WeldPointService } from '../services/weldpoint.service'

@Component({
  selector: 'app-add-weldpoint',
  templateUrl: './add-weldpoint.component.html',
  styleUrls: ['./add-weldpoint.component.css'],
})
export class AddWeldpointComponent implements OnInit {
  addWeldPointForm = new FormGroup({
    robot_name: new FormControl('', [Validators.required]),
    schedule: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    error_code: new FormControl('', [Validators.required, Validators.pattern("^[0-6]*$")]),
    tl: new FormControl('', [Validators.required, Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),
    bl: new FormControl('', [Validators.required, Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),
    wl: new FormControl('', [Validators.required, Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),
  })
  constructor(
    private weldPointService: WeldPointService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addWeldPoint() {
    const weldPoint = this.addWeldPointForm.value
    this.weldPointService.addeWeldPoint(weldPoint).subscribe(
      () => {
        console.log('Successfully created!')
        this.router.navigateByUrl('/weldpoint-list')
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
