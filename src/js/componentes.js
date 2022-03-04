import '../css/componentes.css'
// import img from '../assets/images/webpack-logo.png'

export const saludar = (nombre)=>{
    const h3=document.createElement('h3');
    h3.innerText=nombre;
    document.body.append(h3);

    //img
    // const imgHtml = document.createElement('img');
    // imgHtml.src = img;
    // document.body.append(imgHtml)
}