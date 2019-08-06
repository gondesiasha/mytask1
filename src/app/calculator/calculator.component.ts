import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  i=0;
  case:any;

  // subText = '';
  // mainText = '';
  // operand1: number;
  // operand2: number;
  // operator = '';
  // calculationString = '';
  // answered = false;
  // operatorSet = false;
  ngOnInit() {

  }
  // pressKey(n) {
  //   document.case.display.value += n;
  //   console.log(document.case.display.value);
  //   console.log(typeof(parseInt(document.case.display.value)));
  //   console.log(document.case.display.value);
  // };

  // op(o){
  //   if(this.i==0)
  //   {
  //     document.case.display.value += o;
  //     this.i++;
  //   }
  //   else{
  //     var equals=eval(document.case.display.value)
  //     document.case.display.value=equals;
  //     document.case.display.value += o;


  //   }
   
  // };
 
  // allClear() {
  //   document.case.display.value = ""
  // };
  // getAnswer() {
  //   var equals = eval(document.case.display.value)
  //   console.log(equals);
  //    document.case.display.value = equals;

  // }





  // pressKey2() {
  //   document.case.display.value += "2"
  // };

  // pressKey3() {
  //   document.case.display.value += "3"
  // };

  // pressKey4() {
  //   document.case.display.value += "4"
  // };

  // pressKey5() {
  //   document.case.display.value += "5"
  // };

  // pressKey6() {
  //   document.case.display.value += "6"
  // };
  // pressKey7() {
  //   document.case.display.value += "7"
  // };
  // pressKey8() {
  //   document.case.display.value += "8"
  // };
  // pressKey9() {
  //   document.case.display.value += "9"
  // };
  // pressKey0() {
  //   document.case.display.value += "0"
  // };
   // add() {
  //   document.case.display.value += "+"
  // };
  // sub() {
  //   document.case.display.value += "-"
  // };
  // mul() {
  //   document.case.display.value += "*"
  // };
  // divide() {
  //   document.case.display.value += "/"
  // };
  





















  // pressKey(key: string) {
  //   if (key === '/' || key === 'x' || key === '-' || key === '+') {
  //     const lastKey = this.mainText[this.mainText.length - 1];
  //     console.log(lastKey);
  //     if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+')  {
  //       this.operatorSet = true;
  //     }
  //     if ((this.operatorSet) || (this.mainText === '')) {
  //       return;
  //     }
  //     this.operand1 = parseFloat(this.mainText);
  //     this.operator = key;
  //     this.operatorSet = true;
  //   }
  //   if (this.mainText.length === 10) {
  //     return;
  //   }
  //   this.mainText += key;
  // }

  // allClear() {
  //   this.mainText = '';
  //   this.subText = '';
  //   this.operatorSet = false;
  // }

  // getAnswer() {
  //   this.calculationString = this.mainText;
  //   this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
  //   if (this.operator === '/') {
  //     this.subText = this.mainText;
  //     this.mainText = (this.operand1 / this.operand2).toString();
  //     this.subText = this.calculationString;
  //     if (this.mainText.length > 9) {
  //       this.mainText = this.mainText.substr(0, 9);
  //     }
  //   } else if (this.operator === 'x') {
  //     this.subText = this.mainText;
  //     this.mainText = (this.operand1 * this.operand2).toString();
  //     this.subText = this.calculationString;
  //     if (this.mainText.length > 9) {
  //       this.mainText = 'ERROR';
  //       this.subText = 'Range Exceeded';
  //     }
  //   } else if (this.operator === '-') {
  //     this.subText = this.mainText;
  //     this.mainText = (this.operand1 - this.operand2).toString();
  //     this.subText = this.calculationString;
  //   } else if (this.operator === '+') {
  //     this.subText = this.mainText;
  //     this.mainText = (this.operand1 + this.operand2).toString();
  //     this.subText = this.calculationString;
  //     if (this.mainText.length > 9) {
  //       this.mainText = 'ERROR';
  //       this.subText = 'Range Exceeded';
  //     }
  //   } else {
  //     this.subText = 'ERROR: Invalid Operation';
  //   }
  //   this.answered = true;
  // }
}
