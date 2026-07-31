import { Component } from '@angular/core';

const menuItems = [

  /* SHAWARMAS */


  {
    category: 'Shawarmas',
    name: 'Peri Peri Chicken Shawarma',
    desc: 'Spicy peri peri chicken with fresh veggies & sauce',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1779120041/peri_peri_chicken_shawarma.jpg'
  },
  {
    category: 'Shawarmas',
    name: 'Firangi Chicken Shawarma',
    desc: 'Fusion-style chicken shawarma with creamy sauce & veggies',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469235/Firangi_Chicken_Shawarma.jpg'
  },
  // {
  //   category: 'Shawarmas',
  //   name: 'Classic Chicken Shawarma',
  //   desc: 'Traditional chicken shawarma with veggies & garlic sauce',
  //   image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469209/Classic_Chicken_Shawarma.jpg'
  // },
  {
    category: 'Shawarmas',
    name: 'Chicken Tikka Shawarma',
    desc: 'Smoky chicken tikka with veggies & tangy sauce',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469201/Chicken_Tikka_Shawarma_dof4vt.jpg'
  },
  {
    category: 'Shawarmas',
    name: 'BBQ Chicken Shawarma',
    desc: 'BBQ-flavored chicken with fresh veggies & sauce',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/BBQ_Chicken_Shawarma_ccrkfd.jpg'
  },
  {
    category: 'Shawarmas',
    name: 'Chilli Milli Paneer Shawarma',
    desc: 'Spicy chilli paneer with fresh veggies & creamy sauce',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/Chilli_Milli_Paneer_Shawarma_e851fm.jpg'
  },
  {
    category: 'Shawarmas',
    name: 'BBQ Paneer Shawarma',
    desc: 'BBQ-flavored paneer with veggies & rich sauce',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/BBQ_Paneer_Shawarma_swb38v.jpg'
  },
  {
    category: 'Shawarmas',
    name: 'Aloo Tikki Shawarma',
    desc: 'Crispy aloo tikki with veggies & tangy sauce',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/Aloo_Tikki_Shawarma_ltw6aj.jpg'
  },
  {
    category: 'Shawarmas',
    name: 'Falafel Hummus Shawarma',
    desc: 'Falafel with hummus, veggies & flavorful sauce',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469867/Falafal_Hummus_Shawarma_ax3jhd.jpg'
  },

  /* SALADS */

  {
    category: 'Salads',
    name: 'Chilli Milli Chicken Salad',
    desc: 'Spicy chilli chicken with fresh veggies & dressing',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/Chilli_Milli_Chicken_Salad_o7tniw.jpg'
  },
  {
    category: 'Salads',
    name: 'Turkish Chicken Salad',
    desc: 'Turkish-style chicken with fresh veggies & herbs',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/Turkish_Chicken_Salad_nukbrj.jpg'
  },
  
  {
    category: 'Salads',
    name: 'BBQ Paneer Salad',
    desc: 'BBQ paneer with fresh veggies & creamy dressing',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/BBQ_Paneer_Salad_lcfw0k.jpg'
  },
  {
    category: 'Salads',
    name: 'Falafel Salad',
    desc: 'Crispy falafel with fresh veggies & tahini dressing',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469855/Falafal_Salad_qdrkoj.jpg'
  },
  {
    category: 'Salads',
    name: 'Classic Paneer Salad',
    desc: 'Classic paneer with fresh veggies & light dressing',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/Classic_Paneer_Salad_hnabfo.jpg'
  },
  {
    category: 'Salads',
    name: 'Aloo Tikki Salad',
    desc: 'Crispy aloo tikki with veggies & tangy dressing',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/Aloo_Tikki_Salad_b3kbex.jpg'
  },

  /* PLATTERS */

  {
    category: 'Platters',
    name: 'Chicken Hummus Platter',
    desc: 'Juicy chicken served with hummus, pita & sides',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469199/Chicken_Hummus_Platter_b3afwo.jpg'
  },
  {
    category: 'Platters',
    name: 'Hummus Falafel Platter',
    desc: 'Crispy falafel with hummus, pita & fresh sides',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469479/Hummus_Falafal_Platter_xuivby.jpg'
  },
  {
    category: 'Platters',
    name: 'Hummus Falafel Bites',
    desc: 'Falafel bites served with hummus & dipping sauce',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777469475/Hummus_Falafal_Bites_aaiz0w.jpg'
  },

  /* GRILLERS */

  {
    category: 'Grillers',
    name: 'Tandoori Chicken Griller',
    desc: 'Smoky tandoori chicken',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777468917/Tandoori_Chicken_Griller_1_vjtghe.jpg'
  },
  {
    category: 'Grillers',
    name: 'BBQ Paneer Griller',
    desc: 'Paneer with smoky BBQ flavor',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777468917/BBQ_Paneer_Griller_fdmfvl.jpg'
  },
  {
    category: 'Grillers',
    name: 'Piri Piri Chicken Griller',
    desc: 'Chicken tossed in spicy peri peri seasoning',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777468917/Piri_piri_Chicken_Griller_yfpsqc.jpg'
  },
  /* RICE BOWLS */
  {
    category: 'Rice Bowls',
    name: 'Piri Piri Paneer Rice Bowl',
    desc: 'Rice bowl with spicy peri peri paneer',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777468917/Piri_Piri_Paneer_Rice_Bowl_lbg9om.jpg'
  },
  {
    category: 'Rice Bowls',
    name: 'Hummus Falafal Rice Bowl',
    desc: 'Rice bowl with crispy falafal and creamy hummus',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1784118198/Hummus_Falafal_Rice_Bowl_cmvkhl.jpg'
  },
  {
    category: 'Rice Bowls',
    name: 'Turkish Chicken Rice Bowl',
    desc: 'Rice bowl with Turkish-style grilled chicken',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777468917/Turkish_Chicken_Rice_Bowl_zcrc9i.jpg'
  },
  {
    category: 'Rice Bowls',
    name: 'BBQ Chicken Rice Bowl',
    desc: 'Rice bowl with smoky BBQ chicken',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777468917/BBQ_Chicken_Rice_Bowl_1_zqdmpk.jpg'
  },
  {
    category: 'Rice Bowls',
    name: 'Firangi Chicken Rice Bowl',
    desc: 'Rice bowl with flavorful Firangi-style chicken',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777468917/Firangi_Chicken_Rice_Bowl_pltseb.jpg'
  },
  {
    category: 'Rice Bowls',
    name: 'Classic Chicken Rice Bowl',
    desc: 'Rice bowl with classic grilled chicken',
    image: 'https://res.cloudinary.com/dcksetrok/image/upload/f_auto,q_auto,w_600,c_fill/v1777468917/Classic_Chicken_Rice_Bowl_um3lnq.jpg'
  }



];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isMobile = window.innerWidth <= 990;


  categories: string[] = [
    'Shawarmas',
    'Salads',
    'Platters',
    'Grillers',
    'Rice Bowls'
  ];

  selectedCategory = 'Shawarmas';

  get filteredItems() {

    return menuItems.filter(
      item => item.category === this.selectedCategory
    );

  }


  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }

}
