import { Component, Input, OnInit } from '@angular/core';
import { Item, itemInterface } from '../../../interfaces/item.interface';
import { StateService } from '../../../global-states/crud.state.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/crud.service';

@Component({
  selector: 'app-create-edit',
  standalone: true,
  imports: [ButtonModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create-edit.component.html',
  styleUrl: './create-edit.component.scss',
})
export class CreateEditComponent implements OnInit {
  @Input() onClickSubmit!: () => void;

  item: itemInterface = new Item();
  title = new FormControl('');
  body = new FormControl('');
  formName: string = 'New Post';
  message: string = '';
  click: boolean = false;

  constructor(
    private stateService: StateService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.stateService.dataSelected$.subscribe((data) => {
      this.item = data;
      if (this.item.title !== undefined) {
        const newBody = new FormControl(this.item.body);
        this.body = newBody;
        const newTitle = new FormControl(this.item.title);
        this.title = newTitle;
        this.formName = 'Update Post';
      }
    });
  }

  onSubmit() {
    this.click = true;
    if (this.title.value?.length === 0) {
      this.message = '*Can not submit, because title empty';
      this.click = false;
    } else if (this.body.value?.length === 0) {
      this.message = '*Can not submit, because body empty';
      this.click = false;
    } else {
      if (typeof this.title.value === 'string') {
        this.item.title = this.title.value;
      }
      if (typeof this.body.value === 'string') {
        this.item.body = this.body.value;
      }
      if(this.formName === 'New Post') {
        console.log('buat')
        this.item.userId = 123;
        this.dataService.create('posts', this.item).subscribe((data) => {
          let newData: itemInterface[] = []
          this.stateService.dataPost$.subscribe((data) => {
            newData = data
          })
          data.id = newData[newData.length - 1].id + 1
          newData.unshift(data)
          this.stateService.setData(newData);
          this.onClickSubmit();
        });
      } else {
        console.log('update')
        this.dataService.update('posts', 10, this.item).subscribe(() => {
          let newData: itemInterface[] = []
          this.stateService.dataPost$.subscribe((data) => {
            newData = data
          })
          for (let i = 0; i < newData.length; i++) {
            if(newData[i].id === this.item.id) {
              newData[i].title = this.item.title
              newData[i].body = this.item.body
            }
          }
          this.stateService.setData(newData);
          this.onClickSubmit();
        });
      }

    }
  }

  watchButton() {
    return this.click;
  }
}
