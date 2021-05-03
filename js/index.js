
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
} );
const pedidos =[];//definir una constante
const cargarTabla = ()=>{
    //1.Obtener una referencia a la tabla
    const tbody = document.querySelector("#tbody-tabla");
    tbody.innerHTML = "";
    //2. Recorrer la lista de pokemones
    for(let i =0; i< pedidos.length; ++i){
        let p = pedidos[i];
        //3. Por cada pokemon generar una fila en la tabla(tr)
        let tr = document.createElement("tr");
        //4. Por cada atributo generar un td de la tabla
        let tdNro = document.createElement("td");
        let tdNombre = document.createElement("td");
        let tdTipo = document.createElement("td");
        let tdTotal = document.createElement("td");
        let tdMedio = document.createElement("td")

        //Definir lo que va en la tabla
        tdNro.innerText= i+1;
        tdNombre.innerText = p.nombre;

        //Todo: el tipo tiene que ser un icono
        
        let medio = document.createElement("i");
        if(p.medio=="1"){
            //Tipo planta  <i class="fas fa-leaf"></i>   
            medio.classList.add("fas","fa-leaf", "text-success","fa-3x");
        }else if(p.medio=="2"){
            //Tipo Fuego  <i class="fas fa-fire"></i>
            //tipo fuego prueba <i class="fas fa-burn"></i>
            medio.classList.add("fas","fa-fire", "text-danger","fa-3x");
        }
        tdMedio.classList.add("text-center");
        tdMedio.appendChild(medio);
        //cuando quiero agregar un elemetno dentro de otro: appendChild
        //cuando quiero definir texto, innerText
        //cuando quiero definir directamente el html, innerHTML
        
       
        //TODO: que hago con las acciones





        //5. Agregar los td al tr
        tr.appendChild(tdNro);
        tr.appendChild(tdNombre);
        tr.appendChild(tdTipo);
        tr.appendChild(tdTotal);
        tr.appendChild(tdMedio);
         //6. Agregar el tr a la tabla
         tbody.appendChild(tr);

}   }
    


 document.querySelector("#registrar-btn").addEventListener("click", ()=>{
        let nombre = document.querySelector("#nombre-txt").value;
        let tipo = document.querySelector("#tipo_pedido-rb").checked;
        let total = document.querySelector("#total-pedido").value;
        let medio = document.querySelector("medio-pago").value;
        //Crea un objeto
        let pedido = {};
        //Crea un atributo del objeto
        pedido.nombre = nombre;
        pedido.tipo = tipo;
        pedido.total = total;
        pedido.medio = medio;


        pedidos.push(pedido);
        cargarTabla();
        Swal.fire("Resultado exitoso!", "Pedido registrado","info")


    });