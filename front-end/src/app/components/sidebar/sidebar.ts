import { Component } from '@angular/core';
import { Profile } from './profile/profile';
import { Button } from '../button/button';

@Component({
  selector: 'app-sidebar',
  imports: [Profile, Button],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {}
