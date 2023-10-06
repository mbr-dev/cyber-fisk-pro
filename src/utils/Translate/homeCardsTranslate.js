import Livros from "../../assets/bookImage.png";
import Cursor from "../../assets/iconeImage.png";
import Medalha from "../../assets/medalhaImage.png";
import Micro from "../../assets/microImage.png";
import Note from "../../assets/noteImage.png";
import Reporte from "../../assets/reporteImage.png";

export const homeCardsTranslate = [
  { 
    id: 0, 
    name: ["Livros", "Books", "Libros"],
    img: Livros 
  },
  { 
    id: 1, 
    name: ["Último Acesso", "Last Access", "Ultimo acceso"],
    img: Cursor},
  { 
    id: 2, 
    name: ["Classificação", "Ranking","Clasificación"],
    img: Medalha},
  { 
    id: 3, 
    name: ["Relatório", "Report", "Informe"],
    img: Note},
  { 
    id: 4, 
    name: ["Painel", "Billboard", "Cartelera"],
    img: Reporte},
  { 
    id: 5, 
    name: ["Pronúnciação", "Pronunciantion", "Pronunciación"],
    img: Micro
  },
]