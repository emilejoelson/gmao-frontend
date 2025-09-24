import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-header',
  imports: [IconComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  goToProfile() {
    console.log('Navigate to profile');
    this.isDropdownOpen = false;
    // Add your navigation logic here
    // Example: this.router.navigate(['/profile']);
  }

  logout() {
    console.log('Logout clicked');
    this.isDropdownOpen = false;
    // Add your logout logic here
    // Example: this.authService.logout();
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const dropdown = target.closest('.user-avatar-container');
    
    if (!dropdown) {
      this.isDropdownOpen = false;
    }
  }
}