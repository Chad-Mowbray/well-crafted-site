console.log("amazing things")


let interactive = document.querySelector("#interactive")
console.log(interactive)

interactive.addEventListener('click', function(e) {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(res => interactive.innerHTML = res)
  .catch(e => interactive.innerHTML = e)
})