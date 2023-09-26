import { newE2EPage } from '@stencil/core/testing';

describe('new-personal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<new-personal></new-personal>');

    const element = await page.find('new-personal');
    expect(element).toHaveClass('hydrated');
  });
});
