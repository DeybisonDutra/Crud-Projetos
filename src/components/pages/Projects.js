import { useLocation } from "react-router-dom"

import { useState, useEffect } from "react"

import Message from "../layout/Message"
import Container from '../layout/Container'
import Loading from "../layout/Loading"
import styles from './Projects.module.css'
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"


function Projects() {
  const [Projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectsMessage] = useState('')
  
  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => (
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
          setProjects(data)
          setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    ), 300)   
  }, [])

  function removerProject(id) {

    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json'
      },
  }).then(resp =>resp.json())
  .then(data => {
      setProjects(Projects.filter((project) => project.id !== id))
      setProjectsMessage('Projeto removido com sucesso!')
  })
  .catch(err => console.log(err))

}

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <Container customClass="start">
        {Projects.length > 0 &&
          Projects.map((project) => (
          <ProjectCard
            id={project.id}
            name={project.name}
            budget={project.budget}
            category={project.category.name}
            key={project.id}
            handleRemove={removerProject}
          />
        ))}
        {!removeLoading && <Loading />}
        {removeLoading && Projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  )
}
export default Projects