import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players: Object;

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(data => {
      this.players = data
      console.log(this.players);
    }
  );
  }

}
