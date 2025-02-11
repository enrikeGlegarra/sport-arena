import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateSportEventDto} from "../dtos/SportEvent/CreateSportEvent.dto";
import {SportEventSummaryDto} from "../dtos/SportEvent/SportEventSummary.dto";


@Injectable({
  providedIn: 'root'
})
export class SportEventService {

  private readonly apiUrl = 'http://localhost:4000/sport-events';

  constructor(private http: HttpClient) {
  }


  getAllSportEvents(): Observable<SportEventSummaryDto[]> {
    return this.http.get<SportEventSummaryDto[]>(this.apiUrl);
  }

  getSportEventById(id: string): Observable<SportEventSummaryDto> {
    return this.http.get<SportEventSummaryDto>(`${this.apiUrl}/${id}`);
  }

  createSportEvent(
    eventData: CreateSportEventDto,
    coverImage?: File,
    logoImage?: File
  ): Observable<any> {
    const formData = new FormData();

    Object.keys(eventData).forEach((key) => {
      formData.append(key, (eventData as any)[key]);
    });

    if (coverImage) {
      const renamedCover = new File([coverImage], 'cover', {type: coverImage.type});
      formData.append('files', renamedCover);
    }

    if (logoImage) {
      const renamedLogo = new File([logoImage], 'logo', {type: logoImage.type});
      formData.append('files', renamedLogo);
    }
    console.log('FORM DATA,', formData)
    // TODO coger usuario del login
    formData.append("createdBy", "08b1c045-fddd-478a-bc81-121781c6376e")
    return this.http.post(`${this.apiUrl}`, formData);
  }

}

