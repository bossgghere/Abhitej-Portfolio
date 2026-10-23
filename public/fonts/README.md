# Custom Font Files

To use local webfont files for **Aeonik**:
1. Place your `Aeonik-Regular.woff2`, `Aeonik-Medium.woff2`, and `Aeonik-Bold.woff2` (or `.otf` / `.ttf`) in this directory (`public/fonts/`).
2. Add `@font-face` url rules in `src/styles/index.css` if desired.

By default, the project automatically uses:
1. System-installed `Aeonik` / `Aeonik TRIAL` if present on your machine.
2. Neo-Grotesk web font fallback: `Plus Jakarta Sans`, matching the geometric Neo-Grotesk proportions described in the style guide.
