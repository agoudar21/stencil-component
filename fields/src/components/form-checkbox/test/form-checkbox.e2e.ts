import { newE2EPage } from '@stencil/core/testing';

describe('form-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<form-checkbox></form-checkbox>');

    const element = await page.find('form-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
