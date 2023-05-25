import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { User } from '@models/user.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  user: User | null = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe();
  }
}
