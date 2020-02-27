import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { homePage } from './home.page';

describe('homePage', () => {
  let component: homePage;
  let fixture: ComponentFixture<homePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ homePage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(homePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
