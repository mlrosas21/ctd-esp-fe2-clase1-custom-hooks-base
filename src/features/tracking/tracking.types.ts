export type TrackingSoftwareType = 'GOOGLE_ANALYTICS' | 'FACEBOOK_PIXEL' | 'AMPLITUDE';

export interface TrackingSoftware {
  trackEvent: (eventName: string, location: string) => void;
}

export interface Initializable {
  initialize: () => void;
}
