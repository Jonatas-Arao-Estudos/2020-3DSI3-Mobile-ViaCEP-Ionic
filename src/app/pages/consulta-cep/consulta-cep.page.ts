import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ViaCEPService } from '../../service';
import { IEndereco } from '../../interfaces';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.page.html',
  styleUrls: ['./consulta-cep.page.scss'],
})
export class ConsultaCEPPage implements OnInit {

  endereco: IEndereco | undefined;

  constructor(private ViaCEP: ViaCEPService) { }

  CEP = new FormControl('', [
    Validators.pattern('^[0-9]{5}-[0-9]{3}$|^[0-9]{8}$'),
    Validators.required
  ]);


  ngOnInit() {
  }

  consultar() {
    if (this.CEP.valid){
      const cep: string = this.CEP.value;
      this.ViaCEP.consultarEndereco(cep.replace(/\-/g, ''))
      .then(endereco => {
        this.endereco = endereco;
      })
      .catch(erro => {
        console.error(erro);
      });
    }
  }

}
