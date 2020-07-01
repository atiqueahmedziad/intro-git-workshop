---
path: "/set-up-instructions"
title: "Set Up Instructions"
order: "1B"
description: "setup"
section: "Welcome"
---

Before we get off to the races, I have mentioned a few things for you to set up.

#### 1. [Install Git][git] in your pc.

**Widows users:** After installation, you may find the "Git Bash" option upon clicking the right button. To check if Git is installed correctly, try running the `git --version` command in your git bash / command prompt / powerShell. You will see output like `git version 2.25.0` if git is installed correctly (the version number may differ).
If you get error like - `'git' is not recongized as an internal or external command` upon running the `git --version` command in command prompt / powerShell, you may need to set the Git path in environment variable of your pc. You can following this [stackoverflow answer][stackoverflow-answer] to acheive that.

**Linux and Mac users:** To check if Git is installed correctly, try running the `git --version` command in your terminal. You will see output like `git version 2.25.0` if git is installed correctly (the version number may differ). If you get error like `"git" command is not being recongized`, you may have to fix path.

#### 2. Setting Up Git

Now that you have Git installed, you should configure it so that the generated commit messages will contain your correct information. This can be achieved by using the git config command. Specifically, we need to provide our name and email address because Git embeds this information into each commit we do. We can go ahead and add this information by typing:

```shell
 $ git config --global user.name "Your Name"
 $ git config --global user.email "youremail@domain.com"
```

**NOTE:** don't use `""`. It is used for highlighting.

We can see all of the configuration items that have been set by typing:

```shell
 $ git config --list
```

You should find the `user.name` and `user.email` property to be set.

#### 3. Open account in [GitHub][github]

You need to open an account at [GitHub][github] if you don't have one already.

[git]: https://git-scm.com/downloads
[github]: https://github.com
[stackoverflow-answer]: https://stackoverflow.com/questions/4492979/git-is-not-recognized-as-an-internal-or-external-command
