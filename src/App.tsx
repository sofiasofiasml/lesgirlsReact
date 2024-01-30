import { useState } from 'react'

import './App.css'
import { Events } from './components/Events'
import { type EventId, type EventDate_delate } from './types'

const mockEvents = [
  {
    id: '1',
    title: 'todo 1',
    descripction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis odio sit amet mauris cursus, in tincidunt mi porta. Proin mattis urna vel leo cursus, non placerat dui sagittis. Integer ac dolor turpis. Duis pulvinar elit sit amet lorem varius iaculis. Quisque id urna turpis. In in sem feugiat, rutrum velit ut, volutpat ex. In porta viverra consectetur. Curabitur pulvinar rutrum enim. Duis venenatis, sapien ac malesuada molestie, dolor metus dignissim dolor, sed commodo nisi ex id libero. Nam viverra justo a molestie pellentesque. Nullam sed elit vel libero tempor accumsan.',
    image: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=mNzWtPQ0RXQMFlp0ZdM-SQ&cb_client=search.gws-prod.gps&yaw=107.374756&pitch=0&thumbfov=100&w=64&h=64',
    location: 'SOCIAL LAMBDA',
    url_location: 'https://maps.app.goo.gl/q12MJjdALsPycDT1A',
    date_start: '11/03/2023',
    date_fin: '11/03/2023',
    time_start: '17:00:00',
    time_fin: '20:00:00',
    chat: 'https://www.youtube.com/watch?v=4lAYfsq-2TE&ab_channel=midulive',
    public_event: 'TRUE',
    date_update: '11/03/2023',
    repeat_event: 'TRUE - 86 400',
    category: 'GASTRONOMY'
  },
  {
    id: '2',
    title: 'todo 2',
    descripction: 'Lorem ipsum dolor sit amet',
    image: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=mNzWtPQ0RXQMFlp0ZdM-SQ&cb_client=search.gws-prod.gps&yaw=107.374756&pitch=0&thumbfov=100&w=64&h=64',
    location: 'SOCIAL LAMBDA',
    url_location: 'https://maps.app.goo.gl/q12MJjdALsPycDT1A',
    date_start: '11/03/2023',
    date_fin: '11/03/2023',
    time_start: '17:00:00',
    time_fin: '20:00:00',
    chat: 'https://www.youtube.com/watch?v=4lAYfsq-2TE&ab_channel=midulive',
    public_event: 'TRUE',
    date_update: '11/03/2023',
    repeat_event: 'TRUE - 86 400',
    category: 'GASTRONOMY'
  }

]

const App = (): JSX.Element => {
  const [events, setEvents] = useState(mockEvents)

  const handleRemove = (id: EventId): void => {
    const newEventos = events.filter(event => event.id != id)
    setEvents(newEventos)
  }
  const handleCompleated = (id: EventId, date_delate: EventDate_delate): void => {
    const newEventos = events.map(event => {
      if (event.id == id) {
        const today = new Date()
        const date = today.getDate()
        const month = today.getMonth() + 1
        const year = today.getFullYear()
        const currentDate = date + '/' + month + '/' + year
        return {
          ...event,
          date_delate: currentDate
        }
      }
    })
  }
  return (
    <Events
    onRemoveEvents = {handleRemove}
    events={events}
    />
  )
}

export default App
