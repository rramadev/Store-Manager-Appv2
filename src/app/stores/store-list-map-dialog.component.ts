import { Component, OnInit  } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
	moduleId: module.id,
  templateUrl: './store-list-map-dialog.component.html',
})
export class StoreListMapDialogComponent {
	address: string;
	name: string;

  constructor(public dialogRef: MdDialogRef<StoreListMapDialogComponent>) { }

	onMarker(evt: any) {
    const marker = evt.target;
    marker.ng2MapComponent.openInfoWindow('iw', marker, {name: this.name});
  }
}
