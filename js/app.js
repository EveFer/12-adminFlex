// const menuIzquierdo = document.querySelector('.menu-izquierdo');

// menuIzquierdo.addEventListener('click', (e)  => {
//        const claseMenu = e.target.classList;
       
//        // Selecciona el contenedor
//        const contenedor = document.querySelector('.pagina'),
//              flechaIzq = document.querySelector('.fa-arrow-left'),
//              flechaDer = document.querySelector('.fa-arrow-right');

//        if(claseMenu.contains('fa-arrow-left') ) {
//             // cerrar el menú lateral
//             contenedor.classList.add('no-menu');
//             e.target.style.display = 'none';
//             flechaDer.style.display = 'block';
//        } else if( claseMenu.contains('fa-arrow-right')) {
//             contenedor.classList.remove('no-menu');
//             e.target.style.display = 'none';
//             flechaIzq.style.display = 'block';
//        }
// });

const menuLeft = document.querySelector('.left-menu')

menuLeft.addEventListener('click', (e) => {
     const classMenu = e.target.classList;
     // crear variables que seleccionen las flechas y la pagina
     const container = document.querySelector('.page'),
          arrowLeft = document.querySelector('.fa-arrow-left'),
          arrowRight = document.querySelector('.fa-arrow-right');


     if(classMenu.contains('fa-arrow-left')) {
          // cerrar el menu lateral
          arrowLeft.style.display = 'none';
          arrowRight.style.display = 'block';
          container.classList.add('no-menu');
     }else if (classMenu.contains('fa-arrow-right')) {
          arrowLeft.style.display = 'block';
          arrowRight.style.display = 'none';
          container.classList.remove('no-menu');
     }
});
