import { DateTime } from 'luxon'
import { faker } from '@faker-js/faker'

const numberOfPosts = 12

export const mockPosts = Array.from({ length: numberOfPosts }, (_, index) => ({
	title: faker.lorem.words({ min: 2, max: 6 }),
	summary: faker.lorem.paragraphs({ min: 3, max: 12 }),
	postedAt: DateTime.fromJSDate(faker.date.anytime()),
	thumbnail: faker.image.urlPicsumPhotos(),
	thumbnailAlt: 'Card Thumbnail',
}))
