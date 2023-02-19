import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';

  //INTERFACES
interface Redes {
  name: string;
  icon: string;
  link: string;
}

interface ProgLanguages {
  name: string;
  icon: string;
}

interface Frameworks {
  name: string;
  icon: string;
}

interface Software {
  name: string;
  icon: string;
}

interface OperationSystem {
  name: string;
  icon: string;
}

interface Database {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';


  //OBJECTS
  redes: Redes[] = [
    { name: 'Instagram', icon: "bi bi-instagram", link: "https://www.instagram.com/lucas.0xc/" },
    { name: 'Linkedin', icon: "bi bi-linkedin", link: "https://www.linkedin.com/in/lnag/" }
  ];

  progLanguages: ProgLanguages[] = [
    { name: 'Python', icon: "devicon-python-plain" },
    { name: 'Java', icon: "devicon-java-plain" },
    { name: 'JavaScript', icon: "devicon-javascript-plain" },
    { name: 'TypeScript', icon: "devicon-typescript-plain" },
    { name: 'C#', icon: "devicon-csharp-plain" }
  ];

  frameworks: Frameworks[] = [
    { name: 'Angular', icon: "devicon-angularjs-plain" },
    { name: 'Django', icon: "devicon-django-plain" },
    { name: 'Ionic', icon: "devicon-ionic-original" },
    { name: 'NodeJs', icon: "devicon-nodejs-plain" },
    { name: '.Net', icon: "devicon-dotnetcore-plain" },
    { name: 'Bootstrap', icon: "devicon-bootstrap-plain" },
    { name: 'Bulma', icon: "devicon-bulma-plain" }
  ];

  softwares: Software[] = [
    { name: 'FileZilla', icon: "devicon-filezilla-plain" },
    { name: 'Visual Studio', icon: "devicon-visualstudio-plain" },
    { name: 'VS Code', icon: "devicon-vscode-plain" },
    { name: 'PuTTy', icon: "devicon-putty-plain" },
    { name: 'GitHub Desktop', icon: "devicon-github-original" },
    { name: 'Heroku', icon: "devicon-heroku-original" },
  ];

  operationSystems: OperationSystem[] = [
    { name: 'Windows', icon: "devicon-windows8-original" },
    { name: 'Ubuntu', icon: "devicon-ubuntu-plain" },
    { name: 'Android', icon: "devicon-android-plain" }
  ];

  databases: Database[] = [
    { name: 'Oracle', icon: "devicon-oracle-original" },
    { name: 'MySQL', icon: "devicon-mysql-plain" },
    { name: 'SQLite', icon: "devicon-sqlite-plain" },
    { name: 'FireBase', icon: "devicon-firebase-plain" }
  ];

  //CONTACT FORM
  //==========================
  form = new FormGroup({
    from_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    from_email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  get f() {
    return this.form.controls;
  }

  public onSubmit(e: Event) {
    const submitButton = document.getElementById('submit-btn') as HTMLButtonElement;
    submitButton.addEventListener('click', function() {
      submitButton.disabled = true;});
      e.preventDefault();
      emailjs.sendForm("service_kpy0o17", "template_295eihn", e.target as HTMLFormElement, 'WQrwC2ydtySqBDjoN')
        .then((result: EmailJSResponseStatus) => {
          alert("Resultado: " + result.text + "\nEl correo se ha enviado con éxito");
          submitButton.addEventListener('click', function() {
            submitButton.disabled = false;});
          (e.target as HTMLFormElement).reset();
        }, (error) => {
          alert(error.text);
        });
    }

}
