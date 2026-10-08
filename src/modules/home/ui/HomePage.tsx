import Features from './Features'
import HeroSlider from './HeroSlider'
import { NewArrival } from './NewArrival'
import { BestSeller } from './BestSeller'
import FlashDeal from './FlashDeal'
import Testinmony from './Testinmony'
import Restock from './Restock'

export const HomePage = () => {
  return (
    <>
      <HeroSlider></HeroSlider>
      <NewArrival></NewArrival>
      <Features></Features>
      <BestSeller></BestSeller>
      <FlashDeal></FlashDeal>
      <Testinmony></Testinmony>
      <Restock></Restock>
    </>
  )
}
