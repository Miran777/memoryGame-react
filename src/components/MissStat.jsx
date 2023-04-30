import React from 'react'

const MissStat = ({lostStat}) => {
    if (lostStat == 1) return <div className='missStat'><div className='miss'>x</div><div className='miss'></div><div className='miss'></div></div>
    if (lostStat == 2) return <div className='missStat'><div className='miss'>x</div><div className='miss'>x</div><div className='miss'></div></div>
    if (lostStat == 3) return <div className='missStat'><div className='miss'>x</div><div className='miss'>x</div><div className='miss'>x</div></div>
    
    
    return <div className='missStat'><div className='miss'></div><div className='miss'></div><div className='miss'></div></div>
}

export default MissStat