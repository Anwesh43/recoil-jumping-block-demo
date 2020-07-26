import {useState} from 'react'
import {useRecoilState} from 'recoil'
import {scaleState} from './atoms'

const useUpdate = () => {
    const [dir, setDir] = useState(1)
    const [scale, setScale] = useRecoilState(scaleState)
    const [animated, setAnimated] = useState(false)
    return {
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = 0
                const interval = setInterval(() => {
                    curScale += 0.02 * dir
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
