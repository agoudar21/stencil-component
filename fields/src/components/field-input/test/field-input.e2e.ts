import { newE2EPage } from '@stencil/core/testing';

describe('field-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<field-input></field-input>');

    const element = await page.find('field-input');
    expect(element).toHaveClass('hydrated');
  });
});
