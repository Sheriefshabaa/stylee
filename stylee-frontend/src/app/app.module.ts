import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SliderComponent} from './slider/slider.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {AboutComponent} from './about/about.component';
import {CartComponent} from './cart/cart.component';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {OrderComponent} from './order/order.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-list/product-details/product-details.component';
import { ShippingReturnsComponent } from './shipping-returns/shipping-returns.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    DashboardComponent,
    AboutComponent,
    CartComponent,
    HomeComponent,
    NotfoundComponent,
    SidebarComponent,
    PrivacyPolicyComponent,
    OrderComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ShippingReturnsComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
