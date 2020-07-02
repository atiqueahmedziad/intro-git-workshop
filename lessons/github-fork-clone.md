---
path: "/github-fork-clone"
title: "Github Repository Fork And Clone"
order: "4B"
description: "Github Basics"
section: "Github Basics"
---

([Content taken from Github][github-fork])

A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.

A great example of using forks to propose changes is for bug fixes. Rather than logging an issue for a bug you've found, you can:

- Fork the repository.
- Make the fix.
- Submit a pull request to the project owner.

If the project owner likes your work, they might pull your fix into the original repository!

## Fork A Repository

- Go to this repository: url
- On top right corner, you will find the `fork` icon. Click on it.

Upon Fork is done, it will take you to the forked repository.

## Clone A Repository

To clone a repository, you will have to use the following command:

```shell
$ git clone <forked-repository-url>
```

This will download the forked repository in your pc.

[github-fork]: https://docs.github.com/en/enterprise/2.13/user/articles/fork-a-repo
