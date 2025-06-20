import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allRecipes:any[],searchKey:string):any[] {
    let result:any=[];
    if(!allRecipes || searchKey===''){
      return allRecipes
    }
    else{
      result=allRecipes.filter((item:any)=>{
        return 
        item.name.toLowerCase().includes(searchKey.toLowerCase())

      })
      return result;
    }
  }

}
