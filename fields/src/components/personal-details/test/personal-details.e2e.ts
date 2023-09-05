import { newE2EPage } from '@stencil/core/testing';

describe('personal-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<personal-details></personal-details>');

    const element = await page.find('personal-details');
    expect(element).toHaveClass('hydrated');
  });
});
