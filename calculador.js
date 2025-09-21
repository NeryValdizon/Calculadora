document.addEventListener('DOMContentLoaded', function() {
            // Variables
            let operacionSeleccionada = null;
            const botonesOperacion = document.querySelectorAll('.operacion');
            const btnCalcular = document.getElementById('calcular');
            const resultadoElemento = document.getElementById('resultado');
            
            // Seleccionar operación
            botonesOperacion.forEach(boton => {
                boton.addEventListener('click', function() {
                    // Quitar selección anterior
                    botonesOperacion.forEach(b => b.classList.remove('seleccionada'));
                    
                    // Seleccionar nueva operación
                    this.classList.add('seleccionada');
                    operacionSeleccionada = this.getAttribute('data-operacion');
                });
            });
            
            // Calcular resultado
            btnCalcular.addEventListener('click', function() {
                // Obtener valores de los inputs
                const num1 = parseFloat(document.getElementById('numero1').value);
                const num2 = parseFloat(document.getElementById('numero2').value);
                
                // Validar que se hayan ingresado números
                if (isNaN(num1) || isNaN(num2)) {
                    resultadoElemento.textContent = "Por favor, ingrese ambos números";
                    return;
                }
                
                // Validar que se haya seleccionado una operación
                if (!operacionSeleccionada) {
                    resultadoElemento.textContent = "Por favor, seleccione una operación";
                    return;
                }
                
                // Realizar cálculo según la operación seleccionada
                let resultado;
                switch(operacionSeleccionada) {
                    case 'suma':
                        resultado = num1 + num2;
                        break;
                    case 'resta':
                        resultado = num1 - num2;
                        break;
                    case 'multiplicacion':
                        resultado = num1 * num2;
                        break;
                    case 'division':
                        if (num2 === 0) {
                            resultadoElemento.textContent = "Error: No se puede dividir por cero";
                            return;
                        }
                        resultado = num1 / num2;
                        break;
                }
                
                // Mostrar resultado
                resultadoElemento.textContent = `Resultado: ${resultado}`;
            });
        });