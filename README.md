# Astro Webtools Template - AWT

## Usage

### Initialization

* Browse to [https://github.com/pascal-brand38/astro-webtools-template](astro-webtools-template)
* Click on `Use this template`, and create your new repo.
* Clone it locally: `git clone git@github.com:pascal-brand38/XXX.git`


```bash
cd XXX
git remote add AWT git@github.com:pascal-brand38/astro-webtools-template.git
git fetch AWT
git tag last-awt remotes/AWT/main
git push --tags
pnpm install
```

### Rebasing

To make use of new development of AWT,

```bash
git checkout main
git fetch AWT main
git rebase --onto main last-awt remotes/AWT/main
git rebase HEAD main && git push
git tag -d last-awt && git tag last-awt remotes/AWT/main && git push --tags --force
```
