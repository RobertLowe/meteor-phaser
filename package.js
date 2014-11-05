Package.describe({
  name: 'robertlowe:meteor-phaser',
  summary: 'Phaser.io packaged for meteor',
  version: '1.0.0',
  git: 'https://github.com/robertlowe/meteor-phaser.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  // Phaser & Pixi export to window, so we just send it as bare, it's unneccessary to export it
  api.addFiles('phaser/build/phaser.js', 'client',  {bare: true});
});

