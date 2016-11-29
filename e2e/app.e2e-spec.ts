import { DerelictWebPage } from './app.po';

describe('derelict-web App', function() {
  let page: DerelictWebPage;

  beforeEach(() => {
    page = new DerelictWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
