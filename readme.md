Blokks Documentation
===

Requirements (need to be callable on your path)
-----------------------------------------------------
* `git` ([http://git-scm.com/](http://git-scm.com/))
* `node.js` ([https://www.npmjs.org/](https://www.npmjs.org/))
* `hugo` ([https://github.com/spf13/hugo/releases](https://github.com/spf13/hugo/releases))

Install
-------
1. `$ git clone https://github.com/patrickpietens/blokks-docs.git`
2. `$ npm install`

Setup
-----
1. Duplicate `src/config-example.yml` to `src/config.yml`
2. Edit `src/config.yml` to match your local settings

Development
-----------
`$ npm run development`

Staging (will automatically update staging.blokks.co/docs)
----------
`$ npm run staging`

Production (will automatically update blokks.co/docs)
----------
`$ npm run production`
