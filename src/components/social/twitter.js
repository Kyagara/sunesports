import fs from 'fs'
import yaml from 'js-yaml'

//export function getStaticProps() {
//  let fileContents = fs.readFileSync('src/data/twitter.yml', 'utf8');
//  let data = yaml.load(fileContents);
//
//  return data;
//}

const Twitter = () => {
    //const data = getStaticProps()

    const teste = `- text: >-
    Esse fim de semana teve MUITO jogo da Sun, foi uma maratona intensa que
    abriram nossa temporada. Tô ligado que nem… 
  date: Fev 22, 2021
  link: https://twitter.com/sunesportsbr/status/1363816098882281472
- text: >-
    O fim de semana foi cheio e bastante intenso, mas ainda não acabou. A Blazes
    para um último compromisso na noite vá… 
  date: Fev 21, 2021
  link: https://twitter.com/sunesportsbr/status/1363614835326484480
- text: >-
    Não sei se tô afim de deixar esse Amumu me abraçar não 🤔April, seu Amumu
    chora de felicidade porque é impossível… 
  date: Fev 21, 2021
  link: https://twitter.com/sunesportsbr/status/1363552328008294406
- text: >-
    Olha o nó tático! Graves e Amumu?! Quem vai jungle? Oh, um Amumu 🤯O QUE É
    ISSO! É a vitória da SUN CYGNUS na Major… 
  date: Fev 21, 2021
  link: https://twitter.com/sunesportsbr/status/1363551961249947651`
    let placeholder = yaml.load(teste)

    return (
        <div>
            <h3 className="social-title">
                <div>
                    <a target="_blank" href="https://twitter.com/sunesportsbr">
                        <span>Twitter</span>
                    </a>
                </div>
            </h3>
            <div className="twitter-container">
                <ul>
                    {placeholder.map((text) => (
                        <a target="_blank" href={text.link}>
                            <li>
                                <div className="tweet">
                                    <span>{text['text']}</span>
                                    <span className="date">{text['date']}</span>
                                </div>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Twitter
