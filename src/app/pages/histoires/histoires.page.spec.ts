import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoiresPage } from './histoires.page';

describe('HistoiresPage', () => {
  let component: HistoiresPage;
  let fixture: ComponentFixture<HistoiresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoiresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoiresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
