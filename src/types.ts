export interface BookingData {
  name: string;
  phone: string;
  selectedDay: string;
  notes?: string;
}

export interface ScheduleDay {
  day: string;
  time: string;
  location: string;
  spotsLeft: number;
}

export enum SocialPlatform {
  YouTube = 'youtube',
  TikTok = 'tiktok',
  Facebook = 'facebook',
}

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  name: string;
  handle: string;
  href: string;
  ariaLabel: string;
}
