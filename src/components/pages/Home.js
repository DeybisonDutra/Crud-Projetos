import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'
import Media from 'react-media';

function Home() {
    return (
        <Media query="(max-width: 600px)">
            {matches =>
                matches ? (
                    <section className={styles.Home_container_Mobile}>
                        <h1>
                            Bem-Vindo ao <span>Costs</span>
                        </h1>
                        <p>Comece a Gerenciar os seus Projetos agora mesmo! </p>
                        <LinkButton to="/newproject" text="Criar Projeto" />
                        <img src={savings} alt="Costs" />
                    </section>
                ) : (
                    <section className={styles.Home_container}>
                        <h1>
                            Bem-Vindo ao <span>Costs</span>
                        </h1>
                        <p>Comece a Gerenciar os seus Projetos agora mesmo! </p>
                        <LinkButton to="/newproject" text="Criar Projeto" />
                        <img src={savings} alt="Costs" />
                    </section>
                )
            }
        </Media>

    )
}
export default Home