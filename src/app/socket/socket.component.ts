import { Component, OnInit } from '@angular/core';
import {ChatService} from './chat.service';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.scss']
})
export class SocketComponent implements OnInit {



  ngOnInit() {
  }


  
  user:String;
  room:String;
  messageText:String;
  messageArray:Array<{user:String,message:String}> = [];
  constructor(private _chatService:ChatService){
      this._chatService.newUserJoined()
      .subscribe(data=> this.messageArray.push(data));


      this._chatService.userLeftRoom()
      .subscribe(data=>this.messageArray.push(data));

      this._chatService.newMessageReceived()
      .subscribe(data=>this.messageArray.push(data));
  }

  join(){
    console.log(this.user);
      this._chatService.joinRoom({user:this.user, room:this.room});
  }

  leave(){

      this._chatService.leaveRoom({user:this.user, room:this.room});
  }

  sendMessage()
  {
      this._chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
  }

 

}
