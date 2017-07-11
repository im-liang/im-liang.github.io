import { ProfolioPage } from './app.po';

describe('profolio App', () => {
  let page: ProfolioPage;

  beforeEach(() => {
    page = new ProfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
