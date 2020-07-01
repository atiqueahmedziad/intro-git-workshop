---
path: "/intro"
title: "Introduction"
order: "1A"
section: "Welcome"
description: "This pages "
---

## Workshop Objective

Hello there! Welcome to "Introduction to Git and Github" workshop. In this workshop, we are aiming to learn the following:

- Understand the necessity Git and Github.
- Learn the basics of Git.
- Learn how to manage software projects at University.
- Learn how to collaborate with others in Github.

## What is required from you to join this workshop?

- You have eagerness to learn Git and Github.
- You have willingness use Git and Github in your real life project.
- You like open source and may want to contribute to open source.
- You want to work collaborately with your project mates.
- You want to work smartly in your software projects.

## Set Up Instructions

Before we get off to the races, I have mentioned a few things for you to set up.

#### 1. [Install Git in your pc][git].

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

## Who Am I?

![Atique Ahmed Ziad](images/atique.jpg)

I am Atique Ahmed Ziad. I am working as a front-end developer at [Motif][motif], where we provide e-commerce solutions and develop apps for shopify. Currently, (as of writing) I am working as a student developer at Mozilla (well known for Firefox) on a project as a part of [Google Summer of Code (GSoC)][gsoc]. I worked with Java and Javascript extensively in my software development career.

Beside that, I am passionate about open source development. In past years, I have contributed code to number of Mozilla projects that includes Firefox OS development, Firefox Marketplace, Firefox Add-ons, Firefox DevTools, WebExtension API development. I also have a couple of open source projects in my [GitHub][github]. I love mentoring newcomers in open soruce development.

You can find me on:

- [GitHub][github]
- [LinkedIn][linkedin]

## My Setup

I use Zsh shell with [starship][starship] prompt and [hyper][hyper] as my terminal. I will [Vim][vim] as text editor for this workshop.

[github]: https://github.com/atiqueahmedziad
[linkedin]: https://www.linkedin.com/in/atiqueahmedziad/
[starship]: https://starship.rs/
[git]: https://git-scm.com/downloads
[stackoverflow-answer]: https://stackoverflow.com/questions/4492979/git-is-not-recognized-as-an-internal-or-external-command
[motif]: https://wemotif.com/
[hyper]: https://hyper.is/
[vim]: https://www.vim.org/
[gsoc]: https://summerofcode.withgoogle.com/
