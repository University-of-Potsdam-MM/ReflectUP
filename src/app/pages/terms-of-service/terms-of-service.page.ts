import { Component } from "@angular/core";
import { AbstractPage } from "../abstract-page";

@Component({
  selector: "app-terms-of-service",
  templateUrl: "./terms-of-service.page.html",
  styleUrls: ["./terms-of-service.page.scss"],
})
export class TermsOfServicePage extends AbstractPage {
  constructor() {
    super();
  }
}
