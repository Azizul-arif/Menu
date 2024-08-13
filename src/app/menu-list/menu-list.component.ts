import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent {
  data = [
    {
      "name": "buttermilk pancakes",
      "price": 15.99,
      "description": "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live- edge blue bottle, hammock freegan copper mug whatever cold - pressed",
      "category": "Breakfast",
      "image": '../../assets/images/item-1.jpeg'

    },
    {
      "name": "diner double",
      "price": 13.99,
      "description": "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
      "category": "Lunch",
      "image": '../../assets/images/item-2.jpeg'

    },

    {
      "name": "godzilla milkshake",
      "price": 6.99,
      "description": "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
      "category": "Shakes",
      "image": '../../assets/images/item-3.jpeg'

    },
    {
      "name": "country delight",
      "price": 20.99,
      "description": "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
      "category": "Breakfast",
      "image": '../../assets/images/item-4.jpeg'

    },
    {
      "name": "egg attack",
      "price": 22.99,
      "description": "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
      "category": "Lunch",
      "image": '../../assets/images/item-5.jpeg'

    },
    {
      "name": "oreo dream",
      "price": 18.99,
      "description": "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
      "category": "Shakes",
      "image": '../../assets/images/item-6.jpeg'

    },
    {
      "name": "bacon overflow",
      "price": 8.99,
      "description": "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
      "category": "Breakfast",
      "image": '../../assets/images/item-7.jpeg'

    },
    {
      "name": "american classic",
      "price": 12.99,
      "description": "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
      "category": "Lunch",
      "image": '../../assets/images/item-8.jpeg'

    },
    {
      "name": "quarantine buddy",
      "price": 16.99,
      "description": "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
      "category": "Shakes",
      "image": '../../assets/images/item-9.jpeg'

    }


  ]

}
