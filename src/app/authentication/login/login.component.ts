import { Component, signal } from '@angular/core';
import { IconComponent } from '../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-login',
  imports: [IconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword = signal(false);

  togglePassword() {
    this.showPassword.set(!this.showPassword());
  }
}
