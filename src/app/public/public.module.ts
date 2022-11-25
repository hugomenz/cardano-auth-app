import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HeaderPublicComponent } from './components/header-public/header-public.component';
import { WalletListComponent } from './components/wallet-list/wallet-list.component';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [HeaderPublicComponent, WalletListComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    AngularMaterialModule,
  ],
  exports: [HeaderPublicComponent],
})
export class PublicModule {}
