import { Injectable } from '@angular/core';
import { IProjectLink } from '../interfaces/IProjectLink';
import { from, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ProjectService {
	private MockProjects: IProjectLink[] = [
		{ Id: 1, Name: 'Q3 AI Integration', Progress: 78, Color: '#20FF63', Href: '#' },
		{ Id: 2, Name: 'Q3 Marketing Campaign', Progress: 58, Color: '#FF41DF', Href: '#' },
		
	]

	public LoadProjectLinks(): Observable<IProjectLink[]> {
		return from(Promise.resolve(this.MockProjects));
	}
}
