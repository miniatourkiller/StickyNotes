import { Component, ElementRef, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsumerService } from '../../consumer.service';
import { SessionServiceService } from '../../session-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  color: string = 'bg-green-100';
  modalData: any;
  cardForm: FormGroup;
  textForm: FormGroup;
  cards: Array<any> = [];

  constructor(private modalService: NgbModal ,private fb: FormBuilder, private consumer: ConsumerService, private sessionServices: SessionServiceService) {
    this.cardForm = this.fb.group({
      id: [0, [Validators.required, Validators.min(0)]],
      color: ['', Validators.required],
      title: ['', Validators.required]
    });

    this.textForm = this.fb.group({
      id: [0, [Validators.required, Validators.min(0)]],
      text: ['', Validators.required]
    });
  }
  openModal(content: any, data?: any) {
    this.modalData = data;
    this.modalService.open(content, { 
      ariaLabelledBy: 'modal-basic-title',
      centered: true
    });
  }

  openEditCardModal(content: any, data?: any) {
    this.modalData = data;
    this.modalService.open(content, { 
      ariaLabelledBy: 'modal-basic-title',
      centered: true
    });
    this.cardForm.patchValue({
      id: data.id,
      color: data.color.split("-")[1],
      title: data.title
    });
  }

  openEditTextsModal(content: any, data?: any) {
    this.modalData = data;
    this.modalService.open(content, { 
      ariaLabelledBy: 'modal-basic-title',
      centered: true
    });
    this.textForm.patchValue({
      id: data.id,
      text: data.text
    });
  }

  ngOnInit(): void {
    this.getCards();
  }

  onSubmit() {
    if (this.cardForm.valid) {
      console.log('Form Submitted', this.cardForm.value);
    }
  }
  onCreateCard() {
    if (this.cardForm.valid) {
      console.log('Form Submitted', this.cardForm.value);
      this.consumer.post("/sticky/api/v1/card", this.cardForm.value, this.sessionServices.getoken()).subscribe((data: any) => {
        console.log(data);
        this.getCards();
        this.clearCardGroup()
      }, (error) => {
        console.log(error.error);
      })
    }
  }

  onEditCardSubmit() {
    if (this.cardForm.valid) {
      console.log('Form Submitted', this.cardForm.value);
      this.consumer.put("/sticky/api/v1/card", this.cardForm.value, this.sessionServices.getoken()).subscribe((data: any) => {
        console.log(data);
        this.getCards();
        this.clearCardGroup()
      }, (error) => {
        console.log(error.error);
      })
    }
  }

  onSubmitCreateText(cardId: number) {
    if (this.textForm.valid) {
      console.log('Form Submitted', this.textForm.value);
      this.textForm.value.cardId = cardId;
      this.consumer.post("/sticky/api/v1/card/"+cardId+"/text", this.textForm.value, this.sessionServices.getoken()).subscribe((data: any) => {
        console.log(data);
        this.getCards();
        this.clearTextGroup()
      }, (error) => {
        console.log(error.error);
      })
    }
  }

  onSubmitUpdateText() {
    //patch textForm with text
    
    if (this.textForm.valid) {
      console.log('Form Submitted', this.textForm.value);
      this.consumer.put("/sticky/api/v1/text", this.textForm.value, this.sessionServices.getoken()).subscribe((data: any) => {
        console.log(data);
        this.getCards();
        this.clearTextGroup()
      }, (error) => {
        console.log(error.error);
      })
    }
  }

  //fecthing cards
  getCards(){
    var pagination = {
    pageSize: 10,
    pageNumber: 0
  }
    this.consumer.post("/sticky/api/v1/cards", pagination, this.sessionServices.getoken()).subscribe((data: any) => {
      console.log(data);
      this.cards = data.data.content;
    }, (error) => {
      console.log(error.error);
    })
  }

  // reminder: boolean = false;
  deleteCard(cardId: number) {
    this.consumer.delete("/sticky/api/v1/card/" + cardId, this.sessionServices.getoken()).subscribe((data: any) => {
      console.log(data);
      this.getCards();
      this.clearCardGroup();
    }, (error) => {
      console.log(error.error);
    })
  }

  clearCardGroup() {
    this.cardForm.patchValue({
      id: 0,
      color: '',
      title: ''
    })
    //close modals
    this.modalService.dismissAll();
  }

  clearTextGroup() {
    this.textForm.patchValue({
      id: 0,
      text: ''
    })
    //close modals
    this.modalService.dismissAll();
  }

  deleteText(textId: number, cardId: number) {
    console.log(textId, cardId);
    
    this.consumer.delete("/sticky/api/v1/text/" + textId +"/"+ cardId, this.sessionServices.getoken()).subscribe((data: any) => {
      console.log(data);
      this.getCards();
      this.clearTextGroup();
    }, (error) => {
      console.log(error.error);
    })
  }
}
