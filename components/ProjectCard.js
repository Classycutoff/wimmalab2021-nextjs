import { useTranslation } from 'next-i18next';

import Button from './Button';
import LazyImage from './LazyImage';

export default function ProjectCard() {
  const { t } = useTranslation('home');
  return (
    <>
      {/* IoTitude */}
      <div className="project-card project-card__iotitude">
        <div className="project-card__desc">
          <small>
            <span className="small">
              <span className="h4-assignments-1">{t('h4-assignments-1')}</span>
            </span>
          </small>
          <h3 className="h3-assignments-1">{t('h3-assignments-1')}</h3>
          <p className="p-assignments-1 project-card__description">{t('p-assignments-1')}</p>
          <div className="tag__container">
            <span className="tag">
              <span className="tag__title">React Native</span>
            </span>
            <span className="tag">
              <span className="tag__title">NodeJS</span>
            </span>
            <span className="tag">
              <span className="tag__title">PostgreSQL</span>
            </span>
            <span className="tag">
              <span className="tag__title">MinIO</span>
            </span>
            <span className="tag">
              <span className="tag__title">WebSocket</span>
            </span>
            <span className="tag">
              <span className="tag__title">Robot Framework</span>
            </span>
            <span className="tag">
              <span className="tag__title">Jest</span>
            </span>
            <span className="tag">
              <span className="tag__title">Kubernetes</span>
            </span>
            <span className="tag">
              <span className="tag__title">GitLab CI/CD</span>
            </span>
          </div>
          <div>
            <Button type="iotitude" href="/iotitude" locale="fi" className="margin-t" icon>
              {t('more-button')}
            </Button>
          </div>
        </div>
        <div className="project-card__image">
          <div className="project-card__img-outer-container">
            <div className="project-card__img-inner-container">
              <LazyImage
                alt="IoTitude: Haastix"
                src="/assets/iotitude/iotitude-cover.png"
                width={750}
                height={560}
                quality={95}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mysticons */}
      <div className="project-card project-card__mysticons">
        <div className="project-card__desc">
          <small>
            <span className="small">
              <span className="h4-assignments-2">{t('h4-assignments-2')}</span>
            </span>
          </small>
          <h3 className="h3-assignments-2">{t('h3-assignments-2')}</h3>
          <p className="p-assignments-2 project-card__description">{t('p-assignments-2')}</p>
          <div className="tag__container">
            <span className="tag">
              <span className="tag__title">Docker</span>
            </span>
            <span className="tag">
              <span className="tag__title">Kubernetes</span>
            </span>
            <span className="tag">
              <span className="tag__title">GitLab CI/CD</span>
            </span>
            <span className="tag">
              <span className="tag__title">Power Automate</span>
            </span>
            <span className="tag">
              <span className="tag__title">Robot Framework</span>
            </span>
            <span className="tag">
              <span className="tag__title">Ansible</span>
            </span>
          </div>
          <div>
            <Button type="mysticons" href="/mysticons" locale="fi" className="margin-t" icon>
              {t('more-button')}
            </Button>
          </div>
        </div>
        <div className="project-card__image">
          <div className="project-card__img-outer-container">
            <div className="project-card__img-inner-container">
              <LazyImage
                alt="Mysticons: Mockup"
                src="/assets/mysticons/mysticons-cover.png"
                width={750}
                height={560}
                quality={95}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overflow */}
      <div className="project-card project-card__overflow">
        <div className="project-card__desc">
          <small>
            <span className="small">
              <span className="h4-assignments-3">{t('h4-assignments-3')}</span>
            </span>
          </small>
          <h3 className="h3-assignments-3">{t('h3-assignments-3')}</h3>
          <p className="p-assignments-3 project-card__description">{t('p-assignments-3')}</p>
          <div className="tag__container">
            <span className="tag">
              <span className="tag__title">React</span>
            </span>
            <span className="tag">
              <span className="tag__title">ASP.NET Core</span>
            </span>
            <span className="tag">
              <span className="tag__title">PostgreSQL</span>
            </span>
            <span className="tag">
              <span className="tag__title">Cypress</span>
            </span>
            <span className="tag">
              <span className="tag__title">Power Automate</span>
            </span>
            <span className="tag">
              <span className="tag__title">Kubernetes</span>
            </span>
            <span className="tag">
              <span className="tag__title">GitLab CI/CD</span>
            </span>
          </div>
          <div>
            <Button type="overflow" href="/overflow" locale="fi" className="margin-t" icon>
              {t('more-button')}
            </Button>
          </div>
        </div>
        <div className="project-card__image">
          <div className="project-card__img-outer-container">
            <div className="project-card__img-inner-container">
              <LazyImage
                alt="Overflow: Future Factory Marketplace"
                src="/assets/overflow/overflow-etusivu.png"
                width={750}
                height={460}
                quality={95}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pengwin */}
      <div className="project-card project-card__pengwin">
        <div className="project-card__desc">
          <small>
            <span className="small">
              <span className="h4-assignments-4">{t('h4-assignments-4')}</span>
            </span>
          </small>
          <h3 className="h3-assignments-4">{t('h3-assignments-4')}</h3>
          <p className="p-assignments-4 project-card__description">{t('p-assignments-4')}</p>
          <div className="tag__container">
            <span className="tag">
              <span className="tag__title">React</span>
            </span>
            <span className="tag">
              <span className="tag__title">Next.js</span>
            </span>
            <span className="tag">
              <span className="tag__title">SCSS</span>
            </span>
            <span className="tag">
              <span className="tag__title">Figma</span>
            </span>
            <span className="tag">
              <span className="tag__title">Illustrator</span>
            </span>
            <span className="tag">
              <span className="tag__title">Robot Framework</span>
            </span>
            <span className="tag">
              <span className="tag__title">Kubernetes</span>
            </span>
            <span className="tag">
              <span className="tag__title">GitLab CI/CD</span>
            </span>
          </div>
          <div>
            <Button type="pengwin" href="/pengwin" locale="fi" className="margin-t" icon>
              {t('more-button')}
            </Button>
          </div>
        </div>
        <div className="project-card__image">
          <div className="project-card__img-outer-container">
            <div className="project-card__img-inner-container">
              <LazyImage
                alt="Pengwin Media: wimmalab.org"
                src="/assets/pengwin/pengwin-screenshot.png"
                width={760}
                height={498}
                quality={95}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
