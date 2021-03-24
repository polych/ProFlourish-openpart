import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { SelectComponent } from './select/select.component';
import { StopPropagation } from '../_directives/stop-propagation.directive';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SelectComponent,
    StopPropagation
  ],

  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SelectComponent,
    StopPropagation

  ],
})
export class SharedModule { }
