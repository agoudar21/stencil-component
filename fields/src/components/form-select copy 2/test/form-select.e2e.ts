import { newE2EPage } from '@stencil/core/testing';

describe('f-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<f-select></form-select>');

    const element = await page.find('f-select');
    expect(element).toHaveClass('hydrated');
  });
});
