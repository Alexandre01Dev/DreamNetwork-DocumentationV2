import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Understand',
    Svg: require('@site/static/img/undraw_projections_re_ulc6.svg').default,
    description: (
      <>
        Here you can find all the information on how to use our solutions
      </>
    ),
  },
  {
    title: 'Stay up to date',
    Svg: require('@site/static/img/undraw_online_test_re_kyfx.svg').default,
    description: (
      <>
        In our blog, you will be updated about all the new news about our solutions. Tips and concrete explanations on used technologies will also be put online.
      </>
    ),
  },
  {
    title: 'API Documentation',
    Svg: require('@site/static/img/undraw_dev_productivity_re_fylf.svg').default,
    description: (
      <>
        There is also a lot of documentation to help you understand the DreamNetwork libraries. You'll see, it's not too complicated !
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
