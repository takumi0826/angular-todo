import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor() {}

  open: boolean = false;

  ngOnInit(): void {}

  openModal() {
    this.open = true;
  }

  closeModal() {
    this.open = false;
  }
}
