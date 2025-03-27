import { Component , OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl'
import { ConsumerService } from './consumer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'map-test';
  spot: mapboxgl.Marker | undefined
  tag: mapboxgl.Popup | undefined
  name: string | undefined
  long: number = 0
  lat: number = 0
  dipMap: boolean = false

  accessToken: string = "pk.eyJ1IjoibWluaWF0b3Vya2lsbGVyIiwiYSI6ImNsc2xrNWNtMDBlYjYyaW5vYXJ5ZG5qcXAifQ.TwOOZQt9rIU22yidSnJxUA"
  map: mapboxgl.Map | undefined
  ngOnInit(): void {
  }

  constructor(private consumer: ConsumerService) { }

  // newLocation(){
  //   this.removeMark();
  //   this.setPopUp(this.name!)
  //   this.addMarker(this.long, this.lat);
  // }


  // createMap(long: number, lat: number){
  //   this.map = new mapboxgl.Map({
  //     accessToken:this.accessToken,
  //     container: 'map',
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [long, lat],
  //     zoom: 16
  //   });
  // }


  // addMarker(long: number, lat: number){
  //    this.spot = new mapboxgl.Marker()
  // .setLngLat([long, lat])
  // .addTo(this.map!)
  // .setPopup(this.tag)
  // }


  // setPopUp(driverName: string){
  //   this.tag =new mapboxgl.Popup({})
  //   .setText(driverName)
  //   .addTo(this.map!)

  // }

  // removeMark(){
  //   this.spot?.remove()
  // }


  notLoggedIn: boolean = true;
}
