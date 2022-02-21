# GlamourHaven
Automated reservation booking system for a salon
Digitalizing hair dressing and cuts
Managing of staff, services and products
<!-- omit in toc -->

#### First Time Contributing?

<!-- Everyone was a beginner at a point, and it goes without saying that, to become a master, you need to be a learner. Therefore, if this is your first time contributing, relax, read the following instructions and I promise you won't mess things up.

> And even if you do, the PR managers will catch it. But please don't. Mark won't be pleased -->

So here is a run down of how you would go about contributing:

- #### Fork your own copy of the Repository

  The first thing you will want to do is fork [this](https://github.com/ProjectXV/GlamourHaven) repository. What this mean, is that you get your own copy of this repository. You can then safely make changes to your own copy, and then later, you can submit your changes.

- #### Clone the Repository on your Local Machine

  The next thing you want to do is clone (make a copy) the GlamourHaven on your profile, to your local machine (Laptop, PC, MacBook). To do that,

  - Copy the link of your own GlobalHaven repository (the one you forked) by clicking on the green Code button.
  - Open the folder you want to work on your machine.
  - Open your favourite editor.
  - Open the terminal.
  - run `git clone [Link to your copy of the GlamourHaven repository]`.
    > The link should look like this : `https://github.com/<your username>/GlamourHaven.git`

- #### Configure the upstream

  Now that you have the local copy of GlobalHaven. There are a lot of developers contributing to the project, so you have to update your local copy very frequently. Therefore, you need to connect your local copy to the original repository. To do that :

  - copy this link here `https://github.com/ProjectXV/GlamourHaven.git`
  - go to your local machine terminal, in the project folder
  - run `git remote add upstream https://github.com/ProjectXV/GlamourHaven.git`

  Now, your local copy can fetch (update) from the original source, and you won't miss out on any update. Here is a [short video](https://youtu.be/EAMzEcg0EmY) showing the instruction.

- #### Commiting your changes

  Now, you can start making changes that relates to your issues and then commiting them. To do this, follow these instructions:

  - First, create a branch with the feat prefixing the name of the feature you are to implement.
  - For example, do this by running `git checkout -b feat/signup button component`
  - Make your changes.
  - add the changes using `git add .` or any one that serves your needs.
  - add concise commit messages, referencing your issue number with a close action.
    > e.g `git commit -m "adds signup button to the sign up page close #21"`
    >
    > What this mean is that, when your pull request is merged, Issue #21 is automatically closed.
  - run `git push origin [name of the repo you created]`
    > For the example above, you run
    >
    > `git push origin feat/signup`
    >
    > Which pushes your changes to your online copy, after which you then open a pull request.
<!--   - Here is a [Video](https://youtu.be/VY4-yw7dbY8) showing how to perform that. -->

- #### Opening Pull requests

  Now that you have updated your online copy. You will need a way to inform the PR Leads handling the original repository that your contribution is ready. To do that, you open a Pull request, which simply means that you want them to combine(merge) your changes with that of the original repository. Because, what is the essence of making changes without the changes being merged right?

  To open a pull request, immediately after the last step (commiting your changes with push):

  - Head over to your github account. And click on your own copy of the GlamourHaven repository.
  - You will see the option to open a pull request.
  - Explain what your changes does, adding images and proof (test) if needed.
  - Click the open pull request button and wait.
  - Add comments where neccesary 
<!--     Here is a [Video](https://youtu.be/3_LgvC0-Om4) showing how to go about it. -->

- #### Constantly update from upstream

  Now that you have your issues, you have forked the repository, you have cloned the repository and also set the upstream. To stay up to date and avoid merge conflicts. Before you edit anything, you need to update your local copy. Therefore, whenever you want to make any change, first run an update command like so:

  - In the directory of the project on your local machine
  - Open the terminal.
  - Run `git pull upstream dev`
    > This will check for any changes that have been made to the original repository, it will then bring those changes to your local machine and merge (merge) the changes.

## Styleguides

We advocate for clean code and well structured codes. 
<!-- It is easier said than done, which is why there are linting configurations set up in the repository. -->
Endeavour to keep the code you write clean and maintainable. Software is not only a science, but also an art.
This is a link to the [figma](https://www.figma.com/file/c4tvjreesreb0W88mCR7pu/GlamourHaven-UI-Design?node-id=1%3A3) file as a guide for the UI design and functionalities of the application

### Commit Messages

Commit messages should include concise messages about what was done and what has changed. 

Let's build this awesome application, shall we ?🎉

## Other Information

<!-- - Check if there are any linting errors by running `yarn check-format` before commiting your code. -->
- Please make sure your commit messages and pr titles give enough info about the changes you've made.

- ### Pull Requests

  - Take note of all instructions above
  - The main branch for development would be the **DEV** branch
  - Do not make a pull request with changes to the main branch
  - Create a branch in the format...Feat/(Task) e.g Feat/ Button Component and implement your work only in such branch
  - Whatever task it is that you do must be responsive on all screens
<!--   - Add a live link to your Pull Request -->
  - Make sure your commit messages and PR title are precise and meaningful, no..."it is now working" or "finally" commit messages
  - Add a screenshot of what it is that you've worked on for all screens...mobile, tab, desktop screens
  - Make sure your branch is up to date with the main branch and without conflicts before making your pull request.
  - Push your code as soon as you can [ASAP]
<!--   - Link whatever issue it is that you worked on to your pull request -->
<!--   - Add all other neccessary links you may have to your pull request inluding the link to the design -->
  - In the comment section of the pull request, document your work thoroughly(a helpful description)
<!--   - In a situation where you work on functional parts add a show `what it does` video if you can -->
  - Do `git fetch` at least twice a day to be up to date with the repo
  - Always do a git fetch or pull of the dev branch before you write code and before making your pull request
  - Your pull request must not change the work of others
  - Your work should be pixel perfect
