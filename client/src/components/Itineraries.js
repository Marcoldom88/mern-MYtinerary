import { useGetOneItineraryQuery } from "../store/features/apiSlice";
import CreateItineraries from "./CreateItineraries";
import "../stylesheets/CreateItineraries.css";

const Itineraries = () => {
 const {
    data: itineraries,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetOneItineraryQuery()

  console.log(itineraries,'kkkk')

  let content

  if (isLoading) {
    content =
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
  } else if (isSuccess) {
    content = <CreateItineraries itineraries = {itineraries} />
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  if (!itineraries) return
    <div className="spinner-border text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>

  return (
    <main className="itinerariesContainer">
      <div className="itinerariesBackground">
        <img className="MYtinerary" src="assets/MYtineraryLogo.png" alt="MYtinerary Logo"></img>
        {content}
      </div>
    </main>    
  )
}

export default Itineraries;