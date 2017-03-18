import { PsaximoPage } from './app.po';

describe('psaximo App', () => {
  let page: PsaximoPage;

  beforeEach(() => {
    page = new PsaximoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
