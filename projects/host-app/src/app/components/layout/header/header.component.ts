import { Component, OnInit } from '@angular/core';
import { LayoutServices } from '../../../services/layout.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  autoText: string = '';
  flagAutotext: boolean = false;

  constructor(
    private LayoutServices: LayoutServices
  ) {}

  ngOnInit(): void {
    this.autoTexting(-1);
  }

  autoTexting(index: number) {
    const text = this.LayoutServices.initHeaderText()
    if (!this.flagAutotext) {
      this.autoText = text[index];
      const newIndex = index + 1;
      if (newIndex === text.length - 1) {
        this.flagAutotext = true;
      }
      this.setTime(newIndex);
    } else {
      this.autoText = text[index];
      const newIndex = index - 1;
      if (newIndex === 0) {
        this.flagAutotext = false;
      }
      this.setTime(newIndex);
    }
  }

  setTime(index: number) {
    setTimeout(() => {
      this.autoTexting(index);
    }, 300);
  }
}
