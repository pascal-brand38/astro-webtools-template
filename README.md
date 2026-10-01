# Astro Webtools Template - AWT

## Usage

### Initialization

Fork this git repo

### Rebasing

To make use of new development of AWT,

```bash
git remote add AWT git@github.com:pascal-brand38/astro-webtools-template.git
git fetch AWT --all
git tag last-awt remotes/AWT/main
```

```bash
git checkout main
git fetch AWT main
git rebase --onto main last-awt remotes/AWT/main
git rebase HEAD main
git tag -d last-awt
git tag last-awt remotes/AWT/main
```
