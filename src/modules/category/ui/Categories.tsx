import { BestSeller } from "#/modules/home/ui/BestSeller"
import { NewArrival } from "#/modules/home/ui/NewArrival"
import FeaturedCategories from "./FeaturedCategories"
import HighlyRated from "./HighlyRated"
import TopRated from "./TopRated"
import UnderThousand from "./UnderThousand"

const Categories = () => {
  return (
    <>
      <FeaturedCategories></FeaturedCategories>
      <BestSeller></BestSeller>
      <NewArrival></NewArrival>
      <TopRated></TopRated>
      <HighlyRated></HighlyRated>
      <UnderThousand></UnderThousand>
    </>
  )
}

export default Categories
