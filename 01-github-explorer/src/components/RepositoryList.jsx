import React, { useEffect, useState } from 'react';
import RepositoryItem from './RepositoryItem';

// import { Container } from './styles';


function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    console.log('teste');

    useEffect (() => {
        fetch('http://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, [])

    return (
        <section>
            <h1> Lista de repositórios </h1>

            <ul> 
                {repositories.map((repository, idx) => {
                    return <RepositoryItem key={idx} repository={repository}/>
                })}
            </ul>
        </section>
    );
}

export default RepositoryList;