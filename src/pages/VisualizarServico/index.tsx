//rotas
import { Link, useParams } from "react-router-dom";

//hooks
import { useEffect, useState } from "react";

//estilização
import "./style.css";

//axios
import api from "../../utils/api";


function VisualizarServico() {

    const { idServico } = useParams();
    const [valor, setValor] = useState<string>("");
    const [titulo, setTitulo] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [listatechs, setListaTechs] = useState<string[]>([]);

    function buscarServicoPorId () {
        //estrutura basica para consumir api
        api.get("servicos/" + idServico)
            .then((response: any) => {
                console.log(response);
                //seta os valores referente as informacoes do ususario
                setValor(response.data.valor);
                setTitulo(response.data.nome);
                setDescricao(response.data.descricao);
                setListaTechs(response.data.techs);

            })
            .catch((error: any) => console.log(error))
    }
    
    useEffect(() => {
        buscarServicoPorId();
    }, [])


    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{titulo}</h2>
                        <span>{valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                        {
                            listatechs.map((tech: string, index: number) => {
                                return <span key={index}>{tech}</span>
                            })
                        }
                    </div>
                </div>
            </div>

        </main>);

                    }
export default VisualizarServico;