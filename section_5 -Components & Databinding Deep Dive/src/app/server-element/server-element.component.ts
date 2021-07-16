import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
  console.log(changes);
  }

  ngDoCheck(){
    console.log("ngDoChack called!")
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentCheched called!')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewinit called!')
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!')
  }

  
}
