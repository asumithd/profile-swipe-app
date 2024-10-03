import { ProfileService } from './../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent implements OnInit {
  profile: any;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.profileService.getProfiles().subscribe((data: any) => {
      this.profile = data[id];
    });
  }
}