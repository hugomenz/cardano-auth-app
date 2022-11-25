import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderPrivateComponent } from './components/header-private/header-private.component';
import { AngularMaterialModule } from '../angular-material.module';
import { HeaderPublicComponent } from '../public/components/header-public/header-public.component';

@NgModule({
  declarations: [HeaderPrivateComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    AngularMaterialModule,
  ],
  exports: [HeaderPrivateComponent],
})
export class PrivateModule {}
