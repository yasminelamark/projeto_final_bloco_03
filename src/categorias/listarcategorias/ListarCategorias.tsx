import { useEffect, useState } from "react";
import CardCategorias from "../cardcategorias/CardCategorias";
import { DNA } from 'react-loader-spinner';
import { listar } from "../../services/Service";
import Categoria from "../../pages/models/Categoria";

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {

        try {
            await listar('/categorias', setCategorias);
        } catch (error: any) {
            alert('Erro ao listar as Categorias')
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <>
            {categorias === undefined && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="
                bg-gray-200 
                flex 
                justify-center
                ">
                <div className="my-4 container flex flex-col">

                    {categorias.length === 0 &&
                        <span className="text-3xl text-center my-8">
                            Nenhuma categoria foi encontrada
                        </span>
                    }

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default ListarCategorias;