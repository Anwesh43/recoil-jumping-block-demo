import {atom, selector} from 'recoil'

export const scaleState = atom({
    key : 'scale',
    default : 0
})
export const sinify = (sc) => Math.sin(Math.PI * sc)
