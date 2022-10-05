import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificacaoService } from '../notificacao.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formControl = this.fb.group({
    nome: ["", [
      Validators.minLength(6),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(13),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(30),
      Validators.required
    ]]
  });

  constructor(
    private fb: FormBuilder,
    private notificacaoService: NotificacaoService,
  ) { }

  ngOnInit(): void {
  }
  enviarForm() { 
    this.notificacaoService.notificar("Obrigado por enviar suas mensagem! Logo entraremos em contato com você!");
    this.formControl.reset();

  }
}
