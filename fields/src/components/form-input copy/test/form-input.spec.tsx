import { newSpecPage } from '@stencil/core/testing';
import { InputNew } from '../input-new';

describe('input-new', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputNew],
      html: `<input></input>`,
    });
    expect(page.root).toEqualHtml(`
      <input-new>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-new>
    `);
  });
});
