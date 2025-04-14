import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the title', () => {
    const compiled = fixture.nativeElement;
   const button =compiled.querySelector('button')
   button.click();
   fixture.detectChanges();
 
   expect(compiled.querySelector('h1').textContent).toContain('New Title');
  });
});
