function calcular(){
    if(frm.estInm[0].checked == true || frm.estInm[1].checked == true){
    }else{
        var confirmar = confirm("Completa el campo tipo de estado del inmbueble");
   }
    if(frm.opValor[0].checked == true || frm.opValor[1].checked == true){
    }else{
        var confirmar = confirm("Completa el campo opción de cotización");
    }
    var opcionValor;
    campo_input = document.frm.opValor;
    for(i=0; i<campo_input.length; i++){
      if(campo_input[i].checked){
        opcionValor = campo_input[i].value;
        break;
      }
    }
    var v_tot = document.getElementById("valTot").value == "";
    if(document.getElementById("valTot").value == ""){
        var confirmar = confirm("No ingresaste el valor total");
        if(!confirmar){
            document.getElementById("valTot").focus();
            return false;
        }
    }
    var v_pie = document.getElementById("monPie").value == "";
    if(document.getElementById("monPie").value == ""){
        var confirmar = confirm("No ingresaste monto del pie");
        if(!confirmar){
            document.getElementById("monPie").focus();
            return false;
        }
    }     
var valTot = eval(document.getElementById("valTot").value);
var monPie = eval(document.getElementById("monPie").value);
var monCred = document.getElementById("monCredito").value;
    
    if(opcionValor == "Peso"){
        var calMonCred = valTot - monPie;
        var calPorcentaje = valTot * 0.8;
        var pieMinimo = valTot * 0.2;
        if(frm.opValor[0].checked == true){
            var div = document.getElementById('UFaPeso');
            div.style.display = "none";
        }if(calPorcentaje>calMonCred){
            document.getElementById("monCredito").value = calMonCred;
            alert("Tu crédito cumple la condición, pronto sera evaluado por un ejecutivo.\nCompleta los campos restantes.");
        }if(monPie==pieMinimo){
            document.getElementById("monCredito").value = calMonCred;
            alert("Tu crédito cumple la condición, pronto sera evaluado por un ejecutivo.\nCompleta los campos restantes.");
        }if(monPie >= valTot){
            alert("El monto del pie no puede ser igual o mayor que el total");
            document.getElementById("monPie").value = "";
            document.getElementById("monPie").focus();
            document.getElementById("monCredito").value = "";
        }if(calPorcentaje<calMonCred){
            alert("Estas solicitando $" + calMonCred + " excede el 80% del valor total \nDebes aumentar tu pie.");
            document.getElementById("monPie").value = "";
            document.getElementById("monPie").focus();
            document.getElementById("monCredito").value = "";
        }
    }
    if(opcionValor == "UF"){
        var calMonCred = valTot - monPie;
        var calPorcentaje = valTot * 0.8;
        var pieMinimo = valTot * 0.2;
        valorUF = 29000;
        var valorTotPeso = valTot * valorUF;
        var valorPiePeso = monPie * valorUF;
        var valorTotCred = calMonCred * valorUF;
        if(valTot>=5000){
            alert("Estas cotizando en U.F, no puedes exceder las 5000 U.F.")
        }
        if(calPorcentaje>calMonCred){
            document.getElementById("monCredito").value = calMonCred;
            alert("Tu crédito cumple la condición, pronto sera evaluado por un ejecutivo.\nCompleta los campos restantes.");
       }if(monPie==pieMinimo){
            document.getElementById("monCredito").value = calMonCred;
            alert("Tu crédito cumple la condición, pronto sera evaluado por un ejecutivo.\nCompleta los campos restantes.");
        }if(monPie>=valTot){
                alert("El monto del pie no puede ser igual o mayor que el total");
                document.getElementById("monPie").value = "";
                document.getElementById("monPie").focus();
                document.getElementById("monCredito").value = "";                
            }if(calPorcentaje<calMonCred){
                alert("Estas solicitando " + calMonCred + " U.F excede el 80% del valor total \nDebes aumentar tu pie.");
                document.getElementById("monPie").value = "";
                document.getElementById("monPie").focus();
                document.getElementById("monCredito").value = "";
                }            
            if(frm.opValor[0].checked == true){
                var div = document.getElementById('UFaPeso');
                div.style.display = "none";
            }else{
                if(frm.opValor[1].checked == true){
                var div = document.getElementById('UFaPeso');
                div.style.display = "block";
                document.getElementById("valTotUFaPeso").value = valorTotPeso;
                document.getElementById("monPieUFaPeso").value = valorPiePeso;
                document.getElementById("monCreditoUFaPeso"). value = valorTotCred;
                }            
            }
    }
}
function validacion(){
    var name = document.getElementById("name").value == "";
    if(document.getElementById("name").value == ""){
        var confirmar = confirm("No ingresaste ningun nombre");
        if(!confirmar){
            document.getElementById("name").focus();
            return false;
        }
    }
    var rut = document.getElementById("rut").value == "";
    if(document.getElementById("rut").value == ""){
        var confirmar = confirm("No ingresaste ningun Nro. de R.U.T.");
        if(!confirmar){
            document.getElementById("rut").focus();
            return false;
        }
    }
    var n_tel = document.getElementById("tel").value == "";
    if(document.getElementById("tel").value == ""){
        var confirmar = confirm("No ingresaste ningun Nro. telefónico");
        if(!confirmar){
            document.getElementById("tel").focus();
            return false;
        }
    }
    var correo = document.getElementById("email").value == "";
    if(document.getElementById("email").value == ""){
        var confirmar = confirm("No ingresaste ningun correo electrónico");
        if(!confirmar){
            document.getElementById("email").focus();
            return false;
        }
    }
    var cantAnos =  document.getElementById("anos");
    if(cantAnos.value ==0 || document.frm.canAnos ==""){
        alert("No ingresaste la cantidad de años.");
        cantAnos.focus();
        return false;        
    }
}
document.getElementById("anos").addEventListener("click", function(event){
    event.preventDefault()
});
