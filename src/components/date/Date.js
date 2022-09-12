import moment from 'moment'
import React, { useEffect, useRef } from 'react'

moment.updateLocale('es', {
    weekdays : [
        "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
    ],
    monthsShort : [
      "Ene", "Feb", "Mar", "Abr", "May", "Jun",
      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
  ]
});


function DateTime() {

    const time = () =>{ return moment(new Date()).format("HH:mm - dddd, D MMM") }
    const h3 = useRef()

    useEffect(()=>{
        const cl = setInterval(()=>{
            h3.current.innerHTML = `${time()}`;
        },10000);
        return ()=>clearInterval(cl);
    },[]);

  return (
    <div className='reloj'>        
        <h3 ref={h3}>{time()}</h3>        
    </div>
  )
}



export default DateTime