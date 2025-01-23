import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface SportEventSummaryDto {
  id: string;
  name: string;
  description: string;
  startDate: string; // En el cliente se maneja como string
  sportModality: string;
  location: string;
  province: string;
}

@Injectable({
  providedIn: 'root'
})
export class SportEventService {

  private readonly apiUrl = 'https://your-backend-url/api/sport-events'; // Cambia por la URL de tu backend

  constructor(private http: HttpClient) {
  }


  getAllSportEvents(): Observable<SportEventSummaryDto[]> {
    return this.http.get<SportEventSummaryDto[]>(this.apiUrl);
  }
}

