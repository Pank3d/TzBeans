import style from "../shared/styles/home.module.scss"
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <section className={style.wrapperHome}>
            <div className={style.wrapperZagolovki}>
                <h1 >
                   Welcome
                </h1>
                <h2>
                    Choose a topic that interests you
                </h2>
            </div>
            <ul className={style.listOfCategory}>
                <Link className={style.listItem} to="/beans">
                    <li>Beans</li>
                </Link>
                <Link className={style.listItem} to="/facts">
                    <li>Facts</li>
                </Link>
                <Link className={style.listItem} to="/recipes">
                    <li>Recipes</li>
                </Link>
                <Link className={style.listItem} to="/combinations">
                    <li>Combinations</li>
                </Link>
                <Link className={style.listItem} to="/history">
                    <li>History</li>
                </Link>
            </ul>
        </section>
    )
}

export default Home