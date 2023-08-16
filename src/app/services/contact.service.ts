import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { IContact } from '../models/IContact';
import { IGroup } from '../models/IGroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private serverUrl: string = `http://localhost:9000`; //json serverurl

  constructor(private httpClient : HttpClient) {

   }

   //get All contacts
   public getAllContacts():Observable<IContact[]> {
    let dataURL:string = `${this.serverUrl}/contacts`;
    return this.httpClient.get<IContact[]>(dataURL).pipe(catchError(this.handleError));
   }

   //get single contact
   public getContact(contactId: string):Observable<IContact> {
    let dataURL:string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient.get<IContact>(dataURL).pipe(catchError(this.handleError));
   }

   // create contact
   public createContact(contact : IContact):Observable<IContact> {
    let dataURL:string = `${this.serverUrl}/contacts`;
    return this.httpClient.post<IContact>(dataURL, contact).pipe(catchError(this.handleError));
   }

   // update contact
   public updateContact(contact : IContact, contactId: string):Observable<IContact> {
    let dataURL:string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient.put<IContact>(dataURL, contact).pipe(catchError(this.handleError));
   }

   // delete contact
   public deleteContact(contactId : string):Observable<{}> {
    let dataURL:string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));
   }

   //get All groups
   public getAllGroups():Observable<IGroup[]> {
    let dataURL:string = `${this.serverUrl}/groups`;
    return this.httpClient.get<IGroup[]>(dataURL).pipe(catchError(this.handleError));
   }

   //get single group
   public getGroup(contact: IContact):Observable<IGroup> {
    let dataURL:string = `${this.serverUrl}/groups/${contact.groupId}`;
    return this.httpClient.get<IGroup>(dataURL).pipe(catchError(this.handleError));
   }


    // error handling 
   public handleError(error:HttpErrorResponse){
    let errorMessage:string = '';
    if(error.error instanceof ErrorEvent){
      // clinet Error
      errorMessage = `Error : ${error.error.message}`
    }
    else{
      // server error 
      errorMessage = `Status : ${error.status} \n message: ${error.message}`;      
    }
    return throwError(errorMessage)
   }

}
