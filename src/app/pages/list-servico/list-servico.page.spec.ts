import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListServicoPage } from './list-servico.page';

describe('ListServicoPage', () => {
  let component: ListServicoPage;
  let fixture: ComponentFixture<ListServicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
