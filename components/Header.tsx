import Styles from "./header.module.scss"

export default function HeaderMain(){
    return(
        <>
        <header className={Styles.container}>
            <div className={Styles.logo}>
                <p className={Styles.year}>2024 -</p>
                <h1 className={Styles.title}>Vacation Plan</h1>
            </div>
            <ul  className={Styles.menu}>
                <li><button>Register Vacation</button></li>
            </ul>
        </header>
        </>
    )
}