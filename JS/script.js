const form = document.getElementById("datos")
const nombre = document.getElementById("nombre")
const sueldo = document.getElementById("sueldo")
const meses = document.getElementById("meses")
const respuesta = document.getElementById("respuesta")

form.addEventListener("submit", function(event) {
  event.preventDefault()

  let n = nombre.value.trim()
  let s = parseFloat(sueldo.value) || 0
  let m = parseInt(meses.value) || 0

  if(!n || s <= 0 || m <= 0){
    respuesta.innerHTML = `<div class="alert alert-warning">Llena todos los campos correctamente.</div>`
    return
  }

  let años = Math.floor(m / 12)
  let sobrantes = m % 12

  let extraAños = años * 2000
  if(extraAños > 10000) extraAños = 10000

  let extraMeses = sobrantes * 100
  let aguinaldo = extraAños + extraMeses
  let total = s + aguinaldo

  respuesta.innerHTML = `
    <div class="alert alert-success">
      <strong>Empleado:</strong> ${n} <br>
      <strong>Sueldo base:</strong> $${s.toLocaleString()} <br>
      <strong>Aguinaldo:</strong> $${aguinaldo.toLocaleString()} <br>
      <strong>Total a pagar:</strong> $${total.toLocaleString()}
    </div>
  `
})
