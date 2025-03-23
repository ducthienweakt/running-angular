import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-running-records',
  standalone: true,
  imports: [CardModule, TableModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <p-card header="Running Records" class="flex flex-column gap-3">
      <p-table 
        [value]="records" 
        class="datatable-striped"
        [responsiveLayout]="'scroll'"
      >
        <ng-template pTemplate="header">
          <tr>
            <th>Race Name</th>
            <th>Distance</th>
            <th>Pace (min/km)</th>
            <th>Final Time</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-record>
          <tr>
            <td>
              <a [href]="record.link || '#'" target="_blank" class="font-medium text-color-secondary">{{ record.raceName }}</a>
            </td>
            <td>{{ record.distance }}</td>
            <td>{{ record.pace }}</td>
            <td>{{ record.finalTime }}</td>
          </tr>
        </ng-template>
      </p-table>
    </p-card>
  `
})
export class RunningRecordsComponent {
  records = [
    { raceName: 'HCMC Marathon 2025', distance: 'Marathon', pace: '5:17/km', finalTime: '3:42:39' },
    { raceName: 'TCB Marathon 2024', distance: 'Marathon', pace: '5:15/km', finalTime: '3:41:33' },
    { raceName: 'HCMC Marathon 2024', distance: 'Marathon', pace: '6:00/km', finalTime: '4:13:18' },
    { raceName: 'Phan Thiết Marathon 2023', distance: 'Marathon', pace: '6:13/km', finalTime: '4:24:04' },
    { raceName: 'HCMC Marathon 2023', distance: 'Marathon', pace: '6:53/km', finalTime: '4:53:45' },
    { raceName: 'HCM Marathon 2022', distance: 'Marathon', pace: '6:55/km', finalTime: '4:56:48' },
    { raceName: 'HCM Marathon 2021', distance: 'Marathon', pace: '8:35/km', finalTime: '6:04:21' },
    { raceName: 'Pocari Run 2023', distance: '21.21 km', pace: '4:57/km', finalTime: '1:44:53' },
    { raceName: 'One Way Vung Tau 2023', distance: '21.21 km', pace: '5:26/km', finalTime: '1:55:45' },
    { raceName: 'HCMC Marathon 2020', distance: '21.21 km', pace: '6:09', finalTime: '2:14:42' },
    { raceName: 'Pocari Run 2020', distance: '21.21 km', pace: '6:15', finalTime: '2:15:55' },
    { raceName: 'Singapore Marathon 2019', distance: '10 km', pace: '5:08', finalTime: '53:00' }
  ];
}