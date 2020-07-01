---
path: "/git-init"
title: "Git Add and Git Commit"
order: "3B"
description: "Git Basics"
section: "Git Basics: Part-1"
---

## Checking repository status

Use the following command to see the working tree status

```shell
$ git status
```

we will find one untracked file i.e. helloWorld.cpp

## Add untracked files

Let's add the untracked file with the following command:

```shell
$ git add helloWorld.cpp
```

## Commit Changes

By doing commit, we are making a checkpoint. It record changes to the repository. We create commit with meaningful message.

```shell
$ git commit -m "hello world c++ program added"
```

## Checking Commit History

```shell
$ git log
```

There are so many ways to view commit history with git log. Check them [here][log].

[init]: https://git-scm.com/docs/git-init
[log]: https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History
