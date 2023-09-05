import { newSpecPage } from '@stencil/core/testing';
import { FormSelect } from '../form-select';

describe('form-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FormSelect],
      html: `<form-select></form-select>`,
    });
    expect(page.root).toEqualHtml(`
      <form-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </form-select>
    `);
  });
});
