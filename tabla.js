// var table_body;
// var valorfilas;
// var valorcolumnas;
// var table;
// var tblbody;
// var filas;
// var columnas;
function crear_tabla()
{
	var tableExist = document.getElementById('table_id');

	if (tableExist) {
		document.getElementById('table_contenedor').innerHTML = "";
	}
 
    var contenedor_tabla= document.getElementById('table_contenedor');
   var Nfilas= document.getElementById('fila').value;
   var Ncolumnas= document.getElementById('columna').value;
    var NumFilas = parseInt(Nfilas);
    var NumCols = parseInt(Ncolumnas);

    if (Nfilas == 0 || Ncolumnas == 0)
     {
     	alert("ingrese cantidad de filas y columnas mayores que cero");
     	document.getElementById('fila').focus();

     }else if (Nfilas != "" && Ncolumnas != "" || Nfilas != 0 & Ncolumnas != 0 || Nfilas != "e" && Ncolumnas != "e")  
     {
 	
 	    var table= document.createElement('table');
 	    table.setAttribute('id','table_id');
 	    table.setAttribute('class', 'table table-bordered');
 	    var tblbody= document.createElement('tbody');
 	    for(var i=1; i <= NumFilas; i++)
 	    {
         var filas = document.createElement('tr');

         for(var j=1; j <= NumCols; j++)
         {
          var columnas= document.createElement('td');
          // var dato = document.createTextNode('fila:'+' '+i +'columna:'+' '+j);
          var dato = document.createTextNode("----")
          columnas.appendChild(dato);
          filas.appendChild(columnas);
          columnas.id = i+""+j;
          columnas.colSpan = j;
         }
          tblbody.appendChild(filas);
 	    }
 	
 	   table.appendChild(tblbody);
 	//document.body.appendChild(table);
 	   contenedor_tabla.appendChild(table);
 	   

 	  	  document.getElementById('fila').innerHTML = document.createTextNode('');
 	  	  document.getElementById('texto').focus();
 	  
      }

// limpiar(Nfilas);
 // else if (Nfilas ==  "0" || Ncolumnas == "0") {
 	
 // 	alert("solo datos superiores a cero");
 // }
 // else
 // {
 // 	alert(NumFilas+" "+NumCols);
 // }

}
  
 function limpiar()
 {
 	alert("estoy en la funcion");
 	dfilas.innerHTML = "";
 	// document.getElementById('fila').innerHTML = " ";
 	document.getElementById('fila').focus();
 	return 
 }



function agregando()
{

   
   var dato = document.getElementById('texto').value;
   var Lrow= document.getElementById('fila_locate').value;
   var Lcols = document.getElementById('col_locate').value;
   var fila = document.getElementById('fila').value;
   var columna = document.getElementById('columna').value;
   var obTable = document.getElementById('table_id');
   var width_Rows = parseInt(fila);
   var width_Cols = parseInt(columna);
   var int_Locate_rows = parseInt(Lrow);
   var int_Locate_cols = parseInt(Lcols);
   

if (obTable) 
{
   

   if (Lrow == "" || Lrow == 0 || Lcols == "" || Lcols == 0 || Lcols == "e")
   { 

   alert("filas y columnas son requeridas! datos numericos distinto de cer0");
   document.getElementById('fila_locate').focus();
    
   }
   else if (dato == "") 
   {
   	alert("debe ingresar un dato!");
   	document.getElementById('texto').focus();
   	
   }
   else
   {
   	
   	    if (int_Locate_rows <= width_Rows && int_Locate_cols <= width_Cols) 
   	    {
   	    	alert("ubicar fila en:"+Lrow+"columna a ubicar"+Lcols+"----"+"Numero de filas"+fila+"Numero de columnas"+columna);
   		 	var id_celda = Lrow + Lcols;
         	document.getElementById(id_celda).innerHTML = dato;
   		    
   	    }
   		else
     	{
   		
   	     	alert("la fila y columna a ubicar sobrepasan los rangos de la tabla");
   	        document.getElementById('fila_locate').focus();
   	
     	}

    }
}
else
{
	alert("debe crear una tabla primero!");
	document.getElementById('fila').focus();
}
    
   	// var getfila = obTable.getElementsByTagName('tr');
   	// var f = getfila[fila];   	 
   	//  var getcol = f.getElementsByTagName('td');
   	//  var c = getcol[columna];
   	//  c.innerHTML = dato;





}