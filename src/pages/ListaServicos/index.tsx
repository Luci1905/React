//estilização
import "./style.css";

//Rota
import { Link } from "react-router-dom";

//componentes
import CardServico from "../../components/CardServico";

//hooks
import { useEffect, useState } from "react";

import api from "../../utils/api";

function ListaServico() {
    //State Servico
    const [servico, setServico] = useState<any[]>([]);

    const [skillDigitado, setSkillDigitado] = useState<string>("");

    function buscarServicoPorSkill(event: any) {
        //não recarrega a pagina
        event.preventDefault();

        //filtrar servico pela skill digitada no campo buscar
        const servicosFiltrados = servico.filter((servico: any) => servico.techs.includes(skillDigitado.toLocaleUpperCase()));

        if (event.target.value === "") {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {
            //atribui valor de servico filtrado, ao state ListaServicosFiltrados 
            listarServicos();
        }
    }

    function listarServicos() {
        api.get("servicos")
            .then((response: any) => {
                console.log(response);
                setServico(response.data)
            })
            .catch((error: any) => {
                console.log("Erro ao realizar uma requisição", error);
            })
    }
    useEffect(() => {
        //executa ação após o componente ser recarregado
        listarServicos();
    }, [])


    return (
        <main id="main_Listaservico">
            <div className="container container_lista_servicos">
                <div className="lista_servicos_conteudo">
                    <h1>Lista de Serviços</h1>
                    <hr />
                    <form method="post" onSubmit={buscarServicoPorSkill}>
                        <div className="wrapper_form">
                            <label htmlFor="busca">Procurar serviços</label>
                            <div className="campo-label">
                                <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." onChange={buscarServicoPorSkill}
                                    autoComplete="off" />
                                <button type="submit">Buscar</button>
                            </div>
                        </div>
                    </form>
                    <div className="wrapper_lista">
                        <ul>
                            {
                                servico.map((servico: any, indice: number) => {
                                    return <li key={indice}>
                                        <CardServico
                                            id={servico.id}
                                            valor={servico.valor}
                                            titulo={servico.nome}
                                            descricaoServico={servico.descricao}
                                            listaTechs={servico.techs}
                                        />
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </main>

    );

}

export default ListaServico;