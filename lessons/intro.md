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
- Learn how to manage our software development projects at University (Project management on Github).
- Learn how to collaborate with others in Github.

## What is required from you to join this workshop?

- You have eagerness to learn Git and Github.
- You have willingness use Git and Github in your real life project.
- You may want to contribute to open soruce projects.
- You want to work collaborately with your project mates.
- You want to work smartly in your software projects.

## Set Up Instructions

Before we get off to the races, I have a few things I would love for you to set up.

1. [Install Git in your pc][git].

   **Widows users:** After installation, you may find the "Git Bash" option upon clicking the right button. To check if Git is installed correctly, try running the `git --version` command in your git bash / command prompt / powerShell. You will see output like `git version 2.25.0` if git is installed correctly (the version number may differ).
   If you get error like - `'git' is not recongized as an internal or external command` upon running the `git --version` command in command prompt / powerShell, you may need to set the Git path in environment variable of your pc. You can following this [stackoverflow answer][stackoverflow-answer] to acheive that.

   **Linux and Mac users:** To check if Git is installed correctly, try running the `git --version` command in your terminal. You will see output like `git version 2.25.0` if git is installed correctly.. If you get error like `"git" command is not being recongized`, you may have to fix path.

2. Setting Up Git
   Now that you have Git installed, you should configure it so that the generated commit messages will contain your correct information. This can be achieved by using the git config command. Specifically, we need to provide our name and email address because Git embeds this information into each commit we do. We can go ahead and add this information by typing:

   ```
    $ git config --global user.name "Your Name"
    $ git config --global user.email "youremail@domain.com"
   ```

   **NOTE:** don't use `""`. It is used for highlighting.
   We can see all of the configuration items that have been set by typing:

   ```
    $ git config --list
   ```

## Font, Theme, and Prompt

I use [Dank Mono][dank] with [ligatures enabled][ligatures] and the default Dark+ theme for VSCode. For my shell, I use zsh with the [Spaceship ZSH][spaceship] prompt. I did pay for the Dank font (years ago, still use it and love it so totally worth it) but I know not everyone wants to pay for a font. [Cascadia Code][cascadia] from Microsoft is a great free code font with ligatures and what I use in the terminal.

## Who Am I?

![Atique Ahmed Ziad](images/atique.jpg)

I am Atique Ahmed Ziad. I am working as a front-end developer at Motif, where we build e-commerce websites (mostly over shopify) and develop apps for shopify. Currently, (as of writing) I am working as a student developer at Mozilla (well known for Firefox) on a project as a part of Google Summer of Code (GSoC). I worked with Java and Javascript extensively in my software development career.

Beside that, I am passionate about open source development. In past years, I have contributed code to number of Mozilla projects that includes Firefox OS development, Firefox Marketplace, Firefox Add-ons, Firefox Devtools, WebExtension API development. I love mentoring newcomers in open soruce development.

You can find me on:

- [GitHub][github]
- [LinkedIn][linkedin]

## Why was this course created?

![Frontend Masters Logo](images/FrontendMastersLogo.png)

I love to teach. It's a challenging task that forces you to peel back all the knowledge you've gained so you can approach someone who lacks the same experience and terminology you have. It forces you to take amorphous concepts floating in your brain and crystalize them into solid concepts that you can describe. It forces you to acknowledge your gaps in knowledge because you'll begin to question things you know others will question. For me to ever master a concept, I have to teach it to someone else.

Unfortunately life gets in the way. These courses take dozens of hours to prepare and to get right. While I'd love to just create content all day, I have a (awesome) day job at Microsoft that demands and deserves my full attention. However I'm grateful to the team at [Frontend Masters][fem] for giving me deadlines and incentive to create these courses and then allowing and encouraging me to open source the materials. Not everyone has the money to pay for these courses which is why these materials are and will be forever open source for you to reference and share. I think the video content is pretty good too and so I'd encourage you to [take a look at the videos on Frontend Masters][course] too if that's in the cards for you.

And hey, if you could take a second and [star the repo on GitHub][gh] I'd be super appreciative. It helps me reach more people.

[gh]: https://github.com/btholt/project-fox-game-site
[frontend-masters]: https://frontendmasters.com/teachers/brian-holt/
[fehh]: http://frontendhappyhour.com/
[fem]: https://frontendmasters.com/
[twitter]: https://twitter.com/holtbt
[github]: https://github.com/btholt
[linkedin]: https://www.linkedin.com/in/btholt/
[course]: https://frontendmasters.com/courses/complete-intro-containers/
[vwc]: https://vetswhocode.io/
[issue]: https://github.com/btholt/project-fox-game-site/issues
[bootcamp]: https://frontendmasters.com/bootcamp/
[web-dev]: https://frontendmasters.com/courses/web-development-v2/
[vscode]: https://code.visualstudio.com/
[nodejs]: https://nodejs.dev/how-to-install-nodejs
[nvm]: https://github.com/nvm-sh/nvm#installing-and-updating
[dank]: https://dank.sh/
[ligatures]: https://jareddev.com/blog/post/vs-code-upgrade-your-font-ligatures
[spaceship]: https://denysdovhan.com/spaceship-prompt/
[cascadia]: https://github.com/microsoft/cascadia-code#installation
[git]: https://git-scm.com/downloads
[stackoverflow-answer]: https://stackoverflow.com/questions/4492979/git-is-not-recognized-as-an-internal-or-external-command
