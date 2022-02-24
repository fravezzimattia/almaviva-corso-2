import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/validators/forbidden-name.validator';
import { formCrossValidator } from 'src/app/shared/validators/form-cross.validator';
import { HeroDto } from './models/hero-dto.model';
import { HeroService } from './services/hero.service';
import { HeroStore } from './services/hero.store';

export interface MyFormGroup extends FormGroup {

}
@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {
  // public heroList: HeroDto[] = [];
  public heroName = '';
  public hero!: HeroDto;
  public myForm!: MyFormGroup;

  constructor(
    public heroService: HeroService,
    public heroStore: HeroStore,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // Chiamata Servizi Step 1
    // this.heroService.get()
    //   .subscribe(res => this.heroList = res);

    // Chiamata Servizio per scaricare i dati
    this.heroService.get();

    this.myForm = this.createForm();
  }

  private createForm(): any {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/Prova/i)]],
      ability: ['', Validators.required],
    },{ 
      validators: formCrossValidator
    })
  }

  public saveHero() {
    // this.heroList.push(this.heroName);

    // this.heroList = [...this.heroList, this.heroName];
    this.heroName = '';
  }


  public tdfAdd(form: any) {
    console.log(form);
  }

  public reactiveAdd() {
    console.log(this.myForm);
  }
}
