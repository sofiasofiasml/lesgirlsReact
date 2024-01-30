import { type EventId, type ListOfEvents } from '../types'
import { Event } from './Event'

interface Props {
  events: ListOfEvents
  onRemoveEvents: (id: EventId) => void
}

export const Events: React.FC<Props> = ({ events, onRemoveEvents }) => {
  return (
        <ul>
            <Event
                events ={events}
                onRemoveEvents = {onRemoveEvents}
            />
        </ul>
  )
}
