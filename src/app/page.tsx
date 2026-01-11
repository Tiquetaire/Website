'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './components/Logo';
import { translations, Language } from './translations';
import styles from './page.module.css';

export default function Home() {
  const [language, setLanguage] = useState<Language>('ca');
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className="container">
          <div className={styles.navContent}>
            <div className={styles.logo} onClick={() => scrollToSection('top')}>
              <Logo className={styles.logoIcon} width={140} height={40} />
            </div>

            <div className={styles.navLinks}>
              <button onClick={() => scrollToSection('features')} className={styles.navLink}>
                {t.nav.features}
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className={styles.navLink}>
                {t.nav.howItWorks}
              </button>
              <button onClick={() => scrollToSection('download')} className={styles.navLink}>
                {t.nav.download}
              </button>
            </div>

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

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className="badge animate-fade-in-up">{t.hero.badge}</span>
              <h1 className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                {t.hero.title}
              </h1>
              <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {t.hero.subtitle}
              </p>
              <div className={styles.heroCta} style={{ animationDelay: '0.3s' }}>
                <a
                  href="https://github.com/krosk93/ATMCTReader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {t.hero.cta}
                </a>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="btn btn-secondary"
                >
                  {t.hero.ctaSecondary}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.phoneFrame}>
                <div className={styles.phoneScreen}>
                  <div className={styles.appPreview}>
                    {/* App Top Bar */}
                    <div className={styles.appTopBar}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                      <span className={styles.appTopTitle}>Visor Targeta</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                        <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
                      </svg>
                    </div>

                    {/* Card Visualization */}
                    <div className={styles.cardVisualization}>
                      <div className={styles.cardRegion}>Àrea de Girona</div>
                      <div className={styles.cardNumber}>
                        <div>231267</div>
                        <div>3013-8581-5AXX</div>
                      </div>
                      <div className={styles.cardExpiry}>
                        <span>Caducitat: 19/12/2031</span>
                        <div className={styles.cardIcons}>
                        </div>
                      </div>
                    </div>

                    {/* Current Ticket Section */}
                    <div className={styles.appSection}>
                      <div className={styles.sectionTitle}>Títol actual</div>
                      <div className={styles.ticketItem}>
                        <div className={styles.ticketIcon}>
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20,8H4V6H20M20,14H4V12H20M20,20H4V18H20M2,4H22V8H2M2,10H22V14H2M2,16H22V22H2" />
                          </svg>
                        </div>
                        <div className={styles.ticketDetails}>
                          <div className={styles.ticketName}>T-10 (1 zona)</div>
                          <div className={styles.ticketProgressBar}>
                            <div className={styles.ticketProgressFill}></div>
                          </div>
                          <div className={styles.ticketTrips}>8 viatges restants</div>
                        </div>
                      </div>
                    </div>

                    {/* Recharges Section */}
                    <div className={styles.appSection}>
                      <div className={styles.sectionTitle}>Recàrregues</div>
                      <div className={styles.rechargeItem}>
                        <div className={styles.rechargeIcon}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20,8H4V6H20M20,14H4V12H20M20,20H4V18H20" />
                          </svg>
                        </div>
                        <div className={styles.rechargeInfo}>
                          <div className={styles.rechargeName}>T-10/30</div>
                          <div className={styles.rechargeDate}>dimarts, 19 de desembre de 2023</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t.features.title}</h2>
            <p>{t.features.subtitle}</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className="card">
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h3>{t.features.items.instant.title}</h3>
              <p>{t.features.items.instant.description}</p>
            </div>
            <div className="card">
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">bar_chart</span>
              </div>
              <h3>{t.features.items.details.title}</h3>
              <p>{t.features.items.details.description}</p>
            </div>
            <div className="card">
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">map</span>
              </div>
              <h3>{t.features.items.multiAtm.title}</h3>
              <p>{t.features.items.multiAtm.description}</p>
              <div className={styles.atmBadges}>
                <span className="badge">{t.atmRegions.tarragona}</span>
                <span className="badge">{t.atmRegions.girona}</span>
                <span className="badge">{t.atmRegions.lleida}</span>
              </div>
            </div>
            <div className="card">
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">lock</span>
              </div>
              <h3>{t.features.items.privacy.title}</h3>
              <p>{t.features.items.privacy.description}</p>
            </div>
            <div className="card">
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">palette</span>
              </div>
              <h3>{t.features.items.modern.title}</h3>
              <p>{t.features.items.modern.description}</p>
            </div>
            <div className="card">
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">code</span>
              </div>
              <h3>{t.features.items.opensource.title}</h3>
              <p>{t.features.items.opensource.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={`section ${styles.howItWorks}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t.howItWorks.title}</h2>
            <p>{t.howItWorks.subtitle}</p>
          </div>
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepIcon}>
                <span className="material-symbols-outlined">downloading</span>
              </div>
              <h3>{t.howItWorks.steps.download.title}</h3>
              <p>{t.howItWorks.steps.download.description}</p>
            </div>
            <div className={styles.stepConnector}></div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepIcon}>
                <span className="material-symbols-outlined">contactless</span>
              </div>
              <h3>{t.howItWorks.steps.tap.title}</h3>
              <p>{t.howItWorks.steps.tap.description}</p>
            </div>
            <div className={styles.stepConnector}></div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepIcon}>
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <h3>{t.howItWorks.steps.view.title}</h3>
              <p>{t.howItWorks.steps.view.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className={`section ${styles.motivation}`}>
        <div className="container">
          <div className={`${styles.motivationCard} glass`}>
            <h2>{t.motivation.title}</h2>
            <p>{t.motivation.content}</p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className={`section ${styles.download}`}>
        <div className="container">
          <div className={styles.downloadContent}>
            <h2>{t.download.title}</h2>
            <p>{t.download.subtitle}</p>
            <div className={styles.downloadButtons}>
              <a
                href="https://github.com/krosk93/ATMCTReader"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {t.download.github}
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.oscarrovira.atmctreader" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                {t.download.googlePlay}
              </a>
            </div>
          </div>
        </div>
      </section>


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
              <h4>{t.nav.features}</h4>
              <ul>
                <li>{t.features.items.instant.title}</li>
                <li>{t.features.items.privacy.title}</li>
                <li>{t.features.items.opensource.title}</li>
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
          <div className={styles.footerDisclaimer}>
            <p>{t.footer.disclaimer}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
