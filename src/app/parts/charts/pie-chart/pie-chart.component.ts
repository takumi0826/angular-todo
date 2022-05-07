import { Component, OnInit } from '@angular/core'
import { Color } from '@swimlane/ngx-charts'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  single!: any[]
  view: [number, number] = [700, 400]

  colorScheme: string | Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  }

  constructor() {
    const single = [
      {
        name: 'Germany',
        value: 8940000,
      },
      {
        name: 'USA',
        value: 5000000,
      },
      {
        name: 'France',
        value: 7200000,
      },
      {
        name: 'UK',
        value: 6200000,
      },
    ]
    Object.assign(this, { single })
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)))
  }
}
