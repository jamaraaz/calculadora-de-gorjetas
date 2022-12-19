function calculateTip(event) {
  event.preventDefault()
  let bill = document.getElementById('bill').value
  let servicequal = document.getElementById('servicequal').value
  let numOfPeople = document.getElementById('people').value

  if ((bill == '') | (servicequal == 0)) {
    alert('Por favor, preencha os campos')
    return
  }

  if ((numOfPeople == '') | (numOfPeople <= 1)) {
    numOfPeople = 1
    document.getElementById('each').style.display = 'none'
  } else {
    document.getElementById('each').style.display = 'block'
  }

  if (bill <= 0) {
    alert('Tem certeza que a conta deu isso?')
  }

  let total = (bill * servicequal) / numOfPeople
  total = total.toFixed(2)
  document.getElementById('tip').innerHTML = total
  document.getElementById('totalTip').style.display = 'block'
}

document.getElementById('totalTip').style.display = 'none'
document.getElementById('each').style.display = 'none'

document.getElementById('tipsForm').addEventListener('submit', calculateTip)
