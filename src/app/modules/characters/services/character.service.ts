import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterModel } from '../../../core/models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  getCharacters$(): Observable<any> {
    return this.http.get(this.URL);
  }

  getDetails$(id: number) {
    return this.http.get<CharacterModel>(`${this.URL}/${id}`);
  }
}
