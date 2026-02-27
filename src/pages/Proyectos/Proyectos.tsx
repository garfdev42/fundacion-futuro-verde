import { DonateButton } from '../../components/DonateButton';
import styles from './Proyectos.module.css';

export function Proyectos() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Proyectos de conservación</h1>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <p className={styles.body}>
            Nuestro primer predio de conservación tiene un área de más de 2.000 hectáreas,
            ubicado en la zona de amortiguación del Parque Nacional Natural de los Nevados.
            Está conformado por varios predios que conforman un corredor de biodiversidad
            con riqueza paisajística y ecológica. Recorriendo los senderos es posible
            apreciar la biodiversidad y las comunidades que dependen de estos ecosistemas.
          </p>
          <div className={styles.grid}>
            <article className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <img
                  src="/proyectos/reforestacion.webp"
                  alt="Reforestación y recuperación de bosques nativos"
                  className={styles.cardImage}
                />
              </div>
              <h2 className={styles.cardTitle}>
                Reforestación y recuperación de bosques nativos
              </h2>
              <p className={styles.cardText}>
                Plantación y cuidado de árboles nativos para restaurar áreas degradadas,
                conectar corredores de biodiversidad y proteger el suelo y las fuentes de agua.
              </p>
            </article>
            <article className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <img
                  src="/proyectos/imagen2.webp"
                  alt="Educación ambiental para comunidades y escuelas"
                  className={styles.cardImage}
                />
              </div>
              <h2 className={styles.cardTitle}>
                Educación ambiental para comunidades y escuelas
              </h2>
              <p className={styles.cardText}>
                Talleres, salidas de campo y materiales pedagógicos que acercan a niños,
                jóvenes y familias a la realidad de los bosques y su cuidado.
              </p>
            </article>
            <article className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <img
                  src="/proyectos/imagen3.webp"
                  alt="Protección hídrica y conservación de ecosistemas acuáticos"
                  className={styles.cardImage}
                />
              </div>
              <h2 className={styles.cardTitle}>
                Protección hídrica y conservación de ecosistemas acuáticos
              </h2>
              <p className={styles.cardText}>
                Conservación de nacimientos de agua, quebradas y humedales que sostienen la
                vida de comunidades humanas y de innumerables especies.
              </p>
            </article>
            <article className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <img
                  src="/proyectos/imagen4.webp"
                  alt="Programas sociales rurales y desarrollo sostenible"
                  className={styles.cardImage}
                />
              </div>
              <h2 className={styles.cardTitle}>
                Programas sociales rurales y desarrollo sostenible
              </h2>
              <p className={styles.cardText}>
                Acompañamiento a familias rurales para que puedan vivir del bosque sin
                destruirlo, fortaleciendo sus medios de vida y sus organizaciones comunitarias.
              </p>
            </article>
          </div>
          <div className={styles.cta}>
            <DonateButton variant="primary">Donar a los proyectos</DonateButton>
          </div>
        </div>
      </section>
    </>
  );
}
