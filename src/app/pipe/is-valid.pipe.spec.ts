import { IsValidPipe } from './is-valid.pipe'

xdescribe('IsValidPipe', () => {
  it('create an instance', () => {
    const pipe = new IsValidPipe()
    expect(pipe).toBeTruthy()
  })
})
