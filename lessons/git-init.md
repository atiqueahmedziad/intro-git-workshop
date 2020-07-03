---
path: "/git-init"
title: "Git Init"
order: "3A"
description: "Git Basics"
section: "Git Basics: Part-1"
---

## Prepare the directory and files

1. Let's make a new directory named `git-workshop` in our desktop. We can use the following command to achieve that -

```shell
$ mkdir git-workshop
```

2. Enter into the directory and create one file in it. We can use the following command to achieve that -

```shell
$ cd git-workshop
$ touch hello-world.cpp
```

3. Add some content in these files. To achieve that we can use vim.

```shell
$ vi hello-world.cpp
```

Press `i` to insert content. Copy and paste the following content.

```cpp
#include <iostream>

int main() {
  std::cout << "Hello World!";
  std::getchar();
  return 0;
}
```

Press `esc` key and `:wq` to write and quit vim.

## Git [Init]

Create an empty Git repository or reinitialize an existing one. A hidden folder named `.git` is being added in the directory.

```shell
$ git init
```

[init]: https://git-scm.com/docs/git-init