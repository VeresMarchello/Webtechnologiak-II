import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldpointListComponent } from './weldpoint-list.component';

describe('WeldpointListComponent', () => {
  let component: WeldpointListComponent;
  let fixture: ComponentFixture<WeldpointListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeldpointListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeldpointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
