'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';
import { translations, Language } from '../translations';
import styles from '../page.module.css';

export default function PrivacyPage() {
    const [language, setLanguage] = useState<Language>('ca');
    const t = translations[language];

    return (
        <div className={styles.mainContainer}>
            {/* Navigation */}
            <nav className={`${styles.nav} ${styles.navScrolled}`}>
                <div className="container">
                    <div className={styles.navContent}>
                        <Link href="/" className={styles.logo}>
                            <Logo className={styles.logoIcon} width={140} height={40} />
                        </Link>

                        <div className={styles.languageSwitcher}>
                            {(['ca', 'es', 'en'] as Language[]).map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setLanguage(lang)}
                                    className={`${styles.langBtn} ${language === lang ? styles.langBtnActive : ''}`}
                                >
                                    {lang.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <main className="section" style={{ minHeight: '60vh', paddingTop: '120px' }}>
                <div className="container">
                    <div className={styles.privacyCard} style={{ textAlign: 'left', maxWidth: '900px' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '2rem', display: 'block' }}>
                            shield
                        </span>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {t.privacy.title}
                        </h1>
                        <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>{t.privacy.lastUpdate}</p>

                            <p style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '2rem' }}>{t.privacy.developer}</p>

                            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(242, 140, 0, 0.05)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--primary)' }}>
                                <p>{t.footer.disclaimer}</p>
                            </div>

                            <section style={{ marginBottom: '2.5rem' }}>
                                <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{t.privacy.sections.introduction.title}</h2>
                                <p>{t.privacy.sections.introduction.content}</p>
                            </section>

                            <section style={{ marginBottom: '2.5rem' }}>
                                <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{t.privacy.sections.dataCollection.title}</h2>
                                <p>{t.privacy.sections.dataCollection.content}</p>
                            </section>

                            <section style={{ marginBottom: '2.5rem' }}>
                                <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{t.privacy.sections.compliance.title}</h2>
                                <p>{t.privacy.sections.compliance.content}</p>
                            </section>

                            <section style={{ marginBottom: '2.5rem' }}>
                                <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{t.privacy.sections.thirdParty.title}</h2>
                                <p>{t.privacy.sections.thirdParty.content}</p>
                            </section>

                            <section style={{ marginBottom: '2.5rem' }}>
                                <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{t.privacy.sections.googlePlay.title}</h2>
                                <p>{t.privacy.sections.googlePlay.content}</p>
                            </section>

                            <section style={{ marginBottom: '2.5rem' }}>
                                <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{t.privacy.sections.changes.title}</h2>
                                <p>{t.privacy.sections.changes.content}</p>
                            </section>

                            <section style={{ marginBottom: '2.5rem' }}>
                                <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{t.privacy.sections.contact.title}</h2>
                                <p>{t.privacy.sections.contact.content}</p>
                                <p style={{ marginTop: '0.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                                    {t.privacy.sections.contact.email}
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerContent}>
                        <div className={styles.footerSection}>
                            <div className={styles.footerLogo}>
                                <Logo className={styles.logoIcon} width={160} height={46} />
                            </div>
                            <p>{t.footer.description}</p>
                        </div>
                        <div className={styles.footerSection}>
                            <h4>{t.features.items.multiAtm.title}</h4>
                            <ul>
                                <li>{t.atmRegions.tarragona}</li>
                                <li>{t.atmRegions.girona}</li>
                                <li>{t.atmRegions.lleida}</li>
                            </ul>
                        </div>
                        <div className={styles.footerSection}>
                            <h4>{t.privacy.title}</h4>
                            <ul>
                                <li><Link href="/privacy">{t.privacy.title}</Link></li>
                                <li>{t.footer.license}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.footerBottom}>
                        <p>{t.footer.author}</p>
                        <p>{t.footer.license}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
