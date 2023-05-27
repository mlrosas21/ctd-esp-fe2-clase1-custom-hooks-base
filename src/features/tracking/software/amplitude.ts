import { Initializable } from './../tracking.types';
import { TrackingSoftware } from 'features/tracking/tracking.types';

abstract class AmplitudeTrackingSoftware implements TrackingSoftware, Initializable {
  private initialized = false;

  initialize(): void {
    this.initialized = true;
    // DO EXTRA LOGIC
  }

  trackEvent(eventName: string, location: string): void {
    if (this.initialized) {
      console.log('Event: ' + eventName + ' dispatched from: ' + location);
    }
  }
}

export default AmplitudeTrackingSoftware;
