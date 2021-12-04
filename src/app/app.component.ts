import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  li:any;
 some=[
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() }
];
lis:any;
tagName=[''];
grd =[];
num :any;
avg=0;
avgs=[26];
searchText='';
searchTagText='';
showMe=[false];
togglebtn=['collapsible'];

  constructor(private http: HttpClient){}

  ngOnInit():void{
   
  
    for(let i = 0; i <25 ; i++){
      this.togglebtn[i] = 'collapsible';
    }
    for(let i = 0; i <25; i++){
      this.showMe[i] = false;
    }
    
    this.http.get('https://api.hatchways.io/assessment/students').subscribe(

      Response => {
        this.li=Response;
        this.lis= Array.from(this.li.students);
        
        for(let i = 0; i <25; i++){
          this.grd =Array.from(this.lis[i].grades);

          for(let j = 0; j < 8; j++){
            this.num = parseInt(this.grd[j]); 
            this.avg = this.avg + this.num;
        
            }
          this.avg = this.avg/8;
          this.avgs[i] = this.avg;
        }
      }
      
    )
  }
  
  toggleClick(id: any){

   this.showMe[id]=!this.showMe[id];
   if(this.showMe[id]) {
    this.togglebtn[id] = 'active';
    } else {
    this.togglebtn[id] = 'collapsible';
    }
  }
 

  onCreateTag(i:any){

    this.some[i].name.push(this.tagName[i]);
    this.tagName[i]=''

  }

 
}
