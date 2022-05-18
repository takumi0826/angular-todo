import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core'
import { MatTabGroup } from '@angular/material/tabs'
import { ActivatedRoute, Router } from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { TopService } from 'src/app/services/top.service'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements AfterViewInit, OnDestroy {
  tabIndex$ = this.topService.tabIndex$
  destroy$ = new Subject()
  @ViewChild('tabGroup') tabGroup!: MatTabGroup
  constructor(private topService: TopService) {}

  ngAfterViewInit(): void {
    this.tabIndex$.pipe(takeUntil(this.destroy$)).subscribe((index) => {
      this.tabGroup.selectedIndex = index
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
  }
}
