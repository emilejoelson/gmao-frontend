import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { IconComponent, TIconName } from '../icon/icon.component';
import { ToastService } from '../../../core/services/toast.service';

// Define the Toast interface to match your service
interface Toast {
  type: string;
  text: string;
  icon: TIconName;
  id?: string;
}

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent implements OnInit, OnDestroy {
  toasts: Toast[] = [];
  private toastService = inject(ToastService);
  private subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = this.toastService.toasts$.subscribe((toasts: Toast[]) => {
      this.toasts = toasts;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  closeToast(toast: Toast): void {
    this.toastService.removeToast(toast);
  }

  getIconName(icon: string): TIconName {
    const validIcons: TIconName[] = [
      'successIcon',
      'errorIcon',
      'infoIcon',
      'warningIcon',
    ];
    return validIcons.includes(icon as TIconName)
      ? (icon as TIconName)
      : 'infoIcon';
  }

  // Optional: Track by function for better performance with *ngFor
  trackByToast(index: number, toast: Toast): string | number {
    return toast.id || index;
  }
}