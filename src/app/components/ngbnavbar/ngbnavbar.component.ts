import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ngbnavbar',
  standalone: true,
  imports: [CommonModule, NgbCollapseModule, RouterLink],
  templateUrl: './ngbnavbar.component.html',
  styleUrls: ['./ngbnavbar.component.css']
})
export class NgbnavbarComponent {
  isMenuCollapsed = true;

}

