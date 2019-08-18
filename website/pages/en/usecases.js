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
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
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
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Welcome = () => (
      <div
        className="paddingBottom"
        style={{textAlign: 'center'}}>
        <div className="docs-hero">
          <h1>Use Cases</h1>
        </div>

      </div>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const DatabasesCard = () => (
      <Container>
        <div className="featured-title">
          <h2>Cloud Native Databases</h2>
        </div>
        <div className="featured-card-block gridBlock">
        <div className="featured-card_item blockElement threeByGridBlock">
          <div className="featured-card_header">
            <h3>PostgreSQL</h3>
          </div>
          <div className="featured-card_body">
            <p>
		Features and deployment models.
            </p>
            <strong>Read the benefits</strong>
          </div>
        </div>
        <div className="featured-card_item blockElement threeByGridBlock">
          <div className="featured-card_header">
            <h3>MongoDB</h3>
          </div>
          <div className="featured-card_body">
            <p>
		User guides to help you get started.
            </p>
            <strong>User guides</strong>
          </div>
        </div>
        <div className="featured-card_item blockElement threeByGridBlock">
          <div className="featured-card_header">
            <h3>NuoDB</h3>
          </div>
          <div className="featured-card_body">
            <p>
		Data Science, logging, monitoring ...
            </p>
            <strong>Learn more</strong>
          </div>
        </div>
        <div className="featured-card_item blockElement threeByGridBlock">
          <div className="featured-card_header">
            <h3>Percona</h3>
          </div>
          <div className="featured-card_body">
            <p>
		Data Science, logging, monitoring ...
            </p>
            <strong>Learn more</strong>
          </div>
        </div>
        <div className="featured-card_item blockElement threeByGridBlock">
          <div className="featured-card_header">
            <h3>Redis</h3>
          </div>
          <div className="featured-card_body">
            <p>
		Data Science, logging, monitoring ...
            </p>
            <strong>Learn more</strong>
          </div>
        </div>
        <div className="featured-card_item blockElement threeByGridBlock">
          <div className="featured-card_header">
            <h3>Cassandra</h3>
          </div>
          <div className="featured-card_body">
            <p>
		Data Science, logging, monitoring ...
            </p>
            <strong>Learn more</strong>
          </div>
        </div>

      </div>
      </Container>
    );

    const DataScienceCard = () => (
      <Container>
        <div className="featured-title">
          <h2>Cloud Native Datascience</h2>
        </div>
        <div className="featured-card-block gridBlock">
        <div className="featured-card_item blockElement threeByGridBlock">
          <div className="featured-card_header">
            <h3>Kafka</h3>
          </div>
          <div className="featured-card_body">
            <p>
		Features and deployment models.
            </p>
            <strong>Read the benefits</strong>
          </div>
        </div>

      </div>
      </Container>
    );

    const CicdCard = () => (
      <Container>
        <div className="featured-title">
          <h2>Cloud Native CI/CD </h2>
        </div>
        <div className="featured-card-block gridBlock">
        <div className="featured-card_item blockElement threeByGridBlock">
          <div className="featured-card_header">
            <h3>GitLab</h3>
          </div>
          <div className="featured-card_body">
            <p>
		Features and deployment models.
            </p>
            <strong>Read the benefits</strong>
          </div>
        </div>
      </div>
      </Container>
    );

    const CloudNativeCard = () => (
      <Container>
        <div className="featured-title">
          <h2>Cloud Native Infrastructure </h2>
        </div>
        <div className="featured-card-block gridBlock">
        <div className="featured-card_item blockElement threeByGridBlock">
          <div className="featured-card_header">
            <h3>Logging</h3>
          </div>
          <div className="featured-card_body">
            <p>
		Features and deployment models.
            </p>
            <strong>Read the benefits</strong>
          </div>
        </div>
        <div className="featured-card_item blockElement threeByGridBlock">
          <div className="featured-card_header">
            <h3>Monitoring</h3>
          </div>
          <div className="featured-card_body">
            <p>
		User guides to help you get started.
            </p>
            <strong>User guides</strong>
          </div>
        </div>
        <div className="featured-card_item blockElement threeByGridBlock">
          <div className="featured-card_header">
            <h3>NFS or Shared Storage</h3>
          </div>
          <div className="featured-card_body">
            <p>
		Data Science, logging, monitoring ...
            </p>
            <strong>Learn more</strong>
          </div>
        </div>

      </div>
      </Container>
    );

    const TableHeadings = () => (
      <Block layout="threeColumn">
        {[
          {
            content: 'Cloud native storage and data management for enterprises is done easily using declarative YAMLS. Read more about OpenEBS Enterprise Platform and how you can use it for specific use cases.' ,
            image: `${baseUrl}img/usecases.svg`,
            imageAlign: 'top',
            title: `[Product and Use Cases](${siteConfig.baseUrl}${siteConfig.docsUrl}/product/overview)`,
            imageLink: siteConfig.baseUrl + 'docs/product/overview',

          },
          {
            content: 'Learn how to sign up with MayaData and get free access to the product. Signup and connect your clusters to either Director Online or Director Onprem and manage your OpenEBS installations easily.',
            image: `${baseUrl}img/getstarted.svg`,
            imageAlign: 'top',
            title: `[Getting Started](${siteConfig.baseUrl}${siteConfig.docsUrl}/getstarted/signup.html)`,
            imageLink: siteConfig.baseUrl + 'docs/getstarted/signup.html',
          },
          {
            content: 'Free support is available for a limited period to OpenEBS Enterprise Platform when you connect your cluster to Director Online. Learn more about our support process and get access to our product knowledge base',
            image: `${baseUrl}img/support.svg`,
            imageAlign: 'top',
            title: `[Getting Support](${siteConfig.baseUrl}${siteConfig.docsUrl}/support/supportprocess.html)`,
            imageLink: siteConfig.baseUrl + 'docs/support/supportprocess.html',
          },

        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
        <div className="mainContainer">
          <Welcome />
          <div className="home-page-outlet">
          <CloudNativeCard />
          <DatabasesCard />
          <DataScienceCard />
          <CicdCard />
          </div>
        </div>
    );
  }
}

module.exports = Index;
