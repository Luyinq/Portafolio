import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


