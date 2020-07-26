import React from 'react'
import {scaleState} from './atoms'
import {useRecoilValue} from 'recoil'

const getStyle = (w, h, scale) => {
    const size = (Math.min(w, h) / 10) * scale
    const width = `${size}px`
    const height = `${size}px`
    const left = `${w * 0.65 - size / 2}px`
    const top = `${h / 2 - size / 2}px`
    const background = 'indigo'
    const position = 'absolute'
    return {width, height, position, left, top, background}
}

const FadingInBlock = ({w, h}) => {
    const scale = useRecoilValue(scaleState)
    return <div style = {getStyle(w, h, scale)}>
    </div>
}

export default FadingInBlock
