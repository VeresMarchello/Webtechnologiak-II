import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { WeldPointService } from '../services/weldpoint.service'

@Component({
  selector: 'app-edit-weldpoint',
  templateUrl: './edit-weldpoint.component.html',
  styleUrls: ['./edit-weldpoint.component.css'],
})
export class EditWeldpointComponent implements OnInit {
  editWeldPointForm = new FormGroup({
    robot_name: new FormControl('', [Validators.required]),
    schedule: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    error_code: new FormControl('', [Validators.required, Validators.pattern("^[0-6]*$")]),
    tl: new FormControl('', [Validators.required, Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),
    bl: new FormControl('', [Validators.required, Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),
    wl: new FormControl('', [Validators.required, Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),
  })

  constructor(
    private router: Router,
    private weldPointService: WeldPointService
  ) {
    this.createForm()
  }

  ngOnInit(): void {}

  createForm() {
    const id = this.router.url.split(':')[1]

    this.weldPointService.getWeldPoint(id).subscribe((data) => {
      this.editWeldPointForm = new FormGroup({
        robot_name: new FormControl(data.robot_name, [Validators.required]),
        schedule: new FormControl(data.schedule, [Validators.required, Validators.pattern("^[0-9]*$")]),
        error_code: new FormControl(data.error_code, [Validators.required, Validators.pattern("^[0-6]*$")]),
        tl: new FormControl(data.tl, [Validators.required, Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),
        bl: new FormControl(data.bl, [Validators.required, Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),
        wl: new FormControl(data.wl, [Validators.required, Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),
      })
    })
  }

  editWeldPoint() {
    const id = this.router.url.split(':')[1]
    const newWeldPoint = this.editWeldPointForm.value

    this.weldPointService.updateWeldPoint(id, newWeldPoint).subscribe(
      () => {
        console.log('WeldPoint updated successfully!')
        this.router.navigateByUrl('/weldpoint-list')
      }, (error) => {
        console.log(error)
      })

  }

  cancel(){
    this.router.navigateByUrl('/weldpoint-list')
  }
}
