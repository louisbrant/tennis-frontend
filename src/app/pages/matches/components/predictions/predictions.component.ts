import { Component, Input, OnInit } from '@angular/core';
import { PastChampionInterface } from "src/app/shared/interfaces/past-champions";
import { TabActiveInterface } from "src/app/shared/interfaces/tab-active";
import { TableHeaderInterface } from "src/app/shared/interfaces/table";

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss']
})
export class PredictionsComponent implements OnInit {


  playerStats = [
    { stat: 'Federer To Win', value: '60%' },
    { stat: 'Nadal To Win', value: '40%' },
    { stat: 'Total Games', value: '20' },
    { stat: 'Total Points', value: '173' },
    { stat: 'Federer To Win 1st Set', value: '58%' },
    { stat: 'Nadal To Win 1st Set', value: '42%' },
    { stat: '2-0 Federer', value: '53%' },
    { stat: '2-0 Nadal', value: '38%' },
    { stat: '2-1 Federer', value: '55%' },
    { stat: '2-1 Nadal', value: '33%' },
  ];
  headers: TableHeaderInterface[] = [
    { name: 'stat' },
    { name: 'value' }
  ];

  @Input() set champions(v: PastChampionInterface[]) {
    this.selectedChampions = v
  };

  @Input() set singlesChampions(champions: PastChampionInterface[]) {
    this._singlesChampions = champions
    this.selectedChampions = this._singlesChampions
    this.actives[0].isActive = this._singlesChampions.length > 0
  };
  get singlesChampions(): PastChampionInterface[] {
    return this._singlesChampions
  }
  private _singlesChampions: PastChampionInterface[] = [];

  @Input() set doublesChampions(champions: PastChampionInterface[]) {
    this._doublesChampions = champions
    this.actives[1].isActive = this._doublesChampions.length > 0
  };
  get doublesChampions(): PastChampionInterface[] {
    return this._doublesChampions
  }
  private _doublesChampions: PastChampionInterface[] = [];

  public selectedChampions: PastChampionInterface[] = [];

  public maxShow: number = 5;

  public actives: TabActiveInterface[] = [
    { name: 'Singles', active: 'singles', isActive: true },
    { name: 'Doubles', active: 'doubles', isActive: true },
  ];

  constructor() { }

  ngOnInit(): void { }

  viewMore() {
    this.maxShow += 5;
  }

  changeActive(active: TabActiveInterface) {
    if (active.active == 'singles') this.selectedChampions = this.singlesChampions;
    if (active.active == 'doubles') this.selectedChampions = this.doublesChampions;
  }
}
