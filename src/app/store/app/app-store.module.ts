import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule, EffectsRootModule } from '@ngrx/effects'
import { appFeatureKey, reducer } from './app-store.reducers'
import { AppEffects } from './app-store.effects'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(appFeatureKey, reducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AppEffects]),
  ],
})
export class AppStoreModule {}
