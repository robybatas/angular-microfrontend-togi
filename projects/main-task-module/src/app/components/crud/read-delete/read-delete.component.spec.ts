import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDeleteComponent } from './read-delete.component';

describe('ReadDeleteComponent', () => {
  let component: ReadDeleteComponent;
  let fixture: ComponentFixture<ReadDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
