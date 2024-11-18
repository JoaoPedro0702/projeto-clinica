import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-clinica';

  openWhatsApp() {
    const phoneNumber = '5511999999999'; 
    const message = 'Olá! Gostaria de saber mais sobre os serviços.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
