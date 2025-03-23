import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-yearly-statistics',
    standalone: true,
    imports: [CardModule, TableModule],
    encapsulation: ViewEncapsulation.None,
    template: `
    <p-card header="Yearly Statistics" class="flex flex-column gap-4">
      <p-table 
        [value]="statistics" 
        class="datatable-striped"
        [responsiveLayout]="'scroll'"
      >
        <ng-template pTemplate="header">
          <tr>
            <th>Year</th>
            <th>Activities</th>
            <th>Distance</th>
            <th>Time</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-stat>
          <tr>
            <td>{{ stat.year }}</td>
            <td>{{ stat.activities }}</td>
            <td>{{ stat.distance }}</td>
            <td>{{ stat.time }}</td>
          </tr>
        </ng-template>
      </p-table>
    </p-card>
  `
})
export class YearlyStatisticsComponent {
    statistics = [
        { year: 2024, activities: 202, distance: '2,241.8 km', time: '230h 48m' },
        { year: 2023, activities: 192, distance: '2,072.6 km', time: '214h 18m' },
        { year: 2022, activities: 91, distance: '794.7 km', time: '89h 10m' },
        { year: 2021, activities: 71, distance: '483.5 km', time: '56h 20m' },
        { year: 2020, activities: 99, distance: '908.9 km', time: '93h 20m' },
        { year: 2019, activities: 64, distance: '495.6 km', time: '47h 11m' }
    ];
}