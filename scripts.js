"use strict";

// Array of objects containing Git commands and their descriptions
const gitCommands = [
  {
    command: "git init",
    description:
      "Initializes a local Git repository in the specified directory.",
  },
  {
    command: "git clone [URL]",
    description:
      "Clones a remote repository from the given URL to your local machine.",
  },
  {
    command: "git status",
    description:
      "Displays the status of your working directory and staging area.",
  },
  {
    command: "git add [file]",
    description:
      "Adds a file or changes in the working directory to the staging area.",
  },
  {
    command: 'git commit -m "[message]"',
    description: "Records changes to the repository with a message.",
  },
  {
    command: "git push",
    description: "Uploads local repository content to a remote repository.",
  },
  {
    command: "git pull",
    description:
      "Fetches and merges changes from a remote repository to your local repository.",
  },
  {
    command: "git branch",
    description: "Lists all branches in your repository.",
  },
  {
    command: "git checkout [branch]",
    description:
      "Switches to the specified branch and updates the working directory.",
  },
  {
    command: "git merge [branch]",
    description:
      "Merges the specified branch's history into the current branch.",
  },
  {
    command: "git log",
    description: "Shows the commit history for the repository.",
  },
  {
    command: "git reset [file]",
    description:
      "Removes a file from the staging area, but keeps the working directory changes.",
  },
  {
    command: "git rm [file]",
    description:
      "Deletes a file from the working directory and stages the deletion.",
  },
  {
    command: "git stash",
    description:
      "Temporarily saves changes that are not ready to be committed.",
  },
  {
    command: "git remote add origin [URL]",
    description: "Adds a remote repository URL as an alias.",
  },
];

// Array of objects containing Bash commands and their descriptions
const bashCommands = [
  { command: "ls", description: "Lists directory contents." },
  {
    command: "cd [directory]",
    description: "Changes the current directory to the specified directory.",
  },
  { command: "pwd", description: "Prints the current working directory path." },
  {
    command: "cp [source] [destination]",
    description: "Copies files or directories from source to destination.",
  },
  {
    command: "mv [source] [destination]",
    description:
      "Moves or renames files or directories from source to destination.",
  },
  { command: "rm [file]", description: "Removes (deletes) a file." },
  { command: "mkdir [directory]", description: "Creates a new directory." },
  { command: "rmdir [directory]", description: "Removes an empty directory." },
  {
    command: "touch [file]",
    description:
      "Creates a new file or updates the timestamp of an existing file.",
  },
  { command: "cat [file]", description: "Displays the contents of a file." },
  {
    command: "echo [text]",
    description: "Displays a line of text or a variable value.",
  },
  {
    command: "chmod [permissions] [file]",
    description: "Changes the file permissions.",
  },
  {
    command: "chown [owner] [file]",
    description: "Changes the owner of a file.",
  },
  {
    command: "grep [pattern] [file]",
    description: "Searches for a pattern in a file and prints matching lines.",
  },
  {
    command: "find [directory] -name [name]",
    description: "Searches for files in a directory hierarchy.",
  },
  {
    command: "wget [URL]",
    description: "Downloads files from the internet using HTTP, HTTPS, or FTP.",
  },
];

let gitCom = document.getElementById("gitCom");
// for loop function to render Git commands to html
function renderGitCommands(gitCommands) {
  for (let i = 0; i < gitCommands.length; i++) {
    let git = gitCommands[i];
    let command = gitCommands[i].command;
    let description = gitCommands[i].description;
    let commandElement = document.createElement("div");
    commandElement.innerHTML = `<strong>${command}</strong>: ${description}`;
    gitCom.appendChild(commandElement);
  }
}

renderGitCommands(gitCommands);

let bashCom = document.getElementById("bashCom");
// for loop function to render Bash commands to html
function renderBashCommands(bashCommands) {
  for (let i = 0; i < bashCommands.length; i++) {
    let bash = bashCommands[i];
    let command = bashCommands[i].command;
    let description = bashCommands[i].description;
    let commandElement = document.createElement("div");
    commandElement.innerHTML = `<strong>${command}</strong>: ${description}`;
    bashCom.appendChild(commandElement);
  }
}

renderBashCommands(bashCommands);
