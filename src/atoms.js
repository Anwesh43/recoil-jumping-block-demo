import {atom, selector} from 'recoil'

export const scale = atom({
    key : 'scale',
    default : 0
})
const sinify = (sc) => Math.sin(scale * sc)

export const sinifiedScale =  selector({
  key : 'sinifiedScale',
  get: (get) => {
      const scale = get(scale)
      return sinify(scale)
  }
})
