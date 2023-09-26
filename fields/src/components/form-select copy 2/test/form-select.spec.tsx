import { newSpecPage } from '@stencil/core/testing';
import { FSelect } from '../f-select';

describe('f-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FSelect],
      html: `<f-select></f-select>`,
    });
    expect(page.root).toEqualHtml(`
      <f-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </f-select>
    `);
  });
});
