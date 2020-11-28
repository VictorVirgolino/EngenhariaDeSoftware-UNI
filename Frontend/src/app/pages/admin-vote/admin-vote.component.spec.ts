import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVoteComponent } from './admin-vote.component';

describe('AdminVoteComponent', () => {
  let component: AdminVoteComponent;
  let fixture: ComponentFixture<AdminVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
