import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundPageModule } from './recipes/page-not-found/page-not-found.module';
import { PageNotFoundPage } from './recipes/page-not-found/page-not-found.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./recipes/recipes.module').then((m) => m.RecipesPageModule),
      },
      {
        path: ':recipeId',
        loadChildren: () =>
          import('./recipes/recipe-detail/recipe-detail.module').then(
            (m) => m.RecipeDetailPageModule
          ),
      },
    ],
  },
  {
    path:'**',component:PageNotFoundPage
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
