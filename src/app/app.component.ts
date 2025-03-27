import { Component , OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl'
import { ConsumerService } from './consumer.service';
import { SessionServiceService } from './session-service.service';

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

  constructor(private sessionService: SessionServiceService) {
    // (mapboxgl as any).accessToken = this.accessToken;
  }

  loggedIn: boolean = this.sessionService.isLoggedIn();
}
