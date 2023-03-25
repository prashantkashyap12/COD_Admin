import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDownloaderComponent } from './live-downloader.component';

describe('LiveDownloaderComponent', () => {
  let component: LiveDownloaderComponent;
  let fixture: ComponentFixture<LiveDownloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveDownloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
