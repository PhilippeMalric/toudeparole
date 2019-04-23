import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import {environment} from '../../../environments/environment';

import { LoginFormComponent } from '../../auth/login-form/login-form.component';
import { SignupFormComponent } from '../../auth/signup-form/signup-form.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ], 
  declarations: [
    LoginFormComponent,
    SignupFormComponent
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }]
})

export class FirebaseModule {
}
