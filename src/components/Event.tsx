import { type EventId, type Event as EventsType } from '../types'

interface Props extends EventsType {
  onRemoveEvents: (id: EventId) => void
}
export const Event: React.FC<Props> = ({ events, onRemoveEvents }) => {
  return (
        <div>
           {events.map(event => (
                <li key={event.id}>
                    <h1>{event.title}</h1>
                    <div>{event.descripction}</div>
                    <button onClick={() => { onRemoveEvents(event.id) }}/>
                </li>
           ))}

        </div>
  )
}
