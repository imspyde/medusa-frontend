import React from 'react'
import Banner from '../common/Banner';
import { CardCarousel } from '../common/CardCarousel';
import { RewardBanner } from '../common/RewardBanner';

const bannerImage = [
  {url:'https://image.shutterstock.com/image-vector/lottery-banners-realistic-icons-balls-260nw-775566865.jpg'},
  {url:'https://static.vecteezy.com/system/resources/thumbnails/002/838/076/small/fortune-wheel-lottery-play-online-casino-banner-game-machine-gambling-business-isolated-illustration-vector.jpg'}
]
const Trial = () => {
  return (
    <div>
      <RewardBanner/>
      {bannerImage.map((item)=>(
         <Banner src={item.url}/>
      ))}
      <CardCarousel title='Category'/>
    </div>
  )
}

export default Trial;
