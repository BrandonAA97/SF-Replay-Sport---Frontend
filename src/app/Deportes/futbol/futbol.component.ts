import { Component, OnInit} from '@angular/core';
import { Videos } from '../../models/models';

@Component({
  selector: 'app-futbol',
  templateUrl: './futbol.component.html',
  styleUrls: ['./futbol.component.css']
})
export class FutbolComponent implements OnInit{

  public arregloTarjetaFutbol: Videos[]=[];
  constructor() {}

  ngOnInit() {
    this.arregloTarjetaFutbol = [
      { titulo: "Argentina vs Brasil (Copa América 2021)", 
        subtitulo: "1 - 0", 
        image: "https://pbs.twimg.com/media/E5-sfsJXIAAQpaj.jpg:large", 
        url:"https://www.youtube.com/watch?v=U78tIU04xiM&t=1s&pp=ygUgYXJnZW50aW5hIC0gYnJhc2lsIGNvcGEgYW3DqXJpY2E%3D"
      },
      {titulo: "Argentina vs Italia (Finalissima 2022)",
       subtitulo: "3 - 0",
       image: "data:image/jpeg;base64,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",
       url:"https://youtu.be/dpSqkiJHpTg"
      },
      {titulo: "Argentina vs Francia (Mundial Qatar 2022 - Final)",
       subtitulo: "3(4) - 3(2)",
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpw1gUuLIpTGRojwP0e_G5cPQ2wiX_muFag&usqp=CAU",
       url:"https://youtu.be/2OKjdR3vvQE"
      }
    ]
  }
}