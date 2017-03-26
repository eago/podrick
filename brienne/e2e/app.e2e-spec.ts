import { BriennePage } from './app.po';

describe('brienne App', () => {
  let page: BriennePage;

  beforeEach(() => {
    page = new BriennePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
