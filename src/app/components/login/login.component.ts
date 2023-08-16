import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm! : FormGroup;


  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router :Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username:[''], 
      password: ['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:9000/signupUsers")
    .subscribe((res)=>{
      const user = res.find((a:any)=>{
        return a.username === this.loginForm.value.username &&  a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login success");
        this.loginForm.reset();
        this.router.navigate(['/contacts/admin']).then();
      }else{
        alert("user not found")
      }

      },err=>{
        alert("somthing went wrong");
      })
    }
  
 

}
