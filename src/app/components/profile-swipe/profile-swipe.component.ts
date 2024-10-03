import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-swipe',
  templateUrl: './profile-swipe.component.html',
  styleUrls: ['./profile-swipe.component.scss'],
})
export class ProfileSwipeComponent implements OnInit {
  profiles: any[] = [];
  currentIndex = 0;

  constructor(private toastController: ToastController, private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.loadProfiles();
  }

  loadProfiles() {
    this.profileService.getProfiles().subscribe((data: any) => {
      this.profiles = data;
    });
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
  }

  onSwipeLeft() {
    this.showToast('Not Interested');
    this.nextProfile();
  }

  onSwipeRight(id: string) {
    this.showToast('Interested');
    this.viewProfile(id);

  }

  onShortlist() {
    this.showToast('Shortlisted');
    this.nextProfile();
  }

  nextProfile() {
    if (this.currentIndex < this.profiles.length - 1) {
      this.currentIndex++;
    } else {
      this.showToast('No more profiles');
    }

  }

  viewProfile(id: string) {
    this.router.navigate(['/profile/', id])
  }
}