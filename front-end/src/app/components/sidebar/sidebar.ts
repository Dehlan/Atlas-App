import { Component } from '@angular/core';
import { Profile } from './profile/profile';
import { Button } from '../button/button';
import { ProjectLink } from './project-link/project-link';

@Component({
  selector: 'app-sidebar',
  imports: [Profile, Button, ProjectLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {}
