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
    <div class="surface-section" style="position: relative; height: 100vh; overflow: hidden;">
      <div class="w-full h-full" style="background-image: url('/assets/banner.png'); background-size: cover; background-position: center; background-attachment: fixed;"></div>
    </div>

    <!-- Main Content -->
    <div class="grid p-4 mx-auto gap-4" style="max-width: 1200px;">
      <!-- Left Panel -->
      <div class="col-12 md:col-4 lg:col-fixed" style="max-width: 280px;">
        <div class="flex flex-column gap-4">
          <app-personal-records></app-personal-records>
          <div class="flex flex-column gap-2">
            <app-all-time-stats></app-all-time-stats>
            <div class="text-right text-sm text-gray-600 font-italic">Last updated: 01/01/2025</div>
          </div>
        </div>
      </div>

      <!-- Right Panel -->
      <div class="col-12 md:col-8">
        <div class="flex flex-column gap-4">
          <app-running-records></app-running-records>
          <app-yearly-statistics></app-yearly-statistics>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {}