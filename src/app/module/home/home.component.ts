import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ArtistService } from 'src/app/core/service/artist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup; // name of the form used for searching
  model: any; // it is used for mapping data coming from endpoint
  isHidden = true; // a flag to hide elements
  noRecordFound = false; // a flag for displaying specific element in html when no record found

  // formBuilder is used for reactive forms. it includes formControl and formGroup
  // artistService is injected for calling api
  constructor(private fb: FormBuilder,
              private artistService: ArtistService) { }

  // It is invoked when directive is called. I have used it for initializing my form before page view
  ngOnInit() {
    // calling form
    this.createSearchForm();
  }

  // reactive form created
  createSearchForm() {
    this.searchForm = this.fb.group({
      keyword: [''] // form control (in html it is called using formControlName)
    });
  }

  // function is called when form is submitted. form passes values of controls to this function
  onSubmit(model) {
    // artist service is called for getting artist list. I have passed artist name to the service
    this.artistService.getArtistList(model.keyword).subscribe((result) => {
      // result is a bunch of data that I got on calling api
      if (result.name === undefined) { // result includes a property 'name' if it is undefined it means no record returned
        this.noRecordFound = true; // when no record found, norecordfound bit will be true to show 'No record found' message
      } else {
        this.model = result; // when api returns data it is mapped to model. Model is used in html to display values
        this.noRecordFound = false;
      }
      this.isHidden = false; // initially i want to hide display section so I have used this flag
    }, error => {
      console.log(error); // to console error if occurred
    });
  }

}
