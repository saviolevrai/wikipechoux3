import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnecterPage } from './connecter.page';

describe('ConnecterPage', () => {
  let component: ConnecterPage;
  let fixture: ComponentFixture<ConnecterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnecterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnecterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
