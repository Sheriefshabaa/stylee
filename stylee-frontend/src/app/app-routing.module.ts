import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {SignupComponent} from './signup/signup.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {CartComponent} from './cart/cart.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {OrderComponent} from './order/order.component';
import {ShippingReturnsComponent} from './shipping-returns/shipping-returns.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "order", component: OrderComponent},
  {path: "about", component: AboutComponent},
  {path: "signup", component: SignupComponent},
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "cart", component: CartComponent},
  {path: "privacyPolicy", component: PrivacyPolicyComponent},
  {path: "about", component: AboutComponent},
  {path: "shipping-returns", component: ShippingReturnsComponent},
  {path: "**", component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
