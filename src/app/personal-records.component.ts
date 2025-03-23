import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-personal-records',
  standalone: true,
  imports: [CardModule, NgFor],
  encapsulation: ViewEncapsulation.None,
  template: `
    <p-card header="Personal Records" class="flex flex-column gap-3">
      <div class="flex flex-column gap-3">
        <div class="flex justify-content-between align-items-center border-bottom-1 surface-border py-2" *ngFor="let record of records">
          <div class="font-bold">{{ record.event }}</div>
          <div>{{ record.time }}</div>
        </div>
      </div>
    </p-card>
  `
})
export class PersonalRecordsComponent {
  records = [
    { event: '400m', time: '52s' },
    { event: '1K', time: '3:54' },
    { event: '5K', time: '23:16' },
    { event: '10K', time: '48:07' },
    { event: '15K', time: '1:13:54' },
    { event: '20K', time: '1:38:52' },
    { event: 'Half-Marathon', time: '1:44:11' },
    { event: '30K', time: '2:36:39' },
    { event: 'Marathon', time: '3:41:33' }
  ];
}