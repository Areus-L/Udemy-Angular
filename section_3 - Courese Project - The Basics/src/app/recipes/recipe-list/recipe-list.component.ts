import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'test', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Fq%3D85%26c%3Dsc%26poi%3Dface%26w%3D2000%26h%3D1000%26url%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F43%252F2020%252F07%252F22%252F8000900-2000.jpg&imgrefurl=https%3A%2F%2Fwww.allrecipes.com%2Frecipes%2F&tbnid=BGcANXYHgTbyYM&vet=12ahUKEwjWvPWRuOXxAhWPDuwKHcSUA0YQMygSegUIARDwAQ..i&docid=jSLnQsNp7iBGKM&w=2000&h=999&q=recipe&ved=2ahUKEwjWvPWRuOXxAhWPDuwKHcSUA0YQMygSegUIARDwAQ')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
