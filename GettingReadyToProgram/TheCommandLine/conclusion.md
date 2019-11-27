# Conclusion

## Overview of Concepts

Hopefully by this point, the command line is a bit less intimidating. While we've covered the basic concepts of the command line in this book, there's a lot more to learn. But don't get discouraged! You have all the tools you need to become an adept CLI user: this book, the man command to get more information about commands, and your favorite search engine.

Let's briefly review the concepts we discussed in this book.

- The command line is an interface to your computer's files and directories.
The command line provides a way to communicate with your computer. Its language takes the form of text-based input and output.

- Everything you do in the command line is related to files, directories, and executables.
When working in the command line, everything is a file, a directory, or an executable (and executables are files). When you run commands such as cd or ls, you are really just executing files.

- Environment variables provide context for what you do in the command line.
Context for the commands you run is provided by environment variables. Your "current directory" (PWD), the list of directories that defines the location of executables (PATH), and your home directory (HOME) are examples of environment variables that affect the commands you run and your ability to run commands. You can change environment variables on the fly using the VARIABLE="value" pattern, or you can set them more permanently by exporting the variables in your ~/.bashrc file.

- Access to files, directories, and executables is determined by their read, write, and execute permissions. There are permissions for the file's user (owner), group, and other (everyone else).
Another important piece of context is the user account you are currently logged in under. Each directory and each file is assigned to a user and a group, and permissions for reading, writing, and executing are granted to the user and group that are assigned to that directory or file. Permissions are also granted to everyone else ("other"), which includes any user that is not the user or doesn't belong to the file's group.

- Some programs provide a completely new context within the command line interface.
While the environment variables and your user account provide context for commands that you run while in the command line interface, some commands can temporarily take over handling all input and output. These commands allow users to interact more directly with databases, files, and scripts. They change the display and accept commands that aren't available in the regular command line interface, and commands that are available in the regular CLI aren't available in these other interfaces. Some of these interfaces are called "REPLs" because they Read input, Evaluate the input, Print the results, and Loop back to read more input.

## Where to Go from Here

With the basic command line skills you learned in this book, you are prepared to begin learning to program. Continue to practice what you've learned and experiment with the command line so that you can retain and improve on what you've learned. The more you use the command line, the easier it will get, and the more powerful you will become in your ability to make your computer do your bidding.