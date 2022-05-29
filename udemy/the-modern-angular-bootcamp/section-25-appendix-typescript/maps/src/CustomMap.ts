export class CustomMap {
  public googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 11,
      center: { lat: 0, lng: 0 },
    });
  }
}
