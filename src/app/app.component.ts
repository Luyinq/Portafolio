import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormGroup, FormControl, Validators} from '@angular/forms';

  interface Redes {
    nombre: string;
    icon: string;
    link: string;
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';



  social: Redes[] = [
    { nombre: 'Instagram', icon: "bi bi-instagram", link: "https://www.instagram.com/lucas.0xc/"},
    { nombre: 'Linkedin', icon: "bi bi-linkedin", link: "https://www.linkedin.com/in/lnag/"}
  ];

  form = new FormGroup({
    from_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    from_email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }

  public onSubmit(e: Event) {
    e.preventDefault();
    emailjs.sendForm("service_kpy0o17", "template_295eihn", e.target as HTMLFormElement, 'WQrwC2ydtySqBDjoN')
      .then((result: EmailJSResponseStatus) => {
        alert("Resultado: "+ result.text + "\nEl correo se ha enviado con éxito");
        (e.target as HTMLFormElement).reset();
      }, (error) => {
        alert(error.text);
      });
  }
  
}
