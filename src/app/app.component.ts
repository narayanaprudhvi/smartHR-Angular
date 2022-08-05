import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router'

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public url;
  public url2;
  loginPage:Boolean = false;
  registerPage:Boolean = false;
  forgotPage:Boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.url = event.url.split('/')[1];
        this.url2 = event.url.split('/')[2];
        //console.log(this.url);

      }
    });
  }

  ngOnInit() {

    if ($('.main-wrapper').length > 0) {
      var $wrapper = $(".main-wrapper");
      $(document).on('click', '#mobile_btn', function (e) {
        $(".dropdown.open > .dropdown-toggle").dropdown("toggle");
        return false;
      });
      $(document).on('click', '#mobile_btn', function (e) {
        $wrapper.toggleClass('slide-nav-toggle');
        $('#chat_sidebar').removeClass('opened');
        return false;
      });
      $(document).on('click', '#open_msg_box', function (e) {
        $wrapper.toggleClass('open-msg-box').removeClass('');
        $('.dropdown').removeClass('open');
        return false;
      });
    }

    var $this = this;
    $(document).on('click',"#sidebar-menu a", function (e) {
      //console.log('remains')
      if ($(this).parent().hasClass("submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("subdrop")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("subdrop");
        $(this).next("ul").slideDown(350);
        $(this).addClass("subdrop");
        $(".active").parent().parent().css('display','block');
      } else if ($(this).hasClass("subdrop")) {
        $(this).removeClass("subdrop");
        $(this).next("ul").slideUp(350);
      }
    });

    var $sidebarOverlay = $(".sidebar-overlay");
    $(document).on("click","#mobile_btn, .task-chat", function(e) {
      var $target = $($(this).attr("href"));
      if ($target.length) {
        $target.toggleClass("opened");
        $sidebarOverlay.toggleClass("opened");
        $("html").toggleClass("menu-opened");
        $sidebarOverlay.attr("data-reff", $(this).attr("href"));
      }
      e.preventDefault();
    });

    $sidebarOverlay.on("click", function(e) {
      var $target = $($(this).attr("data-reff"));
      if ($target.length) {
        $target.removeClass("opened");
        $("html").removeClass("menu-opened");
        $(this).removeClass("opened");
        $(".main-wrapper").removeClass("slide-nav-toggle");
      }
      e.preventDefault();
    });


    var height = $(window).height();	
    $(".page-wrapper").css("min-height", height);
  
    
    $(window).resize(function(){
      if($('.page-wrapper').length > 0 ){
        var height = $(window).height();
        $(".page-wrapper").css("min-height", height);
      }
    });

  }
}
