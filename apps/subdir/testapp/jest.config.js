module.exports = {
  name: 'subdir-testapp',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/subdir/testapp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
