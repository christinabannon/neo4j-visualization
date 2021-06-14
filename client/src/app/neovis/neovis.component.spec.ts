import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeovisComponent } from './neovis.component';

describe('NeovisComponent', () => {
  let component: NeovisComponent;
  let fixture: ComponentFixture<NeovisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeovisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeovisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
