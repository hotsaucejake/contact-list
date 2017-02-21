import { BooklistPage } from './app.po';

describe('booklist App', function() {
  let page: BooklistPage;

  beforeEach(() => {
    page = new BooklistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
