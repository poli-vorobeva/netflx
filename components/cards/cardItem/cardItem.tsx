import styles from './cardItem.module.css'
import Image from 'next/image'
import React from 'react'
const CardItem = (props: { img: string, styles: Record<string, string | number> }) => {
const baseImageUrl='https://img.freepik.com/free-vector/a-set-of-movie-icon-illustration-collections-of-movie-icons-concept-isolated_138676-799.jpg?w=740'
  return (
    <div className={styles.cardItem} style={props.styles}>
      <Image src={props.img?props.img:baseImageUrl} alt='item' 
      layout='fill'
      /*width={props.styles.imageWidth}*/
       height={props.styles.imageHeight}
        />
    </div>
  )
}
export default CardItem