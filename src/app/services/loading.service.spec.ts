import { TestBed } from '@angular/core/testing'

import { LoadingService } from './loading.service'

describe('LoadingService', () => {
  let service: LoadingService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(LoadingService)
  })

  it('loading start', () => {
    service.start()
    service.isShow$.subscribe((flg) => {
      expect(flg).toBeTruthy()
    })
  })

  it('loading stop', () => {
    service.stop()
    service.isShow$.subscribe((flg) => {
      expect(flg).toBeFalsy()
    })
  })
})
