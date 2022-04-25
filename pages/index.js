import Head from "next/head";
import cn from "classnames";

import Header from "components/Header";
import Footer from "components/Footer";
import Slider from "components/Slider";
import DefaulSliderInner from "components/Slider/components/DefaulSliderInner";
import SliderInnerWithPhoto from "components/Slider/components/SliderInnerWithPhoto";

import styles from "styles/Home.module.scss";

const slides = [
  {
    id: 0,
    component: SliderInnerWithPhoto,
    props: {
      title: "Streams",
      description:
        "Antectiur? Sant et qui cum aut magnate prae nusdam, que vel modi nulpa dolorpost pra velia am, incient autem estis qui aut que sinienem. Et quae porem apienia tatendicaest parcil ium int essimi, con num res ma sequam, acculla ndelles esti omnis aut inti temodit intem autestis mo ilitaspero mod et lanitio doluptas delit quiam facid ea nonsedio quiderest, quas consecto inum de volessus net alit que sunt.",
      photoUrl: "/streams-photo.png",
    },
  },
  {
    id: 1,
    component: DefaulSliderInner,
    props: {
      title: "Devops",
      description: "Success in five phases",
      moreLink: "",
    },
  },
  {
    id: 2,
    component: DefaulSliderInner,
    props: {
      title: "Business Intelligence",
      description: "Making data usable efficiently",
      moreLink: "",
    },
  },
  {
    id: 3,
    component: DefaulSliderInner,
    props: {
      title: "Scouting",
      description: "Search for new technologies and business models worldwide",
      moreLink: "",
    },
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>KTM Innovation</title>
        <meta name="description" content="All about KTM innovation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className={styles.banner}>
          <div className={styles.bannerTitle}>
            What makes companies creative and competitive?
          </div>
          <div className={styles.bannerText}>
            Interdisciplinary work and thinking outside the box
            are&nbsp;the&nbsp;recipes for working in&nbsp;the future.
          </div>
          <div className={styles.scrollLine}>
            <div className={styles.scrollLabel}>Scroll</div>
          </div>
        </div>
        <div className={styles.whiteContainer}>
          <div className={styles.flex}>
            <div className={cn(styles.titleColumn, styles.title)}>
              Working in the future
            </div>
            <div>
              <div className={cn(styles.description, styles.bigDescription)}>
                Big data, artificial intelligence, blockchain or machine
                learning are the terms of the hour - this is where growth is
                generated and developed. KTM Innovation GmbH is a technology
                consultant and developer with software expertise in these
                fields.
              </div>
              <a className={styles.link}>About us</a>
            </div>
          </div>
        </div>
        <div className={styles.colorContainer}>
          <div className={cn(styles.flex, styles.left, styles.firstSection)}>
            <div
              className={cn(
                styles.titleColumn,
                styles.title,
                styles.capitalize
              )}
            >
              Want to join our team?
            </div>
            <div>
              <div className={cn(styles.description, styles.secondColumn)}>
                We are always looking for the best minds -&nbsp;looking to the
                future. No business suits,
                <br />
                but racing suits. No boredom, just short distances.
              </div>
              <a className={styles.link}>Careers at KTM</a>
            </div>
          </div>
          <img src="/team-photo.png" className={styles.right} />
          <div className={cn(styles.bigText, styles.left)}>
            <span className={styles.bold}>You.</span>&nbsp;It’s your time.
          </div>
          <div className={cn(styles.flex, styles.left)}>
            <div className={styles.titleColumn} />
            <div className={styles.suplementedDescription}>
              Our employees are like our motorcycles: It is not the year of
              construction, the mileage or the preferred terrain that counts,
              what matters is the drive. We are looking for employees who work,
              think along, live with us.
            </div>
          </div>
        </div>
        <Slider slidesData={slides} />
        <Footer />
      </main>
      <footer></footer>
    </div>
  );
}
