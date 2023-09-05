import { newSpecPage } from '@stencil/core/testing';
import { FieldInput } from '../field-input';

describe('field-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FieldInput],
      html: `<field-input></field-input>`,
    });
    expect(page.root).toEqualHtml(`
      <field-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </field-input>
    `);
  });
});
