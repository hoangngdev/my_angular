import { Component } from '@angular/core';

@Component({
    selector: 'app-name-parent',
    template: `
    <h2>Master controls {{names.length}} names</h2>

    <app-name-child *ngFor="let nameElement of names" [name]="nameElement"></app-name-child>
  `
})
export class NameParentComponent {
    // Displays 'Dr. IQ', '<no name set>', 'Bombasto'
    names = ['Dr. IQ', '   ', '  Bombasto  '];
}