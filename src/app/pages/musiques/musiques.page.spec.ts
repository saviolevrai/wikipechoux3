import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusiquesPage } from './musiques.page';

describe('MusiquesPage', () => {
  let component: MusiquesPage;
  let fixture: ComponentFixture<MusiquesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusiquesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusiquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
