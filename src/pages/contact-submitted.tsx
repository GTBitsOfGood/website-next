import styles from '@/styles/contact-submitted.module.css'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react';


const ContactSubmitted = () => {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        fetch('/contactUs.json')
          .then((response) => response.json())
          .then((jsonData) => {
            console.log(jsonData.data)
            setData(jsonData.data);

          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    }, []);

    return (
        <>
          <div className={styles.container}>
            <section>
              <div className={styles.textContainer}>
                <h1 className={styles.h1}>Thanks for reaching out!</h1>
                <p className={styles.p}>We will get back to you very soon.</p>
                <p className={styles.newsletterp}>For now, stay updated on everything BoG with our newsletter</p>
                <button className={styles.button}>
                    Get the newsletter
                    {/* <img src="rocket.logo.jpeg" alt="Logo"></img> */}
                </button>
              </div>
            </section>
            <section className={styles.imageSection}>
               <img src={data[0].artwork.src} alt={data[0].artwork.alt} />
            </section>
          </div>
        </>
      );
}

export default ContactSubmitted