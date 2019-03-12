import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private teamService : TeamService) { }

  teams: Object;

  ngOnInit() {
    this.teamService.getTeams().subscribe(data => {this.teams = data});
    console.log(this.teams);
  }

}
