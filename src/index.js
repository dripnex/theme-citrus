/**
 * Citrus — satellite Dripnex theme.
 * Token layer only. Same contract as a community theme repo.
 * Must be CommonJS.
 *
 * Good vibes citrus. Lemon zest paper.
 */

const TOKENS = {
  '--bg-base': '#fff9e6',
  '--bg-surface': '#f5edd0',
  '--bg-elevated': '#fffdf5',
  '--bg-inset': '#efe4bc',
  '--bg-hover': 'rgba(58, 48, 16, 0.05)',
  '--bg-active': 'rgba(58, 48, 16, 0.09)',
  '--text-primary': '#3a3010',
  '--text-secondary': 'rgba(58, 48, 16, 0.74)',
  '--text-muted': 'rgba(58, 48, 16, 0.52)',
  '--text-faint': 'rgba(58, 48, 16, 0.34)',
  '--border': 'rgba(58, 48, 16, 0.12)',
  '--border-subtle': 'rgba(58, 48, 16, 0.07)',
  '--border-strong': 'rgba(58, 48, 16, 0.18)',
  '--accent': '#e8b000',
  '--accent-hover': '#c99600',
  '--accent-muted': 'rgba(232, 176, 0, 0.2)',
  '--accent-subtle': 'rgba(232, 176, 0, 0.1)',
  '--glass-bg': 'rgba(255, 249, 230, 0.92)',
  '--glass-border': 'rgba(58, 48, 16, 0.1)',
  '--glass-bg-menu': 'rgba(255, 253, 245, 0.96)',
  '--glass-border-menu': 'rgba(58, 48, 16, 0.1)',
  '--status-active': '#e8b000',
  '--status-on-hold': '#d4a04a',
  '--status-completed': '#5a9a62',
  '--status-dropped': '#c45a5a',
};

module.exports = {
  id: 'theme-citrus',
  name: 'Citrus',
  version: '0.1.0',
  description: "Good vibes citrus. Lemon zest paper.",

  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-citrus',
      name: 'Citrus',
      description: "Good vibes citrus. Lemon zest paper.",
      author: 'Dripnex',
      colorScheme: 'light',
      tokens: TOKENS,
    });

    return {
      dispose() {
        remove();
      },
    };
  },
};
