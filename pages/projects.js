import Page from '../components/Page';

// export default () => <Page />;

class Projects extends React.Component {
  static async getInitialProps({ query }) {
    console.log('SLUG', query.id);
    return {};
  }
  render() {
    return <Page id="query.id" />;
  }
}

export default Projects;
