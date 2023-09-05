import { newE2EPage } from '@stencil/core/testing';

describe('form-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<form-select></form-select>');

    const element = await page.find('form-select');
    expect(element).toHaveClass('hydrated');
  });
});
