import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  public user = new User();
  confirmPassword?: string;
  myForm!: FormGroup;
  err: any; //TODO check

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onRegister() {
    this.authService.registerUser(this.user).subscribe({
      next: (res) => {
        alert('veillez confirmer votre email');
        // this.router.navigate(["/verifEmail",this.user.email]);
      },
      error: (err: any) => {
        if ((err.status = 400)) {
          this.err = err.error.message;
        }
      },
    });
  }
}
