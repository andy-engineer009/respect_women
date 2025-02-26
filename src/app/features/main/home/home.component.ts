import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  startDate = new Date('2025-02-25');
  endDate = new Date('2025-11-01');
  daysLeft: number = 0;

  ngOnInit() {
    this.calculateDaysLeft();
  }

  calculateDaysLeft() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ensure time is set to start of the day
    const timeDiff = (this.endDate.getTime() - today.getTime());
    this.daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  }
}
