import { useState } from 'react';
import { DonateButton } from '../../components/DonateButton';
import styles from './Home.module.css';

export function Home() {
  const [activeTab, setActiveTab] = useState<'mision' | 'vision'>('mision');

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Fundación Futuro Verde</h1>
              <p className={styles.heroSubtitle}>
                Una plataforma para el cambio ambiental y social
              </p>
              <div className={styles.heroActions}>
                <DonateButton variant="primary">Donar</DonateButton>
              </div>
            </div>
            <div className={styles.heroImageWrapper}>
              <img
                src="/proyectos/hombre-invirtiendo-en-futuro-verde-5669569-4725699.webp"
                alt="Persona apoyando la conservación de bosques"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <p className={styles.alert}>
            En Colombia se talan cientos de hectáreas diarias de bosque. ¡Esto no puede seguir
            pasando!
          </p>
        </div>
      </section>
      <section className={styles.sectionAlt}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Misión y visión</h2>
          <div className={styles.tabs}>
            <button
              type="button"
              className={activeTab === 'mision' ? styles.tabActive : styles.tab}
              onClick={() => setActiveTab('mision')}
            >
              Misión
            </button>
            <button
              type="button"
              className={activeTab === 'vision' ? styles.tabActive : styles.tab}
              onClick={() => setActiveTab('vision')}
            >
              Visión
            </button>
          </div>
          {activeTab === 'mision' ? (
            <p className={styles.body}>
              Somos una organización sin fines de lucro enfocada en la conservación de los
              bosques mediante la investigación y la educación. Trabajamos en reforestación,
              educación ambiental, protección hídrica y programas sociales rurales para apoyar
              a las comunidades y al desarrollo sostenible.
            </p>
          ) : (
            <p className={styles.body}>
              Proyectamos un futuro en el que los bosques nativos se mantengan vivos y
              saludables, donde las comunidades rurales convivan en armonía con su entorno y
              las nuevas generaciones asuman un compromiso activo con el cuidado del planeta.
            </p>
          )}
          <blockquote className={styles.quote}>
            Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el
            mundo.
            <cite className={styles.cite}>— Eduardo Galeano</cite>
          </blockquote>
        </div>
      </section>
    </>
  );
}
