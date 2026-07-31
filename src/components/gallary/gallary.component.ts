import { Component, OnInit, VERSION, ViewEncapsulation } from "@angular/core";
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lightGallery from "lightgallery";

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GallaryComponent implements OnInit {


  name = "Angular " + VERSION.major;
  galleryImages = [
  // Shawarmas
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1779120041/peri_peri_chicken_shawarma.jpg',
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/Chilli_Milli_Paneer_Shawarma_e851fm.jpg',
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469867/Falafal_Hummus_Shawarma_ax3jhd.jpg',
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/Aloo_Tikki_Shawarma_ltw6aj.jpg',

  // Salads
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/Chilli_Milli_Chicken_Salad_o7tniw.jpg',
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/BBQ_Paneer_Salad_lcfw0k.jpg',
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469855/Falafal_Salad_qdrkoj.jpg',

  // Platters
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/Chicken_Hummus_Platter_b3afwo.jpg',
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469479/Hummus_Falafal_Platter_xuivby.jpg',

  // Grillers
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777468917/Tandoori_Chicken_Griller_1_vjtghe.jpg',
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777468917/BBQ_Paneer_Griller_fdmfvl.jpg',

  // Rice Bowls
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777468917/Turkish_Chicken_Rice_Bowl_zcrc9i.jpg',
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777468917/Piri_Piri_Paneer_Rice_Bowl_lbg9om.jpg',
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1784118198/Hummus_Falafal_Rice_Bowl_cmvkhl.jpg',

  // Shawarmazza
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469602/Tandoori_Paneer_Pizza_pawo0b.jpg',
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469513/Chicken_Teriyaki_Pizza_ke7dw9.jpg',

  // Subs
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777470036/Aloo_Tikki_Sub_ojkjy8.jpg',
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777470065/Fiery_Paneer_Sub_ydkk7h.jpg',

  // Pizza
  'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469509/Chicken_Tikka_Pizza_yhoiiz.jpg'
];
  layout = [
  // Row 1 (4 images)
  'four','four','four','four',

  // Row 2 (3 images)
  'three','three','three',

  // Row 3 (5 images)
  'five','five','five','five','five-last'
];

getClass(index:number){
   return this.layout[index % this.layout.length];
}
  ngOnInit(): void {
    window.scrollTo(0, 0);

    const container = document.querySelector('#bootstrap-image-gallery') as HTMLElement;
    if (container) {
      lightGallery(container, {
        selector: '.lg-item',
        plugins: [lgZoom]
      });
    }

    const container2 = document.querySelector('#bootstrap-image-gallery2') as HTMLElement;
    if (container2) {
      lightGallery(container2, {
        selector: '.lg-item',
        plugins: [lgZoom]
      });
    }
  }
}
