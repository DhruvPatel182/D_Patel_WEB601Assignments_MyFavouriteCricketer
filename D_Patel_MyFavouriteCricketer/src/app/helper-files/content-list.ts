import {Content} from "./content-interface"

export class ContentList {

    private _MyFavouriteCricketer:Content[];

    constructor(){
        this._MyFavouriteCricketer=[];
    }

    get items():Content[]{
        return this._MyFavouriteCricketer;
      }
    
      addContent(oneitem: Content): void
      {
        this._MyFavouriteCricketer.push(oneitem);
      }
    
      listLength():number{
        return this._MyFavouriteCricketer.length;
       }
       printProperties(index: number): string {
         if (this._MyFavouriteCricketer.length <= index || index < 0) {
           return `<h2>Error, invalid index requested: ${index}</h2>`;
         }
         return `<div class="content-wrapper">
                   <h1>Title of Movie:${this._MyFavouriteCricketer[index].title}</h1><br>
                   <p>Description : ${this._MyFavouriteCricketer[index].description}</p>
                  <h6> Author name: ${this._MyFavouriteCricketer[index].creator}</h6>
                   <img src="${this._MyFavouriteCricketer[index].imgURL}" height="100px" width="150px"><br>
                 <div>Type: ${this._MyFavouriteCricketer[index].type}</div><br>
                 <div>HashTags: ${this._MyFavouriteCricketer[index].tags}</div>
                 </div>`;
       }  
}
