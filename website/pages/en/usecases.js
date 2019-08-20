/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const UnorderList = props => (
      <div >
        <div className="usecase-title">
          <h2>{
            props.items.map(item => (
              item.heading
            ))
          }</h2>
        </div>
        <ul>
          {props.items[0].items.map(item => (
            <a href={item.link}>  <li className="usecase-article">  {item.title} </li> </a>
          ))}
        </ul>
      </div>
    );
    const Welcome = () => (
      <div
        className="paddingBottom"
        style={{ textAlign: 'center' }}>
        <div className="docs-hero">
          <h1>Use Cases</h1>
        </div>

      </div>
    );

    const ListUsecases = () => (
      <Container>
        <div className="home-page-outlet">
         <h2 className="listusecase-heading bd-underline"> Dummy text</h2>
          <div className="usecase-section">
            <CloudNativeCard />
            <DatabasesCard />
            <DataScienceCard />
          </div>
          <div className="usecase-section">
            <CicdCard />
          </div>
        </div>
      </Container>
    );

    const DataScienceCard = () => (
      <UnorderList
        items=
        {[{
          heading: "Cloud Native Datascience",
          items: [{
            title: "Kafka",
            link: siteConfig.baseUrl + 'docs/usecases/datascience/kafka'
          },
          {
            title: "Kafka",
            link: siteConfig.baseUrl + 'docs/usecases/datascience/kafka'
          }]
        }
        ]}
      />
    );

    const DatabasesCard = () => (
      <UnorderList
        items=
        {[{
          heading: "Cloud Native Databases",
          items: [{
            title: "PostgreSQL",
            link: siteConfig.baseUrl + 'docs/usecases/datascience/kafka'
          },
          {
            title: "MongoDB",
            link: siteConfig.baseUrl + 'docs/usecases/datascience/kafka'
          },
          {
            title: "NuoDB",
            link: siteConfig.baseUrl + 'docs/usecases/datascience/kafka'
          },
          {
            title: "Percona",
            link: siteConfig.baseUrl + 'docs/usecases/datascience/kafka'
          },
          {
            title: "Redis",
            link: siteConfig.baseUrl + 'docs/usecases/datascience/kafka'
          },
          {
            title: "Cassandra",
            link: siteConfig.baseUrl + 'docs/usecases/datascience/kafka'
          }
          ]
        }
        ]}
      />
    );

    const CicdCard = () => (
      <UnorderList
        items=
        {[{
          heading: "Cloud Native CI/CD",
          items: [{
            title: "GitLab",
            link: siteConfig.baseUrl + 'docs/usecases/datascience/kafka'
          }]
        }
        ]}
      />
    );

    const CloudNativeCard = () => (
      <UnorderList
        items=
        {[{
          heading: "Cloud Native Infrastructure",
          items: [{
            title: "Logging",
            link: siteConfig.baseUrl + 'docs/usecases/datascience/kafka'
          },
          {
            title: "Monitoring",
            link: siteConfig.baseUrl + 'docs/usecases/datascience/kafka'
          },
          {
            title: "NFS or Shared Storage",
            link: siteConfig.baseUrl + 'docs/usecases/datascience/kafka'
          }]
        }
        ]}
      />
    );


    return (
      <div className="mainContainer">
        <Welcome />
        <ListUsecases />
      </div>
    );
  }
}

module.exports = Index;
