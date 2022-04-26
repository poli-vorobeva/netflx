import Head from 'next/head'
import Bunner from '../components/bunner/bunner'
import Cards from '../components/cards/cards'
import NavBar from '../components/navbar/navbar'
import styles from '../styles/Home.module.css'
import { getVideos,getPopularVideos} from '../lib/videos'

export async function getServerSideProps() { 
  const jsVideos = await getVideos('javascript')
  const nextVideos = await getVideos('nextjs')
  const tsVideos = await getVideos('typescript')
  const popularVideos= await getPopularVideos()
return { props: { jsVideos,nextVideos,tsVideos,popularVideos} }
}
function HomePage({ jsVideos,nextVideos,tsVideos,popularVideos }) {
   return (
    <div>
      <Head>
        <title>!!YesFlix</title>
      </Head>
      <NavBar username='test@email.com' />
      <Bunner title='tilte String'
        subtitle='subTitle'
        imgUrl='/static/pexels-photo-11493260.jpeg' />
      <Cards title='JS' items={jsVideos} size='large'/>      
      <Cards title='Next JS' items={nextVideos} size='medium'/>
      <Cards title='TypeScript' items={tsVideos} size='small'/>      
      <Cards title='Popular' items={popularVideos} size='medium'/>
    </div>
  )
}

export default HomePage