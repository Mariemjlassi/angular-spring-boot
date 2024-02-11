import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerertaxeComponent } from './gerertaxe.component';

describe('GerertaxeComponent', () => {
  let component: GerertaxeComponent;
  let fixture: ComponentFixture<GerertaxeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerertaxeComponent]
    });
    fixture = TestBed.createComponent(GerertaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
