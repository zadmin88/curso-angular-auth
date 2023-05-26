import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoardFormComponent } from './components/board-form/board-form.component';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, BoardFormComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    OverlayModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class LayoutModule {}
