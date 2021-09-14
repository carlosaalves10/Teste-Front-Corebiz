import React, { useState, useEffect } from 'react'
import { dadosProdutos } from '../../service/api'
import ProdCarousel from '../ProdCarousel'
import './style.css'

const Prod1 = (props) => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        const getData = async () => {
            setProdutos(await dadosProdutos())
        };
        getData();
    }, []);

    const { onAdd } = props
    return (
        <main>
            <div className="maxWidth">
                <div className="vitrine">
                    <h3>Mais Vendidos</h3>
                    <div id="linhaMain"></div>
                    <ProdCarousel produtos={produtos} onAdd={onAdd} />
                </div>
            </div>
        </main>
    )
} 

export default Prod1