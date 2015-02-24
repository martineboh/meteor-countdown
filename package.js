Package.describe({
    name: 'lee:countdown',
    version: '2.5.2',
    // Brief, one-line summary of the package.
    summary: 'Meteor wrapper for Countdown.js v2.5.2',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/leebenson/meteor-countdown',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Npm.depends({
    "lee-countdown": "2.5.2"
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.3.1');
    api.addFiles('server.js', ['server']);
    api.addFiles('client.js', ['client']);
    api.export('countdown');
});