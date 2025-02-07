document.getElementById("taxForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir que la página se recargue al enviar el formulario

    // Obtener los valores del formulario
    const amount = parseFloat(document.getElementById("amount").value);
    const taxRate = parseFloat(document.getElementById("taxRate").value);

    // Calcular el IVA
    const iva = (amount * taxRate) / 100;
    const total = amount + iva;

    // Mostrar el resultado
    document.getElementById("ivaAmount").innerText = `IVA: ${iva.toFixed(2)} `;
    document.getElementById("totalAmount").innerText = `Total: ${total.toFixed(2)}`;
});
