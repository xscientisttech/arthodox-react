# Arthodox-React

# Guidelines

### Issues guidelines

- Start have regular team meet, discuss daily goles and share work along with
  teams.
- Don't work on anything unless you are assigned, if you make a pull request
  without being assigned to that issue, it will be closed without being merged
- Don't work on more than one issue at a time, this is so that you don't make a
  huge pull request and others can have opportunities to work on another issue
  while you work on something else

### Pull Guidelines

- Don't work on the main branch, create your own branch by following the
  instructions here.

     ```git
     git checkout -b [branchname]
     ```

     - update local repository with latest changes using pull request.

     ```git
     git pull origin dev         <!-- as all the latest changes are in dev -->
     ```

### Uploading Guidelines

- Always take pull **before** and **after** working on any change.
- always check for conflicts.

### Project structure

```
src:
└── assets:
|   └── images:
|   └── data:
|   fav.ico
|   ...
└── common:
└── components:
|   └── [Special Component]:
|       [shared components]
|       ...
└── pages:
|       Home.jsx
|       Category.jsx
|       Products.jsx
|       ...
```
