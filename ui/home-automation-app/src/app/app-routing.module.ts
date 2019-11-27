import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Featured Components
import { DashboardComponent } from './featured-component/dashboard/dashboard.component';
import { AddDeviceComponent } from './featured-component/add-device/add-device.component';
import { AboutComponent } from './featured-component/about/about.component';
import { DevicesComponent } from './featured-component/devices/devices.component';
import { DeviceComponent } from './featured-component/devices/device/device.component'
import { UpdateComponent } from './featured-component/update/update.component';
import { ProfileComponent } from './featured-component/profile/profile.component';
import { GroupComponent } from './featured-component/group/group.component';
import { FaqComponent } from './featured-component/faq/faq.component';
import { FeedbackComponent } from './featured-component/feedback/feedback.component';
import { SettingComponent } from './featured-component/setting/setting.component';
import { NotificationComponent } from './featured-component/notification/notification.component';

// Auth Components
import { LoginComponent } from './auth-components/login/login.component';
import { SignupComponent } from './auth-components/signup/signup.component';
import { ForgotPasswordComponent } from './auth-components/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path:'' ,
    component: DashboardComponent
  }, 
  {
    path:'login' ,
    component: LoginComponent
  }, 
  {
    path:'signup' ,
    component: SignupComponent
  }, 
  {
    path:'forgot-password' ,
    component: ForgotPasswordComponent
  },
  {
    path:'add-device' ,
    component: AddDeviceComponent
  }, 
  {
    path:'about' ,
    component: AboutComponent
  }, 
  {
    path:'group' ,
    component: GroupComponent
  },
  {
    path:'devices' ,
    component: DevicesComponent
  },
  {
    path:'device/:id' ,
    component: DeviceComponent
  },
  {
    path:'firmware-update' ,
    component: UpdateComponent
  },
  {
    path:'account-and-security' ,
    component: ProfileComponent
  },
  {
    path:'faq' ,
    component: FaqComponent
  },
  {
    path:'feedback' ,
    component: FeedbackComponent
  },
  {
    path:'setting' ,
    component: SettingComponent
  },
  {
    path:'notification' ,
    component: NotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
