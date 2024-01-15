import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../services/crud.service';
import { Item, itemInterface } from '../../../interfaces/item.interface';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StateService } from '../../../global-states/crud.state.service';

@Component({
  selector: 'app-read-delete',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule],
  templateUrl: './read-delete.component.html',
  styleUrl: './read-delete.component.scss',
})
export class ReadDeleteComponent implements OnInit {
  @Input() onClickEdit!: (data: itemInterface) => void;

  items: itemInterface[] = [];
  page: number = 1;
  limit: number = 5;
  loading: number = -1;

  constructor(
    private dataService: DataService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.fecthPost();
  }

  fecthPost() {
    this.stateService.dataPost$.subscribe((data) => {
      if (data[0] !== undefined) {
        this.items = data;
      } else {
        this.dataService
          .getAll('posts')
          .subscribe((apiData: itemInterface[]) => {
            this.stateService.setData(apiData);
            this.stateService.selectData(new Item())
            this.items = apiData;
          });
      }
    });
  }

  clickEdit(data: itemInterface) {
    this.onClickEdit(data);
  }

  show(index: number) {
    if (
      index > this.limit * (this.page - 1) &&
      index < this.page * this.limit
    ) {
      return true;
    } else if (index === this.limit * (this.page - 1)) {
      return true;
    }
    return false;
  }

  showPagination(index: number) {
    if (index > 0 && index <= Math.ceil(this.items.length / this.limit)) {
      return true;
    }
    return false;
  }

  onClickPagination(page: number) {
    this.page = page;
  }

  onClickDelete(id: number, index: number) {
    this.loading = index;
    this.dataService.delete('posts', id).subscribe(() => {
      let newData: itemInterface[] = []
      this.stateService.dataPost$.subscribe((data) => {
        newData = data;
      });
      newData.splice(index, 1);
      this.stateService.setData(newData);
      this.items = newData;
      this.loading = - 1;
    });
  }

  showLoading(index: number) {
    if (this.loading !== index) {
      return false;
    }
    return true;
  }
}
