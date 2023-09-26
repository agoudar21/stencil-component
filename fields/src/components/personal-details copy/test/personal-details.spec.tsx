import { newSpecPage } from '@stencil/core/testing';
import { NewPersonal } from '../new-personal';

describe('new-personal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NewPersonal],
      html: `<new-personal></new-personal>`,
    });
    expect(page.root).toEqualHtml(`
      <new-personal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </new-personal>
    `);
  });
});
