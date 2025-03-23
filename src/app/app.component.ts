import { Component } from '@angular/core';
import { PersonalRecordsComponent } from './personal-records.component';
import { AllTimeStatsComponent } from './all-time-stats.component';
import { RunningRecordsComponent } from './running-records.component';
import { YearlyStatisticsComponent } from './yearly-statistics.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonalRecordsComponent, AllTimeStatsComponent, RunningRecordsComponent, YearlyStatisticsComponent],
  template: `
    <!-- Full-Height Parallax Banner Section -->
    <div class="surface-section banner-container" style="position: relative; height: 100vh; overflow: hidden;">
      <div 
        class="w-full h-full banner-content" 
        style="background-image: url('/assets/banner.png'); background-size: cover; background-position: center; background-attachment: fixed;">
      </div>
    </div>

    <!-- Main Content -->
    <div class="grid p-4 mx-auto gap-4" style="max-width: 1200px;">
      <!-- Left Panel -->
      <div class="col-12 md:col-4 lg:col-fixed left-panel" style="max-width: 280px;">
        <div class="flex flex-column gap-4">
          <app-personal-records></app-personal-records>
          <div class="flex flex-column gap-2">
            <app-all-time-stats></app-all-time-stats>
            <div class="text-right text-sm text-gray-600 font-italic">Last updated: 01/01/2025</div>
          </div>
        </div>
      </div>

      <!-- Right Panel -->
      <div class="col-12 md:col-8 right-panel">
        <div class="flex flex-column gap-4">
          <app-running-records></app-running-records>
          <app-yearly-statistics></app-yearly-statistics>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .banner-container {
        display: block; /* Default is visible */
      }

      @media (max-width: 768px) {
        .banner-container {
          display: none; /* Hide banner on mobile devices */
        }

        .left-panel {
          max-width: 100% !important; /* Make the left panel full width */
        }
      }
    `
  ]
})
export class AppComponent {}