import {Page, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {

    nav : NavController;

    constructor(nav: NavController){
        this.nav = nav;
    }
    
    /*goToPage(page){
        this.nav.setRoot(page, null, { animate: false });
    }*/
  
}
