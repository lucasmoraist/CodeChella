import React from "react";

export default function Secao3() {
    return (
        <>
            <section className="secoes dias">
                <div className="data-festa">
                    <div className="linha"></div>
                    <h3 className="dia-festa">SÁBADO{"<"}11/03{">"}</h3>
                    <div className="linha"></div>
                </div>

                <div className="bandas">
                    <div className="banda">
                        <h2>System of a DOM</h2>
                    </div>

                    <div className="banda">
                        <h5>Python Maiden</h5>
                        <h5>Apollo Client 2001</h5>
                        <h5>Bon Java</h5>
                        <h5>Nick Callback</h5>
                    </div>

                    <div className="banda">
                        <h6>Linkin Promises</h6>
                        <h6>Fullstack Fighters</h6>
                        <h6>Papa React</h6>
                        <h6>Angular in Chains</h6>
                    </div>

                    <div className="banda">
                        <h4>Agnostic Front-end</h4>
                        <h4>SlipkNode</h4>
                        <h4>Pink Flutter</h4>
                        <h4>Kiss</h4>
                    </div>
                </div>
            </section>
        </>
    )
}