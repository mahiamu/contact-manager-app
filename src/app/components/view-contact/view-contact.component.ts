 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/models/IContact';
import { IGroup } from 'src/app/models/IGroup';
import { ContactService } from 'src/app/services/contact.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  public loading: boolean = false;
  public contact: IContact ={} as IContact;
  public contactId: string | null = null;
  public errorMessage : string | null = null;
  public group : IGroup ={} as IGroup;

  constructor(private activtedRoute: ActivatedRoute,
    private contactService : ContactService) { }

  ngOnInit(): void {
    this.activtedRoute.paramMap.subscribe((param)=>{
      this.contactId = param.get('contactId');
    });
    if(this.contactId){
      this.loading = true;
      this.contactService.getContact(this.contactId).subscribe((data)=>{
        this.contact=data;
        this.loading= false;
        this.contactService.getGroup(data).subscribe((data)=>{
          this.group = data;
        })

      }, (error)=>{
        this.errorMessage=error;
        this.loading=false;
      });
    }
    
  }
  public isNotEmpty(){
    return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0;
  }

}
