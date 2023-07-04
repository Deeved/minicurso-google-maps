import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface UF {
  id: number;
  sigle: string;
  nome: string;
}

@Injectable({ providedIn: "root" })
export class IBGEService {
  constructor(private http: HttpClient) {}

  loadUFs(): Observable<UF[]> {
    return this.http.get<UF[]>(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
    );
  }
}
