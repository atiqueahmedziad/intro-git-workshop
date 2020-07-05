---
path: "/git-merge-conflict"
title: "Git Merge Conflict (Bonus)"
order: "5C"
description: "Git Basics"
section: "Git Basics: Part-2"
---

A merge conflict is an event that occurs when Git is unable to automatically resolve differences in code between two commits.

For simplicity purpose and easy understanding, I will say merge conflicts occurs when you have uneven commit history compared to the remote repository's commit history and you are editing the same lines of the same file that has been edited by any commits which you don't have in your local repository.

## Resolving Merge Conflict

Since we have uneven commit history compared to the remote repository's commit history, first we fetch new commits which are not available in our local repository to make our local repository's commit history **even** with remote repository's commit history. To acheive that -

```shell
$ git fetch upstream
```

```shell
$ git rebase upstream/master
```

It will show you a warning of merge confict. To resolve the conflict -

- Open the conflict file in vim
- Fix the conflict
- Add the file
- Then continue rebase with the following command:

```shell
$ git rebase --continue
```

Then push the branch to remote repository -

```shell
$ git push origin branch-name
```

Congrats, you have successfully resolved the conflict.
