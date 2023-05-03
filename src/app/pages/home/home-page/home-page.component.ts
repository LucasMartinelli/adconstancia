import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElement: any;
  map?: google.maps.Map;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const myLatLng = { lat: -23.670011, lng: -46.6694602 };
    const mapProperties = {
      center: { lat: -23.6694, lng: -46.6694602 },
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    const map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );

    const image = '../../../../assets/imgs/marker.svg';

    const marker = new google.maps.Marker({
      position: myLatLng,
      map,
      icon: image,
    });

    this.map = map;
  }
}
