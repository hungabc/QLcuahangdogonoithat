import { Component, OnInit,Renderer2,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  constructor(private renderer: Renderer2) { }
  ngOnInit(): void {
  }
  ngAfterViewInit() { 
    this.loadScripts();
  }
  public loadScripts() {
    this.renderExternalScript('assets/js/layout.js').onload = () => {
    }
    this.renderExternalScript('assets/js/shoppingCart.js').onload = () => {
    }
    this.renderExternalScript('assets/js/jquery.actual.js').onload = () => {
    }
    this.renderExternalScript('assets/js/login.js').onload = () => {
    }
     this.renderExternalScript('assets/js/checkout.js').onload = () => {
    }
    this.renderExternalScript('assets/js/contact-us.js').onload = () => {
    }
     this.renderExternalScript('assets/js/theme-script.js').onload = () => {
    }
    this.renderExternalScript('assets/js/option4.js').onload = () => {
    }
  }
  public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}
