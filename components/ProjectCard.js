import { useTranslation } from 'next-i18next';

import Button from '../components/Button';
import LazyImage from './LazyImage';

export default function ProjectCard() {
  const { t } = useTranslation('home');
  return (
    <>
      {/* IoTitude */}
      <div className="project-card">
        <div className="project-card__desc">
          <small>
            <span className="small-additional">
              <span className="h4-assignments-1">{t('h4-assignments-1')}</span>
            </span>
          </small>
          <h3 className="h3-assignments-1">{t('h3-assignments-1')}</h3>
          <p className="p-assignments-1 project-card__description">{t('p-assignments-1')}</p>
          <Button name={t('more-button')} icon type="secondary" />
        </div>
        <div className="project-card__image">
          <div className="project-card__img-outer-container">
            <div className="project-card__img-inner-container">
              <LazyImage
                alt="Overflow: Mockup"
                src="/assets/overflow-mockup.png"
                width={1024}
                height={576}
                quality={100}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mysticons */}
      <div className="project-card">
        <div className="project-card__desc">
          <small>
            <span className="small-additional">
              <span className="h4-assignments-2">{t('h4-assignments-2')}</span>
            </span>
          </small>
          <h3 className="h3-assignments-2">{t('h3-assignments-2')}</h3>
          <p className="p-assignments-2 project-card__description">{t('p-assignments-2')}</p>
          <Button name={t('more-button')} icon type="secondary" />
        </div>
        <div className="project-card__image">
          <div className="project-card__img-outer-container">
            <div className="project-card__img-inner-container">
              <LazyImage
                alt="Overflow: Mockup"
                src="/assets/overflow-mockup.png"
                width={1024}
                height={576}
                quality={100}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Overflow */}
      <div className="project-card">
        <div className="project-card__desc">
          <small>
            <span className="small-additional">
              <span className="h4-assignments-3">{t('h4-assignments-3')}</span>
            </span>
          </small>
          <h3 className="h3-assignments-3">{t('h3-assignments-3')}</h3>
          <p className="p-assignments-3 project-card__description">{t('p-assignments-3')}</p>
          <Button name={t('more-button')} icon type="secondary" />
        </div>
        <div className="project-card__image">
          <div className="project-card__img-outer-container">
            <div className="project-card__img-inner-container">
              <LazyImage
                alt="Overflow: Mockup"
                src="/assets/overflow-mockup.png"
                width={1024}
                height={576}
                quality={100}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Pengwin */}
      <div className="project-card">
        <div className="project-card__desc">
          <small>
            <span className="small-additional">
              <span className="h4-assignments-4">{t('h4-assignments-4')}</span>
            </span>
          </small>
          <h3 className="h3-assignments-4">{t('h3-assignments-4')}</h3>
          <p className="p-assignments-4 project-card__description">{t('p-assignments-4')}</p>
          <Button name={t('more-button')} icon type="secondary" />
        </div>
        <div className="project-card__image">
          <div className="project-card__img-outer-container">
            <div className="project-card__img-inner-container">
              <LazyImage
                alt="Overflow: Mockup"
                src="/assets/overflow-mockup.png"
                width={1024}
                height={576}
                quality={100}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
