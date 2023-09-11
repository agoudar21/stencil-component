import { newSpecPage } from '@stencil/core/testing';
import { FormCheckbox } from '../form-checkbox';

describe('form-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FormCheckbox],
      html: `<form-checkbox></form-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <form-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </form-checkbox>
    `);
  });
});
