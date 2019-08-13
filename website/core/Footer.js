/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Getting Started</h5>
            <a href={this.docUrl('product/overview')}>
              Product Overview
            </a>
            <a href={this.docUrl('resources/usecases')}>
              Use Cases 
            </a>
            <a href={this.docUrl('applications/elasticsearch')}>
             Applications
            </a>
          </div>
          <div>
            <h5>Platforms</h5>
            <a href={this.docUrl('platforms/aws')}>
              AWS Kubernetes
            </a>
            <a href={this.docUrl('platforms/rancher')}>
              Rancher
            </a>
            <a href={this.docUrl('platforms/konvoy')}>
              Konvoy
            </a>
            <a href={this.docUrl('platforms/openshift')}>
              OpenShift
            </a>
            <a href={this.docUrl('platforms/gke')}>
              GKE 
            </a>
            <a href={this.docUrl('platforms/eks')}>
              EKS (AWS)
            </a>
            <a href={this.docUrl('platforms/aks')}>
              AKS (Azure)
            </a>
          </div>
          <div>
            <h5>Open Source</h5>
            <a href={this.docUrl('opensource/openebs')}>
              OpenEBS 
            </a>
            <a href={this.docUrl('opensource/litmus')}>
              Litmus 
            </a>
            <a href={this.docUrl('opensource/joincommunity')}>
              Join slack community 
            </a>
          </div>
          <div>
            <h5>Support</h5>
            <a href={this.docUrl('support/supportprocess')}>
              How to get Support 
            </a>
            <a href={this.docUrl('support/supportprocess')}>
              Schedule a demo
            </a>
            <a href={this.docUrl('support/supportprocess')}>
              Knowledge Base 
            </a>
            <a href={this.docUrl('support/supportprocess')}>
              Open a support ticket 
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
