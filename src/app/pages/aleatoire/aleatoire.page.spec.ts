import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AleatoirePage } from './aleatoire.page';

describe('AleatoirePage', () => {
  let component: AleatoirePage;
  let fixture: ComponentFixture<AleatoirePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AleatoirePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AleatoirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
