import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  leftSideData: any = []
  rightSideData: any = []

  constructor() {
    let loopNo = 0;
    for (let i = 0; i < this.data.length; i++) {

      this.data[i].bgColor = this.colorCode[loopNo];

      if (loopNo > 3)
        loopNo = 0;
      else
        loopNo++;

      let divider:Number = 0;

      if (i == 0) {
        this.leftSideData.push(this.data[i]);
      } else if (i == 1) {
        this.rightSideData.push(this.data[i]);
      } else if (i % 2 == 0) {
        this.leftSideData.push(this.data[i]);
      } else {
        this.rightSideData.push(this.data[i]);
      }

    }

  }

  title = 'FlowChart';

  appName: string = 'RIm';

  colorCode: any = ['bg-danger', 'bg-primary', 'bg-warning', 'bg-info']

  data: any = [{
    name: 'EID',
    inbound: false,
    note: 'People Info',
    note2: '',
    bgColor: ''
  },
  {
    name: 'EMU',
    inbound: false,
    note: '',
    note2: 'Division and Buisiness Group Info',
    bgColor: ''
  },
  {
    name: 'SAP',
    inbound: false,
    note: 'IA Details',
    note2: 'Customer and Vendor Details',
    bgColor: ''
  },
  {
    name: 'SAP',
    inbound: true,
    note: 'IA Details',
    note2: '',
    bgColor: ''
  },
  {
    name: 'BOXI',
    inbound: false,
    note: 'IA Details',
    note2: '',
    bgColor: ''
  },
  {
    name: 'Blue Umbrella',
    inbound: true,
    note: '',
    note2: 'Risk Reports',
    bgColor: ''
  },
  {
    name: 'Steele',
    inbound: true,
    note: 'Risk Reports',
    note2: 'Customer and Vendor Details',
    bgColor: ''
  },
  {
    name: 'Blue Umbrella',
    inbound: false,
    note: 'Third Party Profiles',
    note2: '',
    bgColor: ''
  }
  ]

}
