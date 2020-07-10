import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserLoginForm : FormGroup;
  submitted = false;
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.UserLoginForm = new FormGroup({
      
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    });
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }
  // get f() { return this.UserLoginForm.controls; }

  OnLogin(){
    
    this.submitted = true;
    if (this.UserLoginForm.invalid) {
            return;
    }
    else if(this.UserLoginForm.valid){
        return this.router.navigate(['home']);
    }
                
  }
}
