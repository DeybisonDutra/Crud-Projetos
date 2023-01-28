import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    const navigate = useNavigate()

    function createPost(project) {
        project.cost = 0
        project.services = []
    
        fetch("http://localhost:5000/projects", {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(project),
        })
          .then((resp) => resp.json())
          .then((data) => {
            navigate('/projects', { state: { message: 'projeto criado com sucesso!' } })
          })
          .catch(err => {
            window.alert("Não foi possível salvar seu projeto")
          })
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu Projeto para depois adicionar os serviços</p>
            <ProjectForm 
                handleSubmit={createPost} 
                btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject