import { Sma2Page } from './app.po';

describe('sma2 App', () => {
  let page: Sma2Page;

  beforeEach(() => {
    page = new Sma2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
