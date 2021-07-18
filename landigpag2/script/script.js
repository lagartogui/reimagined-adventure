<script >
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
e.preventDefault();
let nome = document.getElementById('nome'). value;
let email = document.getElementById('email').value;
console.log(nome,email);
let data ={
    nome,
    email,
}
let convertData = JSON.stringify(data);

localStorage.setItem('lead', convertData)

let content = document.getElementById('content')
let carregando = '<p>carregando...</p>'
let Confirmado = '<p >Confirmado</p>'
content.innerHTML = carregando
setTimeout (() => {
    content.innerHTML = Confirmado
}, 1000)
})
</script>

