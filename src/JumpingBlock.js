import React from 'react'
import {scaleState, sinify} from './atoms'
import {useDimension, useUpdate} from './hook'
import {useRecoilValue} from 'recoil'

const getStyle = (scale, w, h) => {
    const position = 'absolute'
    const top = `${h / 2 - (h / 4) * scale}px`
    const left = `${w / 4}px`
    const size = Math.min(w, h) / 10
    const width = `${size}px`
    const height = `${size}px`
    const background = 'green'
    return {position, top, left, width, height, background}
}

const JumpingBlock = ({w, h}) => {
    const scale = useRecoilValue(scaleState)
    const {start} = useUpdate()
    return <div onClick = {start} style = {getStyle(sinify(scale), w, h)}>

    </div>
}

export default JumpingBlock
