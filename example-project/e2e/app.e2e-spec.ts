import { ExampleProjectPage } from './app.po';

describe('example-project App', function() {
  let page: ExampleProjectPage;

  beforeEach(() => {
    page = new ExampleProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
