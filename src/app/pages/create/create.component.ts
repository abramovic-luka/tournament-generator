import { Component } from '@angular/core';

declare const insertTeams: any;
declare const resultQ1: any;
declare const resultQ2: any;
declare const resultQ3: any;
declare const resultQ4: any;
declare const resultS1: any;
declare const resultS2: any;
declare const thirdPlace: any;
declare const final: any;


@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  title = 'Tournament Generator Bracket';

  insertTeams(){
    insertTeams();
  }
  resultQ1(){
    resultQ1();
  }
  resultQ2(){
    resultQ2();
  }
  resultQ3(){
    resultQ3();
  }
  resultQ4(){
    resultQ4();
  }
  resultS1(){
    resultS1();
  }
  resultS2(){
    resultS2();
  }
  thirdPlace(){
    thirdPlace();
  }
  final(){
    final();
  }
}
