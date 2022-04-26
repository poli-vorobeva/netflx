import React, { useEffect, useState } from "react"
import CardItem from "./cardItem/cardItem"
import styles from './cards.module.css'
type ItemData={
  title: string;
  imgUrl: string;
  id: string;
}
type CardsPropsType = {
  title: string,
  items: ItemData[], 
  size: string
}
const Cards = (props: CardsPropsType) => {
  //max offset  window width  - imgsCount
  //small- w150 h 75    medium- w200 h100  large-w200 h400  
  const { title, items = [] } = props
  const widthNumber = props.size==='small'?150:200
  const heightNumber=props.size==='large'?(widthNumber * 2):(widthNumber / 2)
  const padding = 20
  const imagePadding = 5
  const itemStyles = {
    width: widthNumber + "px",
    minWidth: widthNumber + "px",
    height:  heightNumber+ "px",
    padding: imagePadding + "px",
    imageWidth: widthNumber - imagePadding * 2,
    imageHeight: heightNumber * 2 - imagePadding * 2
  }
  const itemsWidth = props.items.length * widthNumber
  const transltStep = widthNumber * 2
  const [windowWidth, setWindowWidth] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [transtl, setTranslt] = useState(0)
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    setScrollWidth(itemsWidth - windowWidth + padding)
    window.onresize = () => {
      setWindowWidth(window.innerWidth)
      setScrollWidth(itemsWidth - windowWidth + padding)
    }
  })
  const scroll = (direction: string) => {
    if (Math.abs(transtl) <= scrollWidth) {
      if (direction === 'right') {
        setTranslt(Math.abs(transtl - transltStep) <= scrollWidth ? transtl - transltStep : -scrollWidth)
      } else {
        if (transtl < 0) {
          setTranslt(transtl + transltStep > 0 ? 0 : transtl + transltStep)
        }
      }
    }
  }
 // console.log(props)
  return (
    <div className={styles.container}
      onClick={(e) => {
        if (e.clientX < 80) {
          scroll('left')

        } else if (windowWidth - e.clientX < 80) {
          scroll('right')
        }
      }}>
      {props.title}
      <div className={styles.cardsWrapper}
        style={{ transform: `translate(${transtl}px)` }}>
        {
          props.items.map((el, ind) => {
            return <CardItem img={el.imgUrl} styles={itemStyles} key={ind} />
          })
        }
      </div>

    </div>
  )
}
export default Cards