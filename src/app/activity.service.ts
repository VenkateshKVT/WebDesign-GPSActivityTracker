import { Injectable } from '@angular/core';
import { IActivity } from './shared/activity.model';
import { SAVED_ACTIVITIES } from './shared/activities';


@Injectable()
export class ActivityService {

  constructor() { }
  getActivities(): IActivity[] {
  	return SAVED_ACTIVITIES.splice(0);
  }

  getTotalActivities(allActivities: IActivity[]) {
  	return allActivities.length;

  }
  getTotalDistance(allActivities: IActivity[]) {
  		var totalDistance = 0;
  		for(let i=0; i<allActivities.length; i++){
  			totalDistance = totalDistance+allActivities[i].distance;
  		}
  		return totalDistance;
  }
  getFirstDate(allActivities: IActivity[]){
  	var earliestDate = new Date("12/30/9999");
  	for(let i=0; i<allActivities.length; i++){
  		var currentDate = allActivities[i].date;
  		if(currentDate < earliestDate)
  			earliestDate = currentDate;
  	}
  	return earliestDate;

  }

}
