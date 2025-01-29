import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
  ) {}
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.router.navigate(['/personajes']);
      },
    error: (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: '¡Login Incorrecto! Vuelve a intentarlo' });
    }
  })
}

campoValido(campo:string){
  return this.loginForm.controls[campo].errors && this.loginForm.controls[campo].touched;
}
}
