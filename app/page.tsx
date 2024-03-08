import Styles from "./page.module.scss";

export default function Home() {
  return (
    <>
    <div className={Styles.container}>
      <div className={Styles.filters}>
        <input type="text" name="search" placeholder="Search vacation"  className={Styles.search}/>
      </div>
        <ul className={Styles.listVacation}>
          <li className={Styles.item}>
            <span className={Styles.date}>Feb 22 - March 02</span>
            <h3 className={Styles.title}>Holidays in Acapulco</h3>
            <strong className={Styles.locations}>Acapulco - Guerrero, México</strong>
            <p className={Styles.description}>Acapulco is a Mexican city and port located in the state of Guerrero, in the southwest of the country, on the Pacific coast.</p>
            <div className={Styles.participants}>
              <h4>Participants</h4>
              <ul>
                <li>Valleir -</li>
                <li>Matheus -</li>
                <li>Carlos</li>
              </ul>
            </div>
            <div className={Styles.functions}>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </li>
          <li className={Styles.item}>
            <span className={Styles.date}>Feb 22 - March 02</span>
            <h3 className={Styles.title}>Holidays in Amesterdã</h3>
            <strong className={Styles.locations}>Amesterdã - Holanda</strong>
            <p className={Styles.description}>Amsterdam is the capital of the Netherlands, known for its artistic heritage, an elaborate system of canals and narrow houses with gabled roofs, legacies of the citys 17th-century golden age.</p>
            <div className={Styles.participants}>
              <h4>Participants</h4>
              <ul>
                <li>Rafael - </li>
                <li>Denis</li>
              </ul>
            </div>
            <div className={Styles.functions}>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </li>
        </ul>
    </div>
    </>
  );
}
