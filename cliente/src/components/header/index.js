import React, { useEffect, useState } from 'react';

import { GiHamburgerMenu } from "react-icons/gi";
import { FcStatistics } from "react-icons/fc";
import { IoCloseCircle } from "react-icons/io5";

//IMPORTANDO O CSS
import './header.css';

export default () => {
    const [responsive, setResponsive] = useState(false);

    const changeResponsive = () => {
        setResponsive(!responsive);
        console.log(responsive);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 619 && responsive) {
                setResponsive(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [responsive]);

    return (
        <section  className={responsive ? "mainHeader active" : "mainHeader"}>
            <div className="logo">
                <div>
                    <FcStatistics className='img'/>
                    <h2>Statistic</h2>
                </div>
                <div id='resp' className="responsive">
                    { responsive ? <IoCloseCircle onClick={() => changeResponsive()} /> : <GiHamburgerMenu onClick={() => changeResponsive()}/> }
                </div>
            </div>

            <div className="links">
                <div className="estagio">
                    <div>
                        <a href='/estagio1'>Estágio 1</a>
                        <div className="hidden_links">
                            <a>jadak</a>
                            <a>jadak</a>
                            <a>jadak</a>
                            <a>jadak</a>
                        </div>
                    </div>
                </div>
                <div className="estagio">
                    <div>
                        <a href='/estagio2'>Estágio 2</a>
                        <div className="hidden_links">
                            <a>jadak</a>
                            <a>jadak</a>
                            <a>jadak</a>
                            <a>jadak</a>
                        </div>
                    </div>
                </div>
                <div className="estagio">
                    <div>
                        <a href='/estagio3'>Estágio 3</a>
                        <div className="hidden_links">
                            <a>jadak</a>
                            <a>jadak</a>
                            <a>jadak</a>
                            <a>jadak</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="actions">
                <a href='/dashboard'>Dashboard</a>
                <a href='/dados'>Dados</a>
            </div>
        </section>
    )
}