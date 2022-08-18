# FVM Docs

> This repo is under development. Don't trust anything.
>
> \- [_The Docs Team_](https://github.com/protocol/docs)

## Repo guide

This section lists the various files and folders and defines the purpose for each of them.

| Name | Purpose |
| --- | --- |
| `.git`, `.github` | Manage the git configurations and contain information for GitHub constant integrations. |
| `CONTRIBUTIONS.md` | A collection of guides on how to contribute to this repository. |
| `README.md` | This file. Acts as an introduction to this repo, along with how to spin up a local copy of the `fvm.filecoin.io/docs` site. |
| `archetypes/` | Used by Hugo to programmatically create new pages. |
| `assets/` | Assets like JavaScript and fonts used by Hugo to create the static site. These assets are not explorable in a built site and must be referenced before the site is built. |
| `babel.config.js` | A configuration file used for the Babel JS compiler. |
| `config/` | Contains the configuration files for Hugo. Things like the topbar menu and site title can be managed within this directory. |
| `content/` | This is where all the `.md` files live that contain the actual content of this site. This is where most contributions happen. |
| `data/` | Extra variables for Hugo to use when building pages can be supplied here. These variables act just like front-matter variables. See [Data Templates](https://gohugo.io/templates/data-templates/) in the Hugo docs for more info. |
| `functions/` | Functions that can be called from any template, partial, or shortcode within Hugo. |
| `i18n/` | Contains files specific to managing different languages. |
| `images/` | Images that aren't displayed on the website but are present in the repo for things like the `README.md` or `CONTRIBUTIONS.md` guides. |
| `layouts/` | This is where web developers will spend most of their time. This folder contains the shortcodes and partials that Hugo uses to scaffold and build the site. |
| `/node_modules/` | Where NPM throws it's packages. If you see this in GitHub, something's gone wrong. It should only show up on your computer after you run `npm install`. |
| `package-lock.json | One of the NPM configuration files. Specifies which version of packages to download. |
| `package.json` | Another one of the NPM configuration files. Specifies which packages to download but doesn't specify which _version_ of the package to grab.
| `resources/` | A cache where Hugo throws generated files like CSS and JSON after `npm run build` has been called. Unless `npm run clean` is called, Hugo will re-use these files when calling `npm run build`. |
| `static/` | Images, css, fonts, and other misc files available at `fvm.filecoin.io/` when the site is built. For example `fvm.filecoin.io/site.webmanifest`.
| `theme.toml` | A Hugo configuration file that specifies which theme to use. This file should not change that often. |

## License

Dual-licensed: [MIT](./LICENSE-MIT), [Apache Software License v2](./LICENSE-APACHE), by way of the [Permissive License Stack](https://protocol.ai/blog/announcing-the-permissive-license-stack/).
