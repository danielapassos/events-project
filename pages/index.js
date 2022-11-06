import { getFeaturedEvents } from '../dummy-data'
import EventsList from '../components/events/EventsList';

function HomePage() {

    const featuredEvents = getFeaturedEvents();

  return (
    <div>
        <h1>This is the Home Page!</h1>
        <ul>
            <EventsList items={EventsList}/>
        </ul>
    </div>
  )
}

export default HomePage;