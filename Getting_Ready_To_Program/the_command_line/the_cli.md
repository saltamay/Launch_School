# The Command Line Interface

## What is an interface?

According to the online Merriam Webster dictionary, an interface is "a system that is used for operating a computer: a system that controls the way information is shown to a computer user and the way the user is able to work with the computer."1 As this definition explains, an interface has two parts: 1) a display of information about what the computer is doing and 2) a method for telling the computer what to do. The command line interface is a very basic interface that uses mostly text for both the display and input components of the interface. In a nutshell, the command line allows for text-based communication with a computer. Let's look at the two parts of the command line interface: the display and the input.

## What is the Command Line used for?

Now that we've discussed what an interface is, and how the command line is an interface all on its own, let's look at what the command line is typically used for.

The most common use of the command line is what's called "system administration" or, basically, managing computers and servers. This includes installing and configuring software, monitoring computer resources, setting up web servers, and automating processes. The following is a list of common tasks for programmers:

- Restart servers
- Rename hundreds or thousands of files according to a prescribed pattern
- Manage system logs
- Set up scheduled tasks (cron jobs)
- Debug server issues
- Monkey patch code on a server
- Query data
- Set up databases and servers

... and many more.

## What are some common commands?
The following is a list of some of the most common commands used on the command line. The exercises will walk you through how to use each of them.

| Command |	Description |
| cd | Change directory |
| ls | List files and directories in current directory |
| pwd | Display the path of the current directory |
| touch | Create a file |
| mkdir | Create a directory |
| rm | Remove a file or directory. Warning: deleting a file or directory with this command is permanent! |
| cp | Copy a file or directory |
| mv | Move or rename a file or directory |
| echo | Print text to STDOUT |
| cat | Display contents of a file |
| more	| Display contents of a file, starting at the top and letting the user scroll down |
| less | Display contents of a file in an even more interactive way |
| head | Display the first part of a file |
| tail	| Display the last part of a file |
| man | Display documentation about a command |

## Exercises

1. The echo command has only one optional flag: -n, which means "Do not print the trailing newline character." Experiment with echo. Run the following commands, guessing before running each what the output will be:

```
$ echo "hello world"
$ echo hello world
$ echo -n hello world
$ echo hello world -n
$ echo "hello world" -n
$ echo "-n hello world"
```

The above commands illustrate the following ideas:

> - Arguments can be wrapped in quotes, but don't always have to be wrapped.
> - Flags come before other arguments.
> - Misplaced arguments and/or flags change the output.


2. This exercise goes over the following commands: cd, ls, and pwd.

The cd command helps you change your current directory. The ls command gives you information about what files and directories are in a certain directory. Finally, the pwd command, as mentioned above, tells you what your current directory is.

First, let's see what your current directory is:

```
$ pwd
/c/Users/salta
```

Next, you can try changing your directory with the cd command:

```
$ cd /
$ pwd
/
```

Now let's see what files and directories exist in the root directory:

```
$ ls
bin/  etc/           LICENSE.txt  ReleaseNotes.html  unins000.exe*
cmd/  git-bash.exe*  mingw64/     tmp/               unins000.msg
dev/  git-cmd.exe*   proc/        unins000.dat       usr/
```

3. The command line offers a bunch of commands to work with files and directories. This exercise will show the basic usage of the following: touch, mkdir, mv, cp, and rm.

Now, let's create a practice directory to mess around with:

```
$ # Make a directory called "practice"
$ mkdir practice
$ ls
practice

// Let's change our current directory to the "practice" directory that we just created:

$ cd practice
```

Now, in this directory we can create new files, move or rename them, copy them, and remove them. After that, we'll remove the whole "practice" directory to clean up.

```
$ # Create an empty file and verify that it got created
$ touch example.txt
$ ls
example.txt
```

The touch command created the empty file "example.txt" in the current directory. You can move or rename a file with the mv command:

```
$ # Rename example.txt to example1.txt
$ mv example.txt example1.txt
$ ls
example1.txt
$ # Make another directory
$ mkdir tmp
$ # Move example1.txt to the new "tmp" directory
$ mv example1.txt tmp/
$ ls tmp/
example1.txt
$ ls
tmp
$ # Move it back and rename it
$ mv tmp/example1.txt example2.txt
$ ls
example2.txt tmp
```

You can see from the above examples that moving or renaming a file is basically the same thing on the command line, and follows this pattern:

```
You can see from the above examples that moving or renaming a file is basically the same thing on the command line, and follows this pattern:
```

Now, let's remove the example file and then the whole practice folder:

```
$ rm example2.txt
$ ls
tmp
```

To remove a folder and all its contents, you need to specify the -r (recursive) option.

```
$ # Move one directory up
$ cd ..
$ rm -r practice
```

**Warning: using the rm command is dangerous and permanent. Do not issue this command until you know for certain you are deleting the right file. Using the rm -r command is even more dangerous, as it will delete recursively.**

4. One of the most common tasks when using the command line interface is reading the contents of a file. This exercise will go over some common commands for doing so: cat, more, less, head, and tail.

To print out all the contents of a file, use cat:

```
$ cat the_cli.md
All the content of the_cli.md printed out here.
```

To print out the first few lines of a file, use head:

```
$ head /launch_school/getting_ready_to_program/the_command_line/the_cli.md
#
# The Command Line Interface

## What is an interface?

According to the online Merriam Webster dictionary, an interface is "a system that is used for operating a computer: a system that controls the way information is shown to a computer user and the way the user is able to work with the computer."1 As this definition explains, an interface has two parts: 1) a display of information about what the computer is doing and 2) a method for telling the computer what to do. The command line interface is a very basic interface that uses mostly text for both the display and input components of the interface. In a nutshell, the command line allows for text-based communication with a computer. Let's look at the two parts of the command line interface: the display and the input.

## What is the Command Line used for?

Now that we've discussed what an interface is, and how the command line is an interface all on its own, let's look at what the command line is typically used for.
```

To print out the last few lines of a file, use tail:

```
$ tail the_cli.md

**Warning: using the rm command is dangerous and permanent. Do not issue this command until you know for certain you are deleting the right file. Using the rm -r command is even more dangerous, as it will delete recursively.**
```









