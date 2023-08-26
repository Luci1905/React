//Estilização
import "./style.css"
import {Link} from "react-router-dom"

function CardServico(props: any) {
    return (
        <>
            <div className="servico">
                <div className="topo_servico">
                    <Link to={"/visualizar/servico" + props.id}><h3>{props.titulo}</h3></Link>
                    <span>R${props.valor}</span>
                </div>
                <p>{props.descricaoServico}</p>
                <div className="techs">
                    {props.listaTechs.map((tech: string, indice: number) => {
                        return <span key={indice}>{tech}</span>
                    }


                    )}
                    {/* <span>HTML</span>
                    <span>CSS</span>
                    <span>React</span> */}
                </div>
            </div>
        </>
    )

}

export default CardServico;

// ["", ""]
// 0   1