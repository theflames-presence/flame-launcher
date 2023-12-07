/* eslint-disable no-template-curly-in-string */
import { config as dotenv } from 'dotenv'
import { Configuration } from 'electron-builder'

dotenv()

export const config = {
  productName: 'Flame Launcher',
  appId: 'fml',
  directories: {
    output: 'build/output',
    buildResources: 'build',
    app: '.',
  },
  protocols: {
    name: 'fmcl',
    schemes: ['fmcl'],
  },
  // assign publish for auto-updater
  // set this to your own repo!
  publish: [{
    provider: 'github',
    owner: 'aislxflames',
    repo: 'flame-launcher',
  }],
  files: [{
    from: 'dist',
    to: '.',
  }, {
    from: '.',
    to: '.',
    filter: 'package.json',
  }],
  asarUnpack: [
    '**/*.worker.js',
  ],
  artifactName: 'fmcl-${version}-${platform}-${arch}.${ext}',
  appx: {
    artifactName: 'fmcl-${version}.${ext}',
    displayName: 'Flame Launcher',
    applicationId: 'AISLX.fmcl',
    identityName: 'fmcl',
    backgroundColor: 'transparent',
    publisher: process.env.APPX_PUBLISHER ? Buffer.from(process.env.APPX_PUBLISHER!, 'base64').toString('utf8') : undefined,
    publisherDisplayName: 'AISLX',
    setBuildNumber: true,
    languages: ['en-US'],
  },
  dmg: {
    artifactName: 'fmcl-${version}.${ext}',
    contents: [
      {
        x: 410,
        y: 150,
        type: 'link',
        path: '/Applications',
      },
      {
        x: 130,
        y: 150,
        type: 'file',
      },
    ],
  },
  mac: {
    icon: 'icons/dark.icns',
    darkModeSupport: true,
    target: [
      {
        target: 'zip',
        arch: ['x64', 'arm64'],
      },
      {
        target: 'dmg',
        arch: ['x64'],
      },
    ],
  },
  win: {
    certificateFile: undefined as string | undefined,
    icon: 'icons/dark.ico',
    target: [
      {
        target: 'zip',
        arch: [
          'x64',
          'ia32',
        ],
      },
      'appx',
    ],
  },
  linux: {
    desktop: {
      MimeType: 'x-scheme-handler/fmcl',
      StartupWMClass: 'fmcl',
    },
    category: 'Game',
    icon: 'icons/dark.icns',
    artifactName: 'fmcl-${version}-${arch}.${ext}',
    target: [
      { target: 'deb', arch: ['x64', 'arm64'] },
      { target: 'rpm', arch: ['x64', 'arm64'] },
      { target: 'AppImage', arch: ['x64', 'arm64'] },
      { target: 'tar.xz', arch: ['x64', 'arm64'] },
    ],
  },
  snap: {
    publish: [
      'github',
    ],
  },
} satisfies Configuration
