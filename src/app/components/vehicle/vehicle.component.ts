import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormBuilder, FormGroup, Validators, FormControl, Validator, ValidationErrors } from '@angular/forms';
import { takeWhile, delay } from 'rxjs/operators';

import { IObject } from '../../models';
import { IVehicle } from './models';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => VehicleComponent),
  //     multi: true
  //   }
  // ]
})
export class VehicleComponent implements OnInit, OnDestroy {

  @Input() carMake: IObject[];
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();

  isAlive = true;
  vehicleForm: FormGroup = this.fb.group({
    make: [''],
    regoDate: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  

  // writeValue(value: IVehicle) {
  //   console.log(value)
  //   value && this.vehicleForm.setValue(value, { emitEvent: false });
  // }

  // registerOnChange(fn) {
  //   this.vehicleForm.valueChanges.pipe(delay(0), takeWhile(() => this.isAlive)).subscribe(fn);
  // }

  // public onTouched: () => void = () => {};

  // registerOnTouched(fn: any) {
  //   this.onTouched = fn;
  // }

  ngOnDestroy() {
    this.isAlive = false;
  }

}