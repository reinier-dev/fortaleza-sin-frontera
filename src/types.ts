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
