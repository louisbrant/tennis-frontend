import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProfileService } from "src/app/pages/profile/services/profile.service";
import { SinglesInterface } from "../../interfaces/profile-singles-finals";

import { FilterInterface } from "src/app/shared/interfaces/filter";
import { FormControl, FormGroup } from "@angular/forms";
import { TabActiveInterface } from "src/app/shared/interfaces/tab-active";
@Component({
  selector: 'app-profile-single-titles-finals',
  templateUrl: './profile-single-titles-finals.component.html',
  styleUrls: ['./profile-single-titles-finals.component.scss']
})
export class ProfileSingleTitlesFinalsComponent implements OnInit {
  public sizeOfArrowTabActivewidth = '10em';
  public sizeOfArrowTabActivebag = 'green';
  public sizeOfArrowTabGroupwidth = '8em';
  public sizeOfArrowTabGroupbag = 'fst';

  activeGroups: TabActiveInterface[] = [
    { name: 'Titles', active: 'title', isActive: true },
    { name: 'Final', active: 'final', isActive: true },
  ]

  showtitle: string = 'true';
  titles: SinglesInterface[] = []
  finals: SinglesInterface[] = []

  @Input() years: string[] = []
  @Input() type: string | undefined;

  profileName = ''
  public yearFilters: FilterInterface[] = []
  public formGroupFilters: FormGroup = new FormGroup({});
  constructor(
    private activatedRoute: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.profileName = params['name']
      this.finals = [];
      this.titles = [];
      this.yearFilters = this.years.map((year, i) => {
        return {
          name: this.years[i - 1] == undefined ? "" : this.years[i - 1] + "/" + year,
          value: year
        }
      })
      this.formGroupFilters = new FormGroup({
        year: new FormControl(this.yearFilters[1].value),
      })
      this.getSinglesFinals(this.profileName, this.years[0])
    })
    this.ngOnChanges()
  }
  ngOnChanges() {
    this.getFilters(this.profileName);
  }
  private getFilters(profileName: string) {
    this.getSinglesFinals(profileName, this.formGroupFilters.value.year)
  }
  changeYear(year: string) {
    this.getSinglesFinals(this.profileName, year)
  }

  private getSinglesFinals(name: string, year: string) {
    this.profileService.getSinglesFinals(name, year).subscribe(finals => {
      this.finals = finals.finals;
      this.titles = finals.titles;
    })
  }

  public changeActiveGroup(active: TabActiveInterface) {
    if (active.active == 'title') {
      this.showtitle = 'true';
    }
    else {
      this.showtitle = 'false';
    }
  }

  navigateToTournament(name: string, year: string) {
    this.router.navigate(['tennis', 'tournaments', `${this.type}`, name, new Date(year).getFullYear()])
  }
  getFormControl(control: string): FormControl {
    return this.formGroupFilters?.controls[control] as FormControl;
  }
}
