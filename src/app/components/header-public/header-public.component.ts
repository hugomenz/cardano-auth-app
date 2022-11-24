import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatDialog } from '@angular/material/dialog';
import { WalletListComponent } from '../wallet-list/wallet-list.component';

@Component({
  selector: 'app-header-public',
  templateUrl: './header-public.component.html',
  styleUrls: ['./header-public.component.scss'],
})
export class HeaderPublicComponent {
  @Input() isDarkMode = false;

  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();

  onDarkModeSwitched({ checked }: MatSlideToggleChange) {
    this.darkModeSwitched.emit(checked);
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(WalletListComponent);
  }
}
