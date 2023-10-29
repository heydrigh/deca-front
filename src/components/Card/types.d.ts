import { DateTime } from 'luxon'

export interface ICardProps {
	title: string
	summary: string
	postedAt: DateTime
	thumbnail: string
	thumbnailAlt: string
}
