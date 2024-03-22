import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './books/dashboard/dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        // DashboardComponent // der alte Weg mit Modulen, Dashboard mit angeben, sonst kompiliert es nicht
      ],
    })
    // .overrideComponent(AppComponent, {
    //   set: { imports: [], schemas: [NO_ERRORS_SCHEMA] }
    // })
    .compileComponents();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  it(`should have the 'Book Rating 😍' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Book Rating 😍');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Book Rating 😍');
  });
});
