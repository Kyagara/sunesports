import fs from 'fs'
import yaml from 'js-yaml'

//export function getStaticProps() {
//  let fileContents = fs.readFileSync('src/data/instagram.yml', 'utf8');
//  let data = yaml.load(fileContents);
//
//  return data;
//}

const Instagram = () => {
    //const data = getStaticProps()

    const teste = `
- image: ./instagram/1.webp
  name: CKNKi5uA4CW
- image: ./instagram/2.webp
  name: CJ3y2zdgDhC
- image: ./instagram/3.webp
  name: CJyrakrgooT
- image: ./instagram/1.webp
  name: CKNKi5uA4CW
- image: ./instagram/2.webp
  name: CJ3y2zdgDhC
- image: ./instagram/3.webp
  name: CJyrakrgooT
`
    let placeholder = yaml.load(teste)

    return (
        <div>
            <h3 className="social-title">
                <div>
                    <a
                        target="_blank"
                        href="https://instagram.com/sunlightesports"
                        aria-label="Instagram"
                        rel="noopener"
                    >
                        <span>Instagram</span>
                    </a>
                </div>
            </h3>
            <div className="instagram-container">
                {placeholder.map((text) => (
                    <a
                        target="_blank"
                        href={`https://instagram.com/p/${text.name}`}
                        aria-label="Instagram"
                        rel="noopener"
                        key={text.name}
                    >
                        <img
                            height="300px"
                            width="300px"
                            src={text.image}
                            href=""
                            alt=""
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Instagram