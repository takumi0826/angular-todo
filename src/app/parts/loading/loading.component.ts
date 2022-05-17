import { Component, OnInit } from '@angular/core'
import { LoadingService } from '../../services/loading.service'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  isShow$ = this.load.isShow$
  constructor(private load: LoadingService) {}
}
