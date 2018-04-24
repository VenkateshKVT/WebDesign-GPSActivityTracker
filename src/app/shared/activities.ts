import { IActivity } from './activity.model'

export const SAVED_ACTIVITIES: IActivity[] = [
	{
		id: 1,
		date: new Date('04/17/2018'),
		name: "Venkatesh",
		comments: "Activity 1 details",
		distance: 5.3,
		gpxData: '../assets/gpx/1.gpx'
	},
	{
		id: 2,
		date: new Date('05/17/2018'),
		name: "Kallepalli",
		comments: "Activity 2 details",
		distance: 16,
		gpxData: '../assets/gpx/2.gpx'
	},
	{
		id: 1,
		date: new Date('06/17/2018'),
		name: "UnivCin",
		comments: "Activity 3 details",
		distance: 17,
		gpxData: '../assets/gpx/3.gpx'
	},
	{
		id: 1,
		date: new Date('07/17/2018'),
		name: "CompSci",
		comments: "Activity 4 details",
		distance: 21,
		gpxData: '../assets/gpx/4.gpx'
	}


]