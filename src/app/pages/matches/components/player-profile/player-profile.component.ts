import { Component, Input, OnInit } from '@angular/core';
import { PastChampionInterface } from "src/app/shared/interfaces/past-champions";
import { TabActiveInterface } from "src/app/shared/interfaces/tab-active";
import { ProfileStatisticInterface } from 'src/app/pages/profile/interfaces/profile';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss']
})
export class PlayerProfileComponent implements OnInit {


  @Input() playerOne: any;
  @Input() playerTwo: any;
  @Input() surfaceData: any;
  public _statistics1: ProfileStatisticInterface | undefined;
  public _statistics2: ProfileStatisticInterface | undefined;

  @Input() set statistics1(v: ProfileStatisticInterface | undefined) {
    if (v) {
      this._statistics1 = v;
    }
  }
  get statistics1(): ProfileStatisticInterface | undefined {
    return this._statistics1;
  }

  @Input() set statistics2(v: ProfileStatisticInterface | undefined) {
    if (v) {
      this._statistics2 = v;
    }
  }
  get statistics2(): ProfileStatisticInterface | undefined {
    return this._statistics2;
  }

  public h2hshow: string = '';
  activeGroups: TabActiveInterface[] = [
    { name: 'H2H Matches', active: 'h2h', isActive: true },
    { name: 'Profiles', active: 'profile', isActive: true },
  ]

  public sizeOfArrowTabGroupwidth = '10em';
  public sizeOfArrowTabGroupbag = 'fst';


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

  ngOnInit(): void {
    console.log(this.playerOne);
  }

  viewMore() {
    this.maxShow += 5;
  }


  public changeActiveGroup(active: TabActiveInterface) {
    this.h2hshow = this.h2hshow == "" ? "show " : "";
  }



  changeActive(active: TabActiveInterface) {
    if (active.active == 'singles') this.selectedChampions = this.singlesChampions;
    if (active.active == 'doubles') this.selectedChampions = this.doublesChampions;
  }
}
