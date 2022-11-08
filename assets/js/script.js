let delay = -0.4

function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/img/icon-${player1}.svg" class="icones">
      <strong>${hour}</strong>
      <img src="./assets/img/icon-${player2}.svg" class="icones">
    </li>
  `
}

document.querySelector('#app').innerHTML = `
  <header>
        <img src="./assets/img/logo.svg" alt="Logo da NLW" id="logo-nlw">
    </header>

    <main id="cards">
        ${createCard('20/11', 'domingo', createGame('catar', '13:00', 'equador'))} 

        ${createCard('21/11', 'segunda', createGame('inglaterra', '10:00', 'ira') + createGame('senegal', '13:00', 'holanda')
  + createGame('estadosUnidos', '16:00', 'gales'))} 

        ${createCard('22/11', 'terça', createGame('argentina', '07:00', 'arabiaSaudita') + createGame('dinamarca', '10:00', 'tunisia')
    + createGame('mexico', '13:00', 'polonia') + createGame('franca', '16:00', 'australia'))} 
        
        ${createCard('23/11', 'quarta', createGame('marrocos', '07:00', 'croacia') + createGame('alemanha', '10:00', 'japao')
      + createGame('espanha', '13:00', 'costaRica') + createGame('belgica', '16:00', 'canada'))}

        ${createCard('24/11', 'quinta', createGame('suica', '07:00', 'camaroes') + createGame('uruguai', '10:00', 'coreiaDoSul')
        + createGame('portugal', '13:00', 'gana') + createGame('brasil', '16:00', 'servia'))}

        ${createCard('25/11', 'sexta', createGame('gales', '07:00', 'ira') + createGame('catar', '10:00', 'senegal')
          + createGame('holanda', '13:00', 'equador') + createGame('inglaterra', '16:00', 'estadosUnidos'))}

        ${createCard('26/11', 'sábado', createGame('tunisia', '07:00', 'australia') + createGame('polonia', '10:00', 'arabiaSaudita')
            + createGame('franca', '13:00', 'dinamarca') + createGame('argentina', '16:00', 'mexico'))}

        ${createCard('27/11', 'domingo', createGame('japao', '07:00', 'costaRica') + createGame('belgica', '10:00', 'marrocos')
              + createGame('croacia', '13:00', 'canada') + createGame('espanha', '16:00', 'alemanha'))}

        ${createCard('28/11', 'segunda', createGame('camaroes', '07:00', 'servia') + createGame('coreiaDoSul', '10:00', 'gana')
                + createGame('brasil', '13:00', 'suica') + createGame('portugal', '16:00', 'uruguai'))}

        ${createCard('29/11', 'terça', createGame('equador', '12:00', 'senegal') + createGame('holanda', '12:00', 'canada')
                  + createGame('ira', '16:00', 'estadosUnidos') + createGame('gales', '16:00', 'inglaterra'))}

        ${createCard('30/11', 'quarta', createGame('tunisia', '12:00', 'franca') + createGame('australia', '12:00', 'dinamarca')
                    + createGame('polonia', '16:00', 'argentina') + createGame('arabiaSaudita', '16:00', 'mexico'))}

        ${createCard('01/12', 'quinta', createGame('croacia', '12:00', 'belgica') + createGame('canada', '12:00', 'marrocos')
                      + createGame('japao', '16:00', 'espanha') + createGame('costaRica', '16:00', 'alemanha'))}

        ${createCard('02/12', 'sexta', createGame('coreiaDoSul', '12:00', 'portugal') + createGame('gana', '12:00', 'uruguai')
                        + createGame('servia', '16:00', 'suica') + createGame('camaroes', '16:00', 'brasil'))}
    </main>
`