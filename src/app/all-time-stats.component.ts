import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-all-time-stats',
    standalone: true,
    imports: [CardModule],
    encapsulation: ViewEncapsulation.None,
    template: `
    <p-card header="All-Time" class="flex flex-column gap-4">
      <div class="flex flex-column gap-3">
        <div class="flex justify-content-between align-items-center">
          <div class="font-bold">Activities</div>
          <div>725</div>
        </div>
        <div class="flex justify-content-between align-items-center">
          <div class="font-bold">Distance</div>
          <div>7,091.6 km</div>
        </div>
        <div class="flex justify-content-between align-items-center">
          <div class="font-bold">Time</div>
          <div>740h 18m</div>
        </div>
      </div>
    </p-card>
    `
})
export class AllTimeStatsComponent {}