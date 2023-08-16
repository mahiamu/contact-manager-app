import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router :Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username:[''],
      mobile: [''],
      email: [''],
      password: ['']
    })
  }

  signup(){
    this.http.post<any>("http://localhost:9000/signupUsers", this.signUpForm.value)
    .subscribe((res) =>{
      alert('signup successfull');
      this.signUpForm.reset();
      this.router.navigate(['contacts/login'])
    },(error)=>{
      alert("something went wrong!")
    });
  }

}
