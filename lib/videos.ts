import videoData from './data.json'

export const getCommonVideos=async (url:string)=>{
  try{
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
    const BASE_URL=`youtube.googleapis.com/youtube/v3`
    const response = await fetch(`https://${BASE_URL}/${url}&maxResults=5&key=${YOUTUBE_API_KEY}`)
     const data = await response.json()

     if(data.error){
       console.error('Went wrong',data.error)
       return []
     }
    return data?.items.map(item=>{
      const id = item?.id?.videoId ? item.id:''
      return {
        title:item.snippet?.title||'',
        imgUrl:item.snippet?.thumbnails.high.url||'',
        id
      }
    })
  }catch(e){
    console.log('Something gone wrong')
    return []
  }
 
}
export const getVideos=(queryString:string)=>{
  const url=`search?part=snippet&q=${queryString}`
 return getCommonVideos(url)
}
export const getPopularVideos=()=>{
  const url=`videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US`
 return getCommonVideos(url)
}