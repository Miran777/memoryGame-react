import React, { useEffect, useState } from 'react'
import Card from './Card'
import MissStat from './MissStat'


const Cards = () => {
    const [prev, setPrev] = useState(-1)
    const [lostStat, setLostStat] = useState(0)
    const [winStat, setWinStat] = useState(0)
    const [items, setItems] = useState([
        { id: 1, img: require('../assets/img/html.png'), stat: "" },
        { id: 1, img:  require('../assets/img/html.png'), stat: "" },
        { id: 2, img: require('../assets/img/css.png'), stat: "" },
        { id: 2, img: require('../assets/img/css.png'), stat: "" },
        { id: 3, img: require('../assets/img/js.png'), stat: "" },
        { id: 3, img: require('../assets/img/js.png'), stat: "" },
        { id: 4, img: require('../assets/img/nodejs.png'), stat: "" },
        { id: 4, img: require('../assets/img/nodejs.png'), stat: "" },
        { id: 5, img: require('../assets/img/scss.png'), stat: "" },
        { id: 5, img: require('../assets/img/scss.png'), stat: "" },
        { id: 6, img: require('../assets/img/vue.png'), stat: "" },
        { id: 6, img: require('../assets/img/vue.png'), stat: "" },
        { id: 7, img: require('../assets/img/react.png'), stat: "" },
        { id: 7, img: require('../assets/img/react.png'), stat: "" },
        { id: 8, img: require('../assets/img/angular.png'), stat: "" },
        { id: 8, img: require('../assets/img/angular.png'), stat: "" }
    ].sort(() => Math.random() - 0.5))

    

    function check(current) {
        if (items[current].id == items[prev].id && items.indexOf(items[current]) != items.indexOf(items[prev])) {
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
            setWinStat(winStat + 1)
        } else if (items.indexOf(items[current]) != items.indexOf(items[prev])) {
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setLostStat(lostStat + 1)
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id) {
            if(prev === -1) {
                items[id].stat = "active"
                setItems([...items])
                setPrev(id)
            } else {
                check(id)
            }
    }

    function handleReset() {
        items.forEach(item => item.stat = "")
        setItems([...items].sort(() => Math.random() - 0.5))
        setLostStat(0)
        setWinStat(0)
        setPrev(-1)
    }

  return (
    <div>
        
            { lostStat < 3 && winStat < items.length / 2 ? 
            <>
            <MissStat lostStat={lostStat} />
            <div className='container'>
                {items.map((item, index) => <Card key={index} handleClick={handleClick} id={index} item={item}/>) }
            </div>
            </> :
            <div className='postGameMenu'>
                <div onClick={handleReset} className='newGameButton'>new game</div>
                {lostStat == 3 ? 
                    <div className='postGameMessage'>{'You lost :('}</div> :
                    <div className='postGameMessage'>{'You won :)'}</div>
                }
            </div>
            }
    </div>
    )
}

export default Cards