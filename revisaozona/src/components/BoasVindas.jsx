
// function BoasVindas(props) {
function BoasVindas({nome, mensagem}) {
  return (
    <div className="container-boasvindas">
      Olá, {nome}. Seja bem vindo! 
      {mensagem}
      {/* <button onClick={() => console.log(props)}>log</button> */}
    </div>
  )
}
export default BoasVindas
