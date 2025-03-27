import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../../consumer.service';
import { SessionServiceService } from '../../session-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: Array<any> = [];
  modalData: any;
  constructor(private modalService: NgbModal,private consumer: ConsumerService, private sessionServices: SessionServiceService){}
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    var pagination = {
      pageSize: 10,
      pageNumber: 0
    }
    //do post to get users
    this.consumer.post("/sticky/api/v1/users",pagination, this.sessionServices.getoken()).subscribe((data: any) => {
      console.log(data);
      this.users = data.data.content;
    })
  }

  editItem(user : any){
    console.log(user);

  }

  deleteItem(userId : number){
    console.log(userId);
  }

  openModal(content: any, data?: any) {
    this.modalData = data;
    this.modalService.open(content, { 
      ariaLabelledBy: 'modal-basic-title',
      centered: true
    });
  }

}
