import React, { useState } from 'react'
import { ProgressBar } from 'react-bootstrap'

const RBootstrapProgressBar = () => {
    const [nowpercent, setNowpercent] = useState(0)

  return (
    <>
        <ProgressBar variant="danger" min={0} max={100} now={nowpercent} label={`${nowpercent}%`} className='m-5' />
    </>
  )
}

export default RBootstrapProgressBar