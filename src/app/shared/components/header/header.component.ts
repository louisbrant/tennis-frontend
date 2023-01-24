import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { SelectActiveInterface } from 'src/app/shared/interfaces/select';
import { ProfileService } from "src/app/pages/profile/services/profile.service";
import { ElasticSearchService } from "../../../pages/elastic-search/elastic-search.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isShowMenu: boolean = true;
  public testNavigation: SelectActiveInterface[] = [
    { name: 'Football', value: 'football' },
    { name: 'Tennis', value: 'tennis' },
  ];
  public elasticSearch: any[] = [];
  protected unSubscribe: Subject<void> = new Subject<void>();

  constructor(private router: Router, private profileService: ProfileService,
    private elasticSearchService: ElasticSearchService) { }

  @ViewChild('searchInput', { read: ElementRef }) searchInput!: ElementRef;

  ngOnInit(): void {
    if (document.location.href.indexOf("tennis") != -1) {
      this.testNavigation = [
        { name: 'Tennis', value: 'tennis' },
        { name: 'Football', value: 'football' },
      ];
    }
    else if (document.location.href.indexOf("soccer") != -1) {
      this.testNavigation = [
        { name: 'Football', value: 'soccer' },
        { name: 'Tennis', value: 'football' },
      ];
    }
    else {
      this.testNavigation = [
        { name: 'Tennis', value: 'tennis' },
        { name: 'Football', value: 'football' },
      ];
    }
  }

  searchProfilesHeader(str: string) {
    this.elasticSearchService.getElasticSearch(str)
      .pipe(takeUntil(this.unSubscribe))
      .subscribe(res => {
        this.elasticSearch = res
      })
  }

  focusToSearch() {
    this.searchInput.nativeElement.children[0].children[0].children[0].focus()
  }

  showMenu() {
    this.isShowMenu = !this.isShowMenu
  }

  counter = 0
  tourNames = [
    'Noventi Open - Halle',
    'Dubai Duty Free Tennis Championships - Dubai',
    'Rio De Janeiro Challenger',
    'San Diego Open - San Diego',
    'Cordoba Open - Cordoba'
  ]
  nextTournamentNav() {
    this.router.navigate(['tennis', 'tournaments', 'm', this.tourNames[this.counter++], '2021']);
    if (this.counter >= this.tourNames.length) {
      this.counter = 0
    }
  }

  navigation(event: SelectActiveInterface) {
    if (event.value == 'football')
      window.location.href = "http://localhost:80/matches"
    else
      window.location.href = `/${event.name}`
    // this.router.navigate([event.name])
  }

  clearSearchResult(e: Event) {
    this.elasticSearch = [];
  }

  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
