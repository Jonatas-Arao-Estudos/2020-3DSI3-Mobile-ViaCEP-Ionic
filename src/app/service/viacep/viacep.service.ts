import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEndereco } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})

export class ViaCEPService{

  constructor(private http: HttpClient){ }

  async consultarEndereco(CEP: string): Promise<IEndereco>{
    const url = `https://viacep.com.br/ws/${CEP}/json/`;

    return this.http.get<IEndereco>(url).toPromise();
  }
}
