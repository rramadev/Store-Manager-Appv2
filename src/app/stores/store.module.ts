import { NgModule } from '@angular/core';
import { NguiMapModule } from '@ngui/map';

import { AppRoutingModule } from '../routes/app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { StoreListComponent } from './store-list.component';
import { StoreListMapDialogComponent } from './store-list-map-dialog.component';
import { StoreFilterPipe } from './store-filter.pipe';
import { StoreFieldFilterPipe } from './store-field-filter.pipe';
import { StoreOrderByFilterPipe } from './store-orderBy-filter.pipe';
import { StoreService } from './store.service';

@NgModule({
  declarations: [
    StoreListComponent,
    StoreListMapDialogComponent,
    StoreFilterPipe,
    StoreFieldFilterPipe,
    StoreOrderByFilterPipe
  ],
  imports: [
    SharedModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB53S10hi3txW2AQX1MqPS0yFsT5wTaWDk'})
  ],
  entryComponents: [
    StoreListMapDialogComponent
  ],
  providers: [
    StoreService
  ]
})
export class StoreModule {}
