import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionLogoInstagram } from '@ng-icons/ionicons';
import { ionLogoFacebook } from '@ng-icons/ionicons';
import { ionLogoTiktok } from '@ng-icons/ionicons';
import { ionLogoYoutube } from '@ng-icons/ionicons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  viewProviders: [provideIcons({ionLogoInstagram, ionLogoFacebook, ionLogoTiktok, ionLogoYoutube})],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    currentYear: number = 0

    navigationLink = [
      {
        label: 'About Us',
        href: '/about'
      },
      {
        label: 'How it works ',
        href: '/documentation'
      },
      {
        label: 'FAQ',
        href: '/faq'
      },
      {
        label: 'Contact us',
        href: '/contact'
      },   
    ]
    quickLink = [
      {
        label: 'Create an Account',
        href: '/register'
      },
      {
        label: 'Login',
        href: '/login'
      },
      {
        label: 'Wishlist',
        href: '/whishlist'
      },   
    ]
    legalLink = [
      {
        label: 'Privacy Policies',
        href: '/privacy-policy'
      },
      {
        label: 'Term of use',
        href: '/term-of-use'
      },
      {
        label: 'Cookies Policy',
        href: '/cookies-policy'
      },   
    ]
    constructor() {
      this.currentYear = new Date().getFullYear();
    }
}
