import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { PromotionComponent } from './promotion/promotion.component';
import { BuyoptionsComponent } from './buyoptions/buyoptions.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { PolicyComponent } from './policy/policy.component';
import { ContactComponent } from './contact/contact.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { TestComponent } from './test/test.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    CartComponent,
    AccountComponent,
    PromotionComponent,
    BuyoptionsComponent,
    ProductlistComponent,
    PolicyComponent,
    ContactComponent,
    SitemapComponent,
    TestComponent,
    TopBarComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
