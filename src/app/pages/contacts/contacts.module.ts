import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ContactsPage } from "./contacts.page";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpLoaderFactory } from "src/app/lib/interfaces";
import { HttpClient } from "@angular/common/http";
import { ComponentsModule } from "src/app/components/components.module";

const routes: Routes = [
  {
    path: "",
    component: ContactsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    RouterModule.forChild(routes),
  ],
  declarations: [ContactsPage],
})
export class ContactsPageModule {}
