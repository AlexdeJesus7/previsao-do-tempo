

const apiKey = "816ef011674e4e929cd8d0aa64cb1835"

async function colocarDadosNaTela(dados){
   document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
   document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
   document.querySelector(".text-previsao").innerHTML = dados.weather[0].description;
   document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
   document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
   try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`);
      const dados = await response.json();
      console.log(dados);
      colocarDadosNaTela(dados); // Chama a função para colocar os dados na tela
  } catch (error) {
      console.error("Erro ao buscar previsão do tempo:", error);
      alert("Ocorreu um erro ao buscar a previsão do tempo. Por favor, tente novamente.");
  }
}


function buscarPrevisaoTempo() {
   const cidade = document.querySelector(".input-city").value;

   buscarCidade(cidade);
}