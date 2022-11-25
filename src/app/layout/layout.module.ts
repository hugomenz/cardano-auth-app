import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { PrivateModule } from '../private/private.module';
import { PublicModule } from '../public/public.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, PrivateModule, PublicModule, SharedModule],
  exports: [HeaderComponent],
})
export class LayoutModule {}
