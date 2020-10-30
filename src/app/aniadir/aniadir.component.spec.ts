import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniadirComponent } from './aniadir.component';

describe('AniadirComponent', () => {
  let component: AniadirComponent;
  let fixture: ComponentFixture<AniadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniadirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AniadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
