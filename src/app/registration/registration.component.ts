import { Component, NgZone, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  register(){
    const user = this.registrationForm.value
    
    this.userService.addUser(user).subscribe(
      () => {
        console.log('Successfully created!')
        this.router.navigateByUrl('/login')
      }, (error) => {
        console.log(error)
      })
    this.router.navigate(["/login"])
  }

  login(){
    this.router.navigate(["/login"])

  }
}
