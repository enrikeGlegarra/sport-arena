import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface SportEventSummaryDto {
  id: string;
  name: string;
  description: string;
  startDate: string;
  sportModality: string;
  location: string;
  province: string;
  logoUrl: string;
  coverUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class SportEventService {

  private readonly apiUrl = 'http://localhost:4000/sport-events';

  constructor(private http: HttpClient) {
  }


  getAllSportEvents(): Observable<SportEventSummaryDto[]> {
    return this.http.get<SportEventSummaryDto[]>(this.apiUrl );
  }

  getSportEventById(id: string): Observable<SportEventSummaryDto> {
    return this.http.get<SportEventSummaryDto>(`${this.apiUrl}/${id}`);
  }

}

