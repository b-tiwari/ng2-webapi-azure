import { Ng2StartProjectWithNgCliPage } from './app.po';

describe('ng2-start-project-with-ng-cli App', function() {
  let page: Ng2StartProjectWithNgCliPage;

  beforeEach(() => {
    page = new Ng2StartProjectWithNgCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
