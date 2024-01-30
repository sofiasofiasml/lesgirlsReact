export interface Events {
  id: string
  title: string
  descripction: string
  image: string
  url_location: string
  date_start: string
  date_fin: string
  time_start: string
  time_fin: string
  chat: string
  public_event: string
  date_update: string
  date_delate: string
  repeat_event: string
  category: string
  visible: boolean
}
export type EventId = Pick<Events, id>
export type EventTitle = Pick<Events, title>
export type EventDescription = Pick<Events, descripction>
export type EventDate_delate = Pick<Events, date_fin>

export type ListOfEvents = Events[]
