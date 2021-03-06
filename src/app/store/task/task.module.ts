import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { taskFeatureKey, reducer } from './task.reducers'
import { EffectsModule, EffectsRootModule } from '@ngrx/effects'
import { TaskEffects } from './task.effects'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(taskFeatureKey, reducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([TaskEffects]),
  ],
})
export class TaskModule {}
