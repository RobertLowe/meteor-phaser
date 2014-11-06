Package.describe({
  name: 'robertlowe:meteor-phaser',
  summary: 'Phaser.io packaged for meteor',
  version: '1.1.5',
  git: 'https://github.com/robertlowe/meteor-phaser.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('phaser/build/phaser.js', 'client', {bare: true});
});

