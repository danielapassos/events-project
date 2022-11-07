import { useRouter } from "next/router"
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary.js"
import LogisticsItem from "../../components/event-detail/logistics-item.js"
import EventLogistics from "../../components/event-detail/event-logistics.js"
import EventContent from "../../components/event-detail/event-content";

function EventDetailPage() {

  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>
  }

  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent/>
    </Fragment>
  )
}

export default EventDetailPage