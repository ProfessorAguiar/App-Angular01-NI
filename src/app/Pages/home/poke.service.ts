import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPoke } from './IPoke';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  constructor(private http: HttpClient) { }
  getPoke(): Observable<IPoke[]> {
    return this.http.get<IPoke[]>(`https://pokeapi.co/api/v2/pokemon/10`);
  }
}
