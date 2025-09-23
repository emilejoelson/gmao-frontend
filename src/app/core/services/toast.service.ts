import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TIconName } from '../../shared/ui/icon/icon.component';

// Define the toast interface
interface Toast {
  type: string;
  text: string;
  icon: TIconName;
  id?: string; // Optional unique identifier
}

// Define allowed toast types
type ToastType = 'success' | 'error' | 'warning' | 'info';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.toastsSubject.asObservable();

  constructor() {}

  createToast(type: ToastType, text: string): void {
    const iconMap: Record<ToastType, TIconName> = {
      success: 'successIcon',
      error: 'errorIcon',
      warning: 'warningIcon',
      info: 'infoIcon',
    };
    
    const icon: TIconName = iconMap[type];
    const toast: Toast = { 
      type, 
      text, 
      icon,
      id: this.generateToastId() // Add unique ID for better tracking
    };
    
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next([...currentToasts, toast]);
    setTimeout(() => this.removeToast(toast), 60000);
  }

  removeToast(toast: Toast): void {
    const currentToasts = this.toastsSubject.value;
    const updatedToasts = currentToasts.filter((t) => t !== toast);
    this.toastsSubject.next(updatedToasts);
  }

  // Helper method to generate unique IDs
  private generateToastId(): string {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  // Optional: Remove toast by ID
  removeToastById(id: string): void {
    const currentToasts = this.toastsSubject.value;
    const updatedToasts = currentToasts.filter((t) => t.id !== id);
    this.toastsSubject.next(updatedToasts);
  }

  // Optional: Clear all toasts
  clearAllToasts(): void {
    this.toastsSubject.next([]);
  }
}