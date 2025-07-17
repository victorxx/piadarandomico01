 document.getElementById('btn').onclick = function () {
        let pergunta = prompt('Digite sua piada exemplo \n PIADA DE PAULISTA:');
        if (!pergunta) {
          alert('Campo vazio. Tente novamente!');
          return;
        }
        const texto = pergunta.toLowerCase();
        const palavras_saopaulo = ['paulista', 'saopaulo', 'centrodesaopaulo'];
        const palavras_velho=['velho','idoso','velhos','terceiraidade'];





                                //velhopiadas
                                if(palavras_velho.some(palavra=>texto.includes(palavra))){
                                    document.getElementById('resultado').innerHTML=`
                                                                        <table border="1" cellpadding="8">
                                                                            <thead>
                                                                                <tr>
                                                                                <th>#</th>
                                                                                <th>Piada</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr><td>1</td><td>O velho chega no médico e diz: "Doutor, tô ficando surdo!" O médico responde: "Repete aí, por favor."</td></tr>
                                                                                <tr><td>2</td><td>Por que o velho não usa relógio? Porque ele já sabe que a hora é de ir embora!</td></tr>
                                                                                <tr><td>3</td><td>O velho pro neto: "Quando eu tinha a sua idade, não tinha celular." O neto responde: "Tá, vovô, já sei essa história."</td></tr>
                                                                                <tr><td>4</td><td>Qual o prato favorito do velho? Memória de vaca, porque esquece tudo que comeu!</td></tr>
                                                                                <tr><td>5</td><td>O velho no banco: "Quero abrir uma conta para receber minha aposentadoria." O gerente: "Só um momento, senhor, vou consultar seu CPF... Peraí, você está vivo mesmo?"</td></tr>
                                                                                <tr><td>6</td><td>O que o velho disse para o Wi-Fi? "Você poderia ser mais rápido, mocinho!"</td></tr>
                                                                                <tr><td>7</td><td>Velho pro filho: "Quando eu era jovem, tudo era tão diferente... mas o que não mudou é que você não me escuta."</td></tr>
                                                                                <tr><td>8</td><td>Por que o velho anda com um mapa? Porque o GPS dele é a memória, que só funciona às vezes.</td></tr>
                                                                                <tr><td>9</td><td>O velho foi a uma balada e disse: "Aqui é que nem festa de família, só que com menos silêncio."</td></tr>
                                                                                <tr><td>10</td><td>Por que o velho gosta de piadas? Porque são as únicas coisas que ele não esquece!</td></tr>
                                                                            </tbody>
                                                                            </table>     
                                                                                `;
                                                                                }



















































                                        //piadadesaopaulo
                                        if (palavras_saopaulo.some(palavra => texto.includes(palavra))) {
                                        document.getElementById('resultado').innerHTML = `
                                                                <table border="1" cellpadding="8">
                                                                    <thead>
                                                                    <tr>
                                                                    <th>#</th>
                                                                    <th>Piada</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr><td>1</td><td>O caipira chega a São Paulo e vai a uma venda comprar mantimentos... — Ah... qualquer um que cabe dois quilo de paulista dentro!</td></tr>
                                                                    <tr><td>2</td><td>Duas bichinhas paulistas estavam passeando nas praias do Nordeste... — Nooossa, como o povo daqui é simpático! Adorei!</td></tr>
                                                                    <tr><td>3</td><td>Um gaúcho chega em São Paulo e sai logo procurando um penico... — Ah, tchê, me vê um que caiba uns dois paulistas dentro!!!</td></tr>
                                                                    <tr><td>4</td><td>O gaúcho veio a São Paulo e ficou encantado com uma bota... — É mesmo? Então bica aqui no meu cú tchê!</td></tr>
                                                                    <tr><td>5</td><td>Lago na Cidade... — Crime não é não sinhô... É milagre!</td></tr>
                                                                    <tr><td>6</td><td>Estavam o gaúcho e o paulista andando na rua... — Passou mesmo! Passou montada na tua, inclusive!</td></tr>
                                                                    <tr><td>7</td><td>O caipira estava assistindo o jogo... — Nom nom... Futebor!</td></tr>
                                                                    <tr><td>8</td><td>Duas bichas estavam caminhando pela calçada da Avenida Paulista... — Não querida, dou eu que já estou deitada!</td></tr>
                                                                    <tr><td>9</td><td>O Baiano... — Aê, meu Rei... Tira as mãozinhas de cima de mim, que eu ainda tenho seis meses de licença médica!!!</td></tr>
                                                                    <tr><td>10</td><td>Paulista e Gaúcho conversando... — Ba tchê, então me enfia uns par de bicão po CÚ.</td></tr>
                                                                    <tr><td>11</td><td>Passagem do Trem... — Eu não quero pegar trem nenhum, não, moço. Eu quero é atravessar a linha.</td></tr>
                                                                            </tbody>
                                                                        </table>
                                                                    `;
                                                                    } 
                                                                };