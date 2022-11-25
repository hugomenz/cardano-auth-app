import { Component, OnInit } from '@angular/core';
import { walletImgCollection } from 'src/app/core/data';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.scss'],
})
export class WalletListComponent implements OnInit {
  walletImgCollection = walletImgCollection;
  supportedWalletList = Object.keys(walletImgCollection);
  detectedWalletList: string[] = [];
  isEnabled!: boolean;

  ngOnInit(): void {}

  constructor(private window: Window, public dialog: MatDialog) {
    this.getWalletList();
  }

  getWalletList() {
    this.detectedWalletList = [] as string[];

    Object.keys(this.window.cardano).map((el) => {
      if (this.supportedWalletList.includes(el.toLowerCase())) {
        this.detectedWalletList.push(el);
        this.walletImgCollection[el].installed = true;
      }
    });
  }

  onEnable(wallet: string) {
    this.window.cardano[wallet].enable().then((a: boolean) => {
      this.isEnabled = a;
      setTimeout(() => this.dialog.closeAll(), 250);
    });
  }

  // wallet names are lowercase.
  capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
