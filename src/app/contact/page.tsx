import React from "react";
import styles from "../styles/contactus.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Page = () => {
  return (
    <div className={styles.container}>
        <Header/>
      <section className={styles.contactFormSection}>
        <form className={styles.contactForm}>
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <input type="text" placeholder="Name" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>

        <div className={styles.newsLetter}>
          <h2>Our Newsletters</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quos
            mollitia quae doloremque facilis odio adipisci alias, ea eveniet?
            Veniam, pariatur. Velit accusamus eum soluta iste error, repudiandae
            libero nesciunt.
          </p>
          <input type="email" placeholder="Email" />
          <button type="submit">Submit</button>
        </div>
      </section>
      <section className={styles.contactInfoSection}>
        <div className={styles.contactInfo}>
          <div className={styles.contactInfoItem}>
            <h3>(+98) 123 456 789</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus dicta eaque dolorum reiciendis ipsam quae velit,
              adipisci quibusdam animi officiis nihil! Repellat, sint. Dolores
              quasi ad numquam nobis sapiente corporis.
            </p>
          </div>
          <div className={styles.contactInfoItem}>
            <h3>mail@olive&avery.id</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              ipsum molestias eaque pariatur, magni ipsam architecto corrupti
              harum dolorum, vitae cumque. Inventore cumque quasi repellat unde
              nam ipsum fuga laborum.
            </p>
          </div>
          <div className={styles.contactInfoItem}>
            <h3>Iran eye Iran</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
              voluptatum inventore minus delectus reiciendis, quia cumque
              accusamus, ipsam officiis alias ad! Ex, temporibus ipsa. Facere
              repudiandae alias esse magni sed.
            </p>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24306.141708598896!2d-0.11954352625608978!3d51.50332100123326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cba26bce77%3A0xe2c78e06b5b3003c!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1615991020048!5m2!1sen!2suk"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Page;
