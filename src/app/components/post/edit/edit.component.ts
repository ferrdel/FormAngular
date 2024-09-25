import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NservService } from '../../../services/nserv.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [NservService],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  
    postForm!: FormGroup;
    id!: number;
  
    constructor(private fb: FormBuilder, private nservService: NservService, private route: ActivatedRoute) {
      this.postForm = this.fb.group({
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required])
      });
    }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.nservService.getById(this.id).subscribe((data: any) => {
        this.postForm.setValue({
          title: data.title,
          description: data.description,
          price: data.price
        });
      });
    }

    onSubmit() {
      if(this.postForm.valid) {
        console.log('Formulario enviado: ', this.postForm.value);
      }
    }
}