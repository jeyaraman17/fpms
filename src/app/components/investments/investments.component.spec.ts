import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestmentComponent } from './investments.component';

describe('InvestmentComponent', () => {
  let component: InvestmentComponent;
  let fixture: ComponentFixture<InvestmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentComponent]
    });
    fixture = TestBed.createComponent(InvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
