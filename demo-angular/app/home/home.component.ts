import { Component, OnInit } from "@angular/core";

declare var com;

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        console.dir(com.alibaba.sdk.android.oss);
    }
}
