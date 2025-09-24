import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;
  @Input() ariaLabel?: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() onClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    return `btn btn-${this.variant} btn-${this.size} ${this.disabled ? 'disabled' : ''}`;
  }
}