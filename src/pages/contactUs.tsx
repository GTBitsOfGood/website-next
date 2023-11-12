import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react';
import styles from '@/styles/contactUs.module.css'

const inter = Inter({ subsets: ['latin'] })

const ContactUs = () => {
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
            <section className={styles.container}>
                <div>
                    <h1 className={styles.h1}>{data[0].heading}</h1>
                    <p className={styles.infotext}> Want to learn more about Bits of Good? Send us a message or email us at <a className={styles.highlight_email} href="mailto:gt@hack4impact.org\">gt@hack4impact.org</a>
                      </p>
                    <img className={styles.image} src={data[0].artwork.src} alt={data[0].artwork.alt}/>
                    <p className={styles.addressHeading}>{data[0].addressHeading}</p>
                    <p className={styles.address}>{data[0].addressLine1}</p>
                    <p className={styles.address}>{data[0].addressLine2}</p>
                </div>
                <div style={{marginTop: '8.5rem'}}>
                    <form className={styles.form} method='POST' name='contact' action='/contact-submitted'>
                        <label className={styles.label}>Name</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Johnny Dogooder"
                            required
                        />
                        <label className={styles.label}>Email</label>
                        <input
                            className={styles.input}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="hello@nonprofit.org"
                            required
                        />
                        <label className={styles.label}>Message</label>
                        <textarea 
                            className={styles.textarea}
                            id="message"
                            name="message"
                            placeholder="I had a question about..."
                            required
                        />
                        <button className={styles.button}type="submit">Message us!</button>
                    </form>
                </div>
            </section>
         </> 
    )
}

export default ContactUs;