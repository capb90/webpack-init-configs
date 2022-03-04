import '../css/componentes.css'
import img from '../assets/images/webpack-logo.png'

export const setImag = (_)=>{
    const imgHtml = document.createElement('img');
    imgHtml.src = img;
    document.body.append(imgHtml);
}
