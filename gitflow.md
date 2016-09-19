# Git Flow

## Master and Develop
This Git Workflow uses two main branches to record the history of a project, `master` and `develop`. The `master` branch stores all of the release history while `develop` acts as an integration branch for all new features.

---

## Feature Branches
Each new feature should have its own branch and will always branch off of `develop` branch with the naming convention `yourinitials-feature/feature_name`. Whenever a feature is completed a pull request will be issued to the `develop` branch via Github. Once reviewed it should be merged into `develop` and that feature branch can be deleted. Feature branches will __never__ directly interact with the `master` branch.

Ex:
An addition to the scss is needed for button styling, it would look like this:
```
git checkout develop
git branch -b jk-feature/button_styling
git push --set-upstream origin jk-feature/button_styling
git add .
git commit -m "finish button styling"
git push
```
Once work on this feature branch is done a Pull Request to `develop` should be submitted via Github and reviewed. Once the review is completed it will be merged back into `develop` via Github and the feature branch can be deleted.

---

## Release Branches
Once it has been determined that the `develop` branch has acquired enough features for a release, a new branch should be created with `develop` as the parent following the naming convention `release/*.*.*`. Creating a release branch will begin a new release cycle and no changes should be made to the release branch with the exception of bugfixes and documentation generation. Once the release branch is ready for release it will be merged back into `master` and should be merged back into `develop` as both may have progressed since the release branch was created.

Ex:
We have determined the `develop` has enough features to release the first public version.
```
git checkout develop
git branch -b release/1.0.0
git push --set-upstream release/1.0.0
```
This release branch can still have changes made to it for hotfixes and documentation generation in which these branches should branch from the release branch and Pull Requests should be submitted directly to that release branch.

Once this release branch is ready for public release a Pull Request to `master` should be submitted via Github and reviewed. Once reviewed the release branch will be merged into `master` and `master` will serve as the production branch.


#### Semantic Versioning ([SEMVER](http://semver.org/))
Versioning should always start at  `0.1.0` following the convention of `major.minor.patch`. If the software is being used in production, it should begin with `1.0.0`.

* `major` version should be incremented when introducing backward incompatible API changes.
* `minor` version should be incremented when adding functionality that is backward compatible.
* `patch` version should be incremented when adding backward compatible bugfixes.

---

## Hotfix Branches
These are the only branches, with the exception of release branches, that should be created directly from `master` and should follow the naming convention `yourinitials-hotfix/hotfix_name`. When work on a hotfix branch is completed, a pull request will be issued to both `master` and `develop`. Once the hotfix branch is reviewed it will be merged into both `master` and `develop`.

Ex:
A hotfix needs to be made to email input form validation
```
git checkout master
git branch -b jk-hotfix/form_validation
git push --set-upstream origin jk-hotfix/form_validation
git add .
git commit -m "make hotfix on form validation for email field"
git push
```
Once work for the hotfix has been completed on this branch and the branch is pushed, a Pull Request to `develop` and `master` should be submitted and reviewed. Once review has been completed the hotfix branch will be merged into `master` and `develop` and the hotfix branch can be deleted.
