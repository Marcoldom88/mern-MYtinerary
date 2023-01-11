import CitiesCards  from './CitiesCards';

const CreateCitiesCarousel = ({ cities }) => (
  <main className='main-container'>
    <div>
        { Object.values(cities).map(city => <CitiesCards key={city._id} city={ city } />) }
    </div>
  </main>
);
  
export default CreateCitiesCarousel;

 