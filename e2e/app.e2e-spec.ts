import { ShbtClusterUiPage } from './app.po';

describe('shbt-cluster-ui App', function() {
  let page: ShbtClusterUiPage;

  beforeEach(() => {
    page = new ShbtClusterUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
