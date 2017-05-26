import { Component } from '@angular/core';
/*To use service it has to be imported */
import { MyDataService } from './my-data.service';
/*To use Animations it has to be imported */
import {
  trigger,
  state,
  style,
  animate,
  transition,keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*For Animations*/ 
  animations:[
    trigger('myAwesomeAnimation',[
      /*Start small*/
      state('small',style({transform:'scale(1)'})),
      /*go large*/
      state('large',style({transform:'scale(1.2)'})),
      transition('small<=>large',animate('1000ms ease-in'
      // ,style({transform:'translateY(40px)'})
      ,keyframes(
        [
          //opacity 0 hidden 1 full
          //offset: 0 start 0.5 half way of animation time here its 500ms this style will occur
          //traslateY verticle -ve means its coming from top
          style({opacity:0,transform:'translateY(-75%)',offset:0}),
          style({opacity:1,transform:'translateY(35px)',offset:0.5}),
          style({opacity:0,transform:'translateY(-75%)',offset:1})
        ]
      )
      )),
    ])
  ]
})
export class AppComponent {
  myObject =
  {
    gender: 'male',
    age: 33,
    location: 'Canada'
  }
  myArr = ['him','hers','yours']
  myArr1 = false
  myArr2 = false
  angularLogo = "https://angular.io/resources/images/logos/angular/angular.png"
  buttonStatus= false
  myEvent(event)
  {
    console.log(event);
  }
  titleClass = true
  titleClasses = 
  {
    'red-title': true,
    'large-title': true
  }
  titleGreen = true


 state: string = 'small'
  animateMe()
  {
    this.state = (this.state == 'small' ? 'large' :'small')
  }


  /*Call to service is done through the constructor */
  constructor(private dataService:MyDataService)
  {

  }
 /*Define a variable as string */
  someProperty:string = '';

  /*Call to service need oninit */
  ngOnInit()
  {
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();
  }

 
}
