export interface CreateSportEventDto {
  name: string;
  description?: string;
  eventUrl?: string;
  location: string;
  province: string;
  startDate: string;
  endDate: string;
  sportModality: string;
  createdBy: string;
}
