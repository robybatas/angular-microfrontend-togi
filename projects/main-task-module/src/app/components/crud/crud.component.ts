import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReadDeleteComponent } from "./read-delete/read-delete.component";
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CreateEditComponent } from "./create-edit/create-edit.component";
import { StateService } from '../../global-states/crud.state.service';
import { Item, itemInterface } from '../../interfaces/item.interface';


@Component({
    selector: 'app-crud',
    standalone: true,
    templateUrl: './crud.component.html',
    styleUrl: './crud.component.scss',
    imports: [ReadDeleteComponent, ButtonModule, CommonModule, CreateEditComponent]
})
export class CrudComponent {
  isCreate: boolean = false

  constructor(
    private stateService: StateService,
  ) {}

  onClickAdd () {
    this.isCreate = !this.isCreate
  }

  onClickBack () {
    this.stateService.selectData(new Item());
    this.isCreate = !this.isCreate
  }

  async onClickEdit (data: itemInterface) {
    this.stateService.selectData(data);
    document.getElementById('btn-add')?.click()
  }

  async onClickSubmit () {
    document.getElementById('btn-back')?.click()
  }

  watchComponent() {
    return this.isCreate
  }

}
