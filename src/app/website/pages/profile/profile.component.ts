import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../../services/auth.service';
import { User } from './../../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  // puede llegar hacer nulo
  user: User | null = null;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user$
    .subscribe(data => {
      this.user = data;
    })
  }

}
