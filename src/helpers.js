export function calcularTotal(cantidad, plazo){
    let porcentajeCantidad
    if(cantidad <= 1000){
        porcentajeCantidad = 0.25
    }else if(cantidad <= 5000){
        porcentajeCantidad = 0.20
    }else if(cantidad <= 10000){ 
        porcentajeCantidad = 0.15
    }else{porcentajeCantidad = 0.10}
    let totalCantidad =  cantidad * porcentajeCantidad
    let porcentajePlazo
    switch (plazo) {
        case 3:
            porcentajePlazo = 0.05
            break;
        case 6:
            porcentajePlazo = 0.1
            break;
        case 12:
            porcentajePlazo = 0.15
            break;
        case 24:
            porcentajePlazo = 0.20
            break;
        default:
            break;
    }
    let totalPlazo = cantidad * porcentajePlazo
    return cantidad + (totalPlazo + totalCantidad)
}