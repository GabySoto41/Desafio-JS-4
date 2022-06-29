
let productos_precios = [

    {producto: "buzo ferrari", precio: 5000},

    {producto: "buzo mercedes",  precio: 5000},

    {producto: "buzo red bull", precio: 5000},

    {producto: "remera coraje", precio: 1500},

]

let productName = "";

let producto_ingresado = "";



function buscarProducto (productos_precios) { 

    return productos_precios.producto === producto_ingresado;
}

function precio2 (){

let texto= "";  

let precio_total= 0;

let precio_unidad = 0


while (producto_ingresado != "esc"){


    producto_ingresado = prompt ("Ingrese el nombre del producto que desea comprar( Si desea ver el total de la transaccion escriba esc):","");

    if (producto_ingresado == "esc") {     

        producto_ingresado = "";

        break;
    }

    else if (producto_ingresado == null) {

    texto = "";

    break;  
    }

    else {

        let resultado = productos_precios.find (buscarProducto);

        if (resultado == undefined) {

            alert ("no se encontro el producto")
        }

        else {

            texto  += resultado.producto + " -->  " + "$" + resultado.precio + "\n"

            if (precio_total == 0){

                precio_total = resultado.precio;
            }

            else {

                precio_total += resultado.precio;
            }           
        }
    }
} //fin while

if (texto != "") {

    console.log (texto + "\n" + "precio total --> " + "$" + precio_total);

    alert (texto + "\n" + "precio total --> " + "$" + precio_total);
}   
}



    



