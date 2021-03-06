import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', attribute
  //selector: '.app-servers', class
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "Face";
  serverCreated = false;
  servers = ["TestServer", "TestServer2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Server name is " + this.serverName;
  }

  onUpdateServerName(event: any){
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
