import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'akshay-wadatkar-portfolio';
  varible:any

  byteArrayString: string = ''; // Input byte array string
  selectedExtension: string = '.jpg'; // Default selected extension

  constructor() { }

  download() {
    this.varible = 'file' + this.selectedExtension;
    const base64String: string = this.byteArrayString
    const binaryData = atob(base64String);
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }
    const extension = this.selectedExtension;
    const blob = new Blob([uint8Array], { type: `application/${extension}` });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${this.varible}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}