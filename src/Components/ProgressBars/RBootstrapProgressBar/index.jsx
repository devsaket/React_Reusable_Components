import React, { useState, useEffect } from 'react'
import { ProgressBar } from 'react-bootstrap'

const RBootstrapProgressBar = ({ progress, delayTime }) => {
    const [nowPercent, setNowPercent] = useState(0)
    let delay = delayTime || 300
    const pfunc = () => {
        const id = setInterval(() => {
            setNowPercent(progress);
        }, delay);
        return () => {
            clearInterval(id);
        }
    }

    useEffect(() => {
        pfunc()
    }, [])



    return (
        <>
            <ProgressBar variant="danger" min={0} max={100} now={nowPercent} label={`${nowPercent}%`} />
        </>
    )
}

export default RBootstrapProgressBar