import React from 'react';

//IMPORTANDO O CSS
import '../estagios.css';

export default () => {

    return (
        <section className='estagio'>
            <h2>Estagio 1</h2>
            <div className="estagio-content">
                <h3>Introduão:</h3>
                <p>A <span className='blue1'>Estatística</span> é uma ciência que se preocupa com:</p>
                <ul>
                    <li>Coleta;</li>
                    <li>Organização;</li>
                    <li>Descrição;</li>
                    <li>Análise;</li>
                    <li>Interpretação dos dados;</li>
                </ul>
                <p>A fim de <span className='red1'>extrair informações</span> a respeito de uma população.</p>
                <p>A Estatística fornece técnicas para estudar <span className='red1'>fenômenos aleatórios</span> com o objetivo de inferir as leis que os mesmos obedecem.</p>
            </div>

            <div className="estagio-content">
                <h3>SUBDIVISÕES DA CIÊNCIA ESTATÍSTICA</h3>
                <p><span className='blue1'>Estatística Descritiva: </span>Se preocupa com a coleta, organização e descrição dos dados experimentais.</p>
                <p><span className='blue1'>Estatística Inferencial: </span>Realiza a análise e interpretação de dados, a partir da observação de alguns dados experimentais, com o objetivo de generalizar e prever resultados, utilizando-se para isto da <span className='red1'>Teoria das Probabilidades</span>.</p>
            </div>

            <div className="estagio-content">
                <h3>CONCEITOS INICIAIS</h3>
                <p><span className='blue1'>População:</span> é um conjunto de todos os elementos (pessoas, objetos, ...) que possuem pelo menos uma <span className='red1'>característica em comum</span>, a(s) qual(is) osvrelacionam ao problema que está sendo estudado.</p>
                <p><span className='blue1'>Amostra:</span> é apenas uma parte da população, ou seja, é qualquer <span className='red1'>subconjunto</span> não vazio da população.</p>
                <p><span className='blue1'>Censo: </span>levantamento de dados referentes a todos os elementos de uma <span className='red1'>população</span>.</p>
                <p><span className='blue1'>Amostragem:</span> levantamento de dados referentes a todos os elementos de uma <span className='red1'>amostra</span>.</p>
            </div>


            <span className='blue1'></span>
            <span className='red1'></span>

            <div className="estagio-content">
                <h3>Tipos de Variáveis:</h3>
                <p><span className='blue1'>Variáveis Qualitativas -</span> Quando os valores que elas podem receber são referentes à qualidade, atributo ou categoria. </p>
                <p><span className='blue1 left'>Variáveis qualitativas nominais -</span>(a)  são caracterizadas por dados que se apresentam apenas sob o aspecto qualitativo.</p>
                <p><span className='blue1 left'>Variáveis qualitativas ordinais - </span>(b) são caracterizadas por categorias que apresentam uma ordenação natural.</p>
                <hr />
                <p><span className='blue1'>Variáveis Quantitativas -</span> quando os valores que elas podem assumir são numéricos, os quais podem ser obtidos através de uma contagem ou mensuração. </p>
                <p><span className='blue1 left'>(a) Variáveis quantitativas discretas -</span> são variáveis numéricas obtidas a partir de procedimento de contagem. </p>
                <p><span className='blue1 left'>(b) Variáveis quantitativas contínuas -</span> são variáveis numéricas cujos valores são obtidos por um procedimento de mensuração, podendo assumir quaisquer valores num intervalo dos números reais.</p>
            </div>

        </section>
    )
}