import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {
constructor(){
  console.warn("Lazy Loading is done")
  console.warn(`[${new Date().toISOString()}] Lazy Loading is done!`);
}
}
