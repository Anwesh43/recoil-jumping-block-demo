import {useState, useEffect} from 'react'
import {useRecoilState} from 'recoil'
import {scaleState} from './atoms'

export const useUpdate = () => {
    const [dir, setDir] = useState(1)
    const [scale, setScale] = useRecoilState(scaleState)
    const [animated, setAnimated] = useState(false)
    return {
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale
                const interval = setInterval(() => {
                    currScale += 0.02 * dir
                    setScale(currScale)
                    if (Math.abs(currScale - scale) > 1) {
                        setScale(scale + dir)
                        setDir(dir * -1)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, 20)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w,
        h
    }
}
