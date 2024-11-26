export default function Widget() {
    return (
        <div className="bg-background p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Depoimentos</h2>
        <div className="space-y-4">
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "Há alguns meses, comecei a sentir uma ansiedade tão forte que mal conseguia sair de casa. Minha mente estava sempre acelerada, e as preocupações tomavam conta de mim. Eu não consegui começar a fazer terapia. Hoje, ainda tenho momentos difíceis, mas com o apoio certo, consigo controlar minha ansiedade e retornar à paz no meu dia a dia."
            </blockquote>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "Durante muito tempo, senti uma instância profunda que só conseguia controlar com medicação. Porém, eu sabia que precisava de algo mais. A terapia me ajudou a entender melhor minhas emoções e a lidar com elas de forma saudável."
            </blockquote>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "Eu busquei por mil maneiras, entre dicas, medos, ansiedade e inseguranças. A terapia me deu as ferramentas para lidar com tudo isso. Hoje, sinto que tenho mais controle sobre a minha vida."
            </blockquote>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "A terapia não é um processo fácil, mas é extremamente gratificante. É um espaço seguro onde posso ser eu mesma e trabalhar em questões que me impedem de seguir em frente."
            </blockquote>
        </div>
        
        <div className="mt-6">
            <label htmlFor="testimonial" className="block text-muted-foreground">Deixe seu depoimento público para as pessoas ao seu redor:</label>
            <textarea id="testimonial" rows="4" className="mt-2 w-full border border-border rounded-lg p-2 focus:outline-none focus:ring focus:ring-ring" placeholder="Digite aqui..."></textarea>
            <button className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg">Postar</button>
        </div>
        </div>
    )
}