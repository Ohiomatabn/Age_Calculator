function calculateAge(){
  const birthYear = document.querySelector('#birth-year').value;
  const enteredYear = document.querySelector('#current-year').value;
  let result = document.querySelector('.result');

  if (birthYear < 1){
    result.innerHTML = `Birth Year can't be a negative number`
    result.setAttribute('style', 'color: red;');
    return;
  } else if (birthYear.length < 4){
    result.innerHTML = `Birth year length can't be less than four (4)`
    result.setAttribute('style', 'color: red;');
    return;
  } else{
    let age = enteredYear - birthYear;
    if(age < 1){
      result.innerHTML = `Birth Year can't be greater than current or desired year`
      result.setAttribute('style', 'color: red;');
    } else if (age === '1'){
      result.innerHTML = `You're ${age} Year Old`
      result.setAttribute('style', 'color: rgba(30, 248, 30, 0.7);');
    } else{
      result.innerHTML = `You're ${age} Years Old`
      result.setAttribute('style', 'color: rgba(30, 248, 30, 0.7);');
    }
  }

}


document.querySelector('.calculate').addEventListener('click', (e) =>{
  e.preventDefault();
  calculateAge();
});