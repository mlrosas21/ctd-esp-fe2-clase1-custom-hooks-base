import { AmplitudeTrackingSoftware } from './';

class AmplitudeLiskovTrackingSoftware extends AmplitudeTrackingSoftware {
  enforceLocationSending(eventName: string, location: string): void {
    if (location !== null) {
      console.log('Event: ' + eventName + ' dispatched from: ' + location);
    } else {
      throw new Error('Enforce location sending');
    }
  }
}

export default AmplitudeLiskovTrackingSoftware;
