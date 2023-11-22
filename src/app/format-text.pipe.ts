import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {

  transform(text:string): any {
    if(!text) return null
    let t = text.split(' ');
    for(let i = 0; i<t.length; i++){
      let word:string = t[i];
      if(i>0 && this.isPreposition(word)){
        t[i] = word;
      } else{
        t[i] = this.toTitleCase(word);
      }
      
    }

    return t.join(' ');
  }
  toTitleCase(item:string):string{
    return item.substr(0,1).toUpperCase()+item.substr(1);
  }
  isPreposition(word:string):boolean{
    let prepostionList = ['of', 'the']
    return prepostionList.includes(word.toLowerCase())
  }

}
