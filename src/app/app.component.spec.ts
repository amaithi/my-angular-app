import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AppComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

	it(`should have as title 'project-name'`, () => {
		expect(component.title).toEqual('project-name');
	});

	it('should render title', () => {
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('.content span').textContent).toContain('project-name app is running!');
	});


	