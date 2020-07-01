import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  obrigatorio = '';
  staticAlertClosed = false;
  successMessage = '';
  formValido = false;

  constructor() { }

  ngOnInit(): void {

  }


  onSubmit(formData: NgForm) {

    this.formValido = true;

    if ( !formData.valid ){
        // return alert('Por favor, preencha todos os campos obrigatórios');
      this.obrigatorio = 'something';
    } else {
      this.obrigatorio = '';
      this.successMessage = 'something';
      formData.reset();
    }
    // const email = formData.value.email;
    // const password = formData.value.password;


}

}
