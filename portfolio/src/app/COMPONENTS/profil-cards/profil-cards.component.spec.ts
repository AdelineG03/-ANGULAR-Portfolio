import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCardsComponent } from './profil-cards.component';

describe('ProfilCardsComponent', () => {
  let component: ProfilCardsComponent;
  let fixture: ComponentFixture<ProfilCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilCardsComponent]
    });
    fixture = TestBed.createComponent(ProfilCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
