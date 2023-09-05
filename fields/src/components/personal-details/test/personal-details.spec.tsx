import { newSpecPage } from '@stencil/core/testing';
import { PersonalDetails } from '../personal-details';

describe('personal-details', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PersonalDetails],
      html: `<personal-details></personal-details>`,
    });
    expect(page.root).toEqualHtml(`
      <personal-details>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </personal-details>
    `);
  });
});
