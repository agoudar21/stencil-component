import { newSpecPage } from '@stencil/core/testing';
import { FormInput } from '../form-input';

describe('form-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FormInput],
      html: `<form-input></form-input>`,
    });
    expect(page.root).toEqualHtml(`
      <form-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </form-input>
    `);
  });
});
