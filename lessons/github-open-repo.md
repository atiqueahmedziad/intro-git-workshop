---
path: "/github-open-repository"
title: "Github Open New Repository And Git Push"
order: "4A"
description: "Github Basics"
section: "Github Basics"
---

Now we have a local repository that contains some files. What if you have a project mate who will be working on the same project? How will be get access to the codes?

In other word, how can you work collaborately with your project mate and vice-versa ?

**GitHub** is the solution for this. GitHub is a cloud based platform built around the Git tool. We can upload our local repository in GitHub and it will still contain all the commits and branches with it.

## Open A New Repository

- Go to this url: https://github.com/new
- Give a name to your repository.
- No need to initialize README file.
- Keep it public.
- Create the repository. :-)

It should land you to a page with some instructions. As we already have a local repository in our PC, we need add a remote location where we want to store the local repository.

## Add Remote Location

```shell
$ git remote add origin <repo-url>
```

Here, `origin` is just a namespace.

## Check Remote Location

```shell
$ git remote -v
```

## Pushing a local repository to Remote Location

```shell
$ git push origin master
```

Here, `origin` is the remote location and `master` is the branch name.
