import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formdata:any
  users: any;
  data:any
  fname:any
  lname:any
  email:any
  mobileno:any
  password:any
  suppliers:any
  supplier:any

  constructor( private api :ApiService ,private router : Router) { }

  ngOnInit(): void {

    this.supplier = new FormGroup({
      fname: new FormControl("", Validators.required),
      lname: new FormControl("", Validators.required),
      email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
      mobileno: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),

    })
  
  }
  save(data: any) {
    
      this.api.post("users", data).subscribe((result: any) =>
      {
        // res.end(JSON.stringify({status:"success", data:result}));
        console.log(result);
     if(result)
      {
      localStorage.setItem("usertype", "user");
      localStorage.setItem("email", result.email);
      this.router.navigate(['/', 'dashboard']);
      }
    });
  }

}
  