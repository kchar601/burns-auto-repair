import styles from './StyleGuide.module.css';

function StyleGuide() {
  const colorPalettes = {
    text: [
      { name: 'text-50', value: '#f6f5ef' },
      { name: 'text-100', value: '#edebde' },
      { name: 'text-200', value: '#dad7be' },
      { name: 'text-300', value: '#c8c49d' },
      { name: 'text-400', value: '#b6b07c' },
      { name: 'text-500', value: '#a39c5c' },
      { name: 'text-600', value: '#837d49' },
      { name: 'text-700', value: '#625e37' },
      { name: 'text-800', value: '#413e25' },
      { name: 'text-900', value: '#211f12' },
      { name: 'text-950', value: '#101009' },
    ],
    background: [
      { name: 'background-50', value: '#f5f5f0' },
      { name: 'background-100', value: '#ebebe0' },
      { name: 'background-200', value: '#d6d6c2' },
      { name: 'background-300', value: '#c2c2a3' },
      { name: 'background-400', value: '#adad85' },
      { name: 'background-500', value: '#999966' },
      { name: 'background-600', value: '#7a7a52' },
      { name: 'background-700', value: '#5c5c3d' },
      { name: 'background-800', value: '#3d3d29' },
      { name: 'background-900', value: '#1f1f14' },
      { name: 'background-950', value: '#0f0f0a' },
    ],
    primary: [
      { name: 'primary-50', value: '#f3f2f2' },
      { name: 'primary-100', value: '#e7e6e4' },
      { name: 'primary-200', value: '#ceccca' },
      { name: 'primary-300', value: '#b6b3af' },
      { name: 'primary-400', value: '#9d9995' },
      { name: 'primary-500', value: '#85807a' },
      { name: 'primary-600', value: '#6a6662' },
      { name: 'primary-700', value: '#504d49' },
      { name: 'primary-800', value: '#353331' },
      { name: 'primary-900', value: '#1b1a18' },
      { name: 'primary-950', value: '#0d0d0c' },
    ],
    secondary: [
      { name: 'secondary-50', value: '#f3f3f2' },
      { name: 'secondary-100', value: '#e6e6e5' },
      { name: 'secondary-200', value: '#cdcdcb' },
      { name: 'secondary-300', value: '#b4b4b1' },
      { name: 'secondary-400', value: '#9b9b97' },
      { name: 'secondary-500', value: '#82827d' },
      { name: 'secondary-600', value: '#686864' },
      { name: 'secondary-700', value: '#4e4e4b' },
      { name: 'secondary-800', value: '#343432' },
      { name: 'secondary-900', value: '#1a1a19' },
      { name: 'secondary-950', value: '#0d0d0c' },
    ],
    accent: [
      { name: 'accent-50', value: '#ffe6e6' },
      { name: 'accent-100', value: '#fecdcd' },
      { name: 'accent-200', value: '#fe9a9a' },
      { name: 'accent-300', value: '#fd6868' },
      { name: 'accent-400', value: '#fd3535' },
      { name: 'accent-500', value: '#fc0303' },
      { name: 'accent-600', value: '#ca0202' },
      { name: 'accent-700', value: '#970202' },
      { name: 'accent-800', value: '#650101' },
      { name: 'accent-900', value: '#320101' },
      { name: 'accent-950', value: '#190000' },
    ],
  };

  return (
    <div className={styles.styleGuide}>
      <section className={styles.section}>
        <h1>Burns Auto Repair - Style Guide</h1>
        <p className={styles.intro}>
          A comprehensive guide to the design system, components, and patterns used throughout the Burns Auto Repair website.
        </p>
      </section>

      {/* Typography Section */}
      <section className={styles.section}>
        <h2>Typography</h2>
        <div className={styles.typographyGrid}>
          <div className={styles.typographyItem}>
            <h1>Heading 1</h1>
            <p className={styles.label}>Rambla Bold · 4.21rem (67.36px)</p>
          </div>
          <div className={styles.typographyItem}>
            <h2>Heading 2</h2>
            <p className={styles.label}>Rambla Bold · 3.158rem (50.56px)</p>
          </div>
          <div className={styles.typographyItem}>
            <h3>Heading 3</h3>
            <p className={styles.label}>Rambla Bold · 2.369rem (37.92px)</p>
          </div>
          <div className={styles.typographyItem}>
            <h4>Heading 4</h4>
            <p className={styles.label}>Rambla Bold · 1.777rem (28.48px)</p>
          </div>
          <div className={styles.typographyItem}>
            <h5>Heading 5</h5>
            <p className={styles.label}>Rambla Bold · 1.333rem (21.28px)</p>
          </div>
          <div className={styles.typographyItem}>
            <p>Body Text</p>
            <p className={styles.label}>Poppins Regular · 1rem (16px)</p>
          </div>
          <div className={styles.typographyItem}>
            <small>Small Text</small>
            <p className={styles.label}>Poppins Regular · 0.75rem (12px)</p>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className={styles.section}>
        <h2>Color Palette</h2>
        {Object.entries(colorPalettes).map(([paletteKey, colors]) => (
          <div key={paletteKey} className={styles.paletteSection}>
            <h3 style={{ textTransform: 'capitalize' }}>{paletteKey}</h3>
            <div className={styles.colorGrid}>
              {colors.map((color) => (
                <div key={color.name} className={styles.colorSwatch}>
                  <div
                    className={styles.swatch}
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <p className={styles.colorName}>{color.name}</p>
                  <p className={styles.colorValue}>{color.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Buttons Section */}
      <section className={styles.section}>
        <h2>Buttons & Interactive Elements</h2>
        <div className={styles.buttonGrid}>
          <div className={styles.buttonItem}>
            <button className={styles.buttonPrimary}>Primary Button</button>
            <p className={styles.label}>Primary action</p>
          </div>
          <div className={styles.buttonItem}>
            <button className={styles.buttonSecondary}>Secondary Button</button>
            <p className={styles.label}>Secondary action</p>
          </div>
          <div className={styles.buttonItem}>
            <button className={styles.buttonAccent}>Accent Button</button>
            <p className={styles.label}>Accent/CTA</p>
          </div>
        </div>
      </section>

      {/* Spacing Section */}
      <section className={styles.section}>
        <h2>Spacing Scale</h2>
        <div className={styles.spacingGrid}>
          <div className={styles.spacingItem}>
            <div className={styles.spacingExample} style={{ height: '0.5rem' }}></div>
            <p className={styles.label}>0.5rem (8px)</p>
          </div>
          <div className={styles.spacingItem}>
            <div className={styles.spacingExample} style={{ height: '1rem' }}></div>
            <p className={styles.label}>1rem (16px)</p>
          </div>
          <div className={styles.spacingItem}>
            <div className={styles.spacingExample} style={{ height: '1.5rem' }}></div>
            <p className={styles.label}>1.5rem (24px)</p>
          </div>
          <div className={styles.spacingItem}>
            <div className={styles.spacingExample} style={{ height: '2rem' }}></div>
            <p className={styles.label}>2rem (32px)</p>
          </div>
          <div className={styles.spacingItem}>
            <div className={styles.spacingExample} style={{ height: '3rem' }}></div>
            <p className={styles.label}>3rem (48px)</p>
          </div>
          <div className={styles.spacingItem}>
            <div className={styles.spacingExample} style={{ height: '4rem' }}></div>
            <p className={styles.label}>4rem (64px)</p>
          </div>
        </div>
      </section>

      {/* Cards & Components */}
      <section className={styles.section}>
        <h2>Component Examples</h2>
        <div className={styles.componentGrid}>
          <div className={styles.card}>
            <h4>Card Component</h4>
            <p>A reusable card container for displaying content with consistent styling and spacing.</p>
          </div>
          <div className={styles.card}>
            <h4>Another Card</h4>
            <p>Cards can contain headings, text, images, and other components within the card container.</p>
          </div>
          <div className={styles.card}>
            <h4>Third Card</h4>
            <p>Use cards for services, testimonials, features, and other content sections throughout the site.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StyleGuide;
