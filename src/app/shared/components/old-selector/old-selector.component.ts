import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FilterInterface } from "src/app/shared/interfaces/filter";
import { SelectActiveInterface } from "../../interfaces/select";

@Component({
  selector: 'app-old-selector',
  templateUrl: './old-selector.component.html',
  styleUrls: ['./old-selector.component.scss']
})
export class OldSelectorComponent implements OnInit {
  control: FormControl = new FormControl('');
  selectval: SelectActiveInterface = { name: "", value: "" };
  private _options: FilterInterface[] = []
  @Input() set options(value: FilterInterface[]) {
    this._options = value
    this.control.setValue(value[0].value)
  }
  get options(): FilterInterface[] {
    return this._options
  }

  @Output() formControl: EventEmitter<FormControl> = new EventEmitter<FormControl>()
  @Output() activeChanged: EventEmitter<SelectActiveInterface> = new EventEmitter<SelectActiveInterface>()

  constructor() { }

  ngOnInit(): void {
    this.formControl.emit(this.control)
  }

  onChange(selectValue: string) {
    this.selectval.name = selectValue;
    this.selectval.value = selectValue;
    this.activeChanged.emit(this.selectval)
  }

}
