import CreateCitiesCarousel from "./CreateCitiesCarousel";
import { useGetCitiesQuery } from "../store/features/apiSlice";

const BrowseCities = () => {
 const {
    data: cities,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCitiesQuery()

  let content

  if (isLoading) {
    content =
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
  } else if (isSuccess) {
    content = <CreateCitiesCarousel cities = {cities} />
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  if (!cities) return
    <div className="spinner-border text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>

  return (
    <>
      {content}
    </>
    
  )
}

export default BrowseCities;