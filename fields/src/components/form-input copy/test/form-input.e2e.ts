import { newE2EPage } from '@stencil/core/testing';

describe('input-new', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-new></input-new>');

    const element = await page.find('input-new');
    expect(element).toHaveClass('hydrated');
  });
});
