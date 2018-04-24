export interface IActivity{
	id: number;
	date: Date;
	name: string;
	comments?: string;
	distance?: number;
	gpxData: string;
}