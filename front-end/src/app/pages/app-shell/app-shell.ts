import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { Topbar } from '../../components/topbar/topbar';

@Component({
  selector: 'app-app-shell',
  imports: [RouterOutlet, Topbar, Sidebar],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss',
})
export class AppShell {}
