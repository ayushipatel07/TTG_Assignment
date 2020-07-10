import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../Users';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  id: number;
  addUsersForm: FormGroup;

  constructor(private router: Router, private dataservice : DataService) { }

  ngOnInit(): void 
  {

    this.addUsersForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      address: new FormControl(),
      phonenumber : new FormControl('', Validators.required),
      policynumber : new FormControl('', Validators.required),
      city: new FormControl(),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.dataservice.getAllUsers()
      .subscribe(
        user => {
          this.id = user.length + 1
        }
      );
  }

  addUser()
  {
    let user: Users;
    user = this.addUsersForm.value;
    user.id = this.id;
    this.dataservice.addUser(user).subscribe();
    alert("Thank You. You have been registered");
    console.log(user);
    this.router.navigate(['/login']);
  }

  cancel() {
    this.router.navigate(['/login']);
  }
}
