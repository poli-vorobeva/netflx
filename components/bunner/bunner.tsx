import styles from './bunner.module.css'
type BunnerProps = {
    title: string,
    subtitle: string,
    imgUrl: string
}
const Bunner = (props: BunnerProps) => {
    const { title, subtitle, imgUrl } = props
    const handlePlayButton = () => {
    }
    return (
        <div className={styles.container}>
            <div className={styles.image}
                style={{ backgroundImage: `url(${imgUrl})` }}>

            </div>
            <div className={styles.leftWrapper}>
                <div className={styles.left}>
                    <h3 className={styles.title}>{title}</h3>
                    <h6 className={styles.subTitle}>{subtitle}</h6>
                    <button onClick={handlePlayButton}>Play</button>
                </div>
            </div>
        </div>)
}
export default Bunner