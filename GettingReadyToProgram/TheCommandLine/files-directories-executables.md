# Files, Directories, and Executables

## The Core of the Command Line
In a desktop environment, like that of OS X, you have windows, menu bars, and the desktop to give context to what you are doing. In the command line, however, the context is solely the file system. In fact, files and directories are what make up the command line. Almost everything you do at the prompt will deal with files. Every time you type a command, you are telling the computer to execute a file.

Not only does the file system provide context for you when you're trying to work on or get information about files and directories, it also provides context for the commands you run. For example, you can use the ls command to list the files in a directory. When you run the command by itself, it uses your current directory as context, and lists the files that are in the directory you are in.

## Linux/Unix File System Legend

Let's look for a moment at some of the symbols that will help us navigate the command line:

- ```/``` The root directory or a separator when listing directories
- ```.``` The current directory (also ./) or the same level
- ```..``` The directory one level up (also ../)
- ```../..``` Two levels up
- ```~``` Your "home" directory, or the directory you are placed in when you log in.
- ```*``` The "splat" or "glob" operator. This is the wildcard of the command line and represents "any characters."

## Navigating

Navigating your computer's file system is pretty easy with the help of the File System Legend above, and a few simple commands:

- cd - change directory
- ls - list files
- pwd - display the current working directory

Let's get a feel for navigating the command line interface by opening up Terminal or logging in to your managed server or virtual machine and treading water for a bit. After logging in, type the following commands and note what happens after each step:

```
# Change directory (with no arguments)
$ cd
$ pwd
/home/ubuntu

# Change to root directory
$ cd /
$ pwd
/

# Change directory (with no arguments again)
$ cd
$ pwd
/home/ubuntu

# Go up one directory
$ cd ../
$ pwd
/home

# Show files and directories (with no arguments, it uses current directory)
$ ls
ubuntu

# Navigate into "ubuntu" directory
$ cd ubuntu
$ pwd
/home/ubuntu

# Change to ~ (home) directory
$ cd ~
$ pwd
/home/ubuntu

# Show files and directories in root directory
$ ls /
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  rootfs  run  sbin  selinux  srv  sys  tmp  usr  var

# Show files that match a certain pattern
# using the splat operator (asterisk)

# The following example may not produce the same  
# results on your system. On some systems, such as 
# Ubuntu, you may need to use sudo ls /*ot instead 
# of ls /*ot, but on others, such as a Mac, you   
# will only get error messages. What's important  
# here is to learn how to use the commands, not   
# replicate the results.

$ ls /*ot
boot root
```

Did you notice that typing cd by itself takes you to your "home" directory? Which command(s) made you "descend" into a directory? Which command(s) made you go up a directory? What was the difference in the output of ls vs. ls /? What do you think the output of ls ./ would be if you first ran cd /?

The last example shows that the splat (*) allows you to list files that match a pattern. The asterisk is the wildcard and represents any number of any characters, so *ot represents any file or directory that ends in ot.

## Managing Files and Folders

With an understanding that "where you are" in the command line provides context for your commands, and a working knowledge of navigating the command line interface, we can move on to learning to manage files and directories from the command line.

When you open up Finder in Mac or Windows Explorer in Windows, you can see manila-folder-style directories along with icons that represent documents, images, and programs. Think for a moment about some of the things that you do with the files from time to time. Do you ever move files around? Maybe sometimes you copy a file so that you can make a new version. Have you made new directories before? It's probably not too surprising by now that you can do the same things from the command line. Some of the most frequently used commands for managing files and directories on the command line are cp, mv, mkdir, touch, and rm. Their meanings are listed here:

| Command | What it does |
| --- | --- |
| cp | Copy one or more files to a new location |
| mv | Move or rename a file or directory |
| mkdir | Make a new directory |
| touch | Create a new file or update modification time if a file with that name exists |
| rm | Remove one or more files or directories |

To get acquainted with these commands, go ahead and try them out. Try the following exercises to solidify your understanding of the above commands:

1. Create a directory in your home directory called "cli-tmp".

```
$ mkdir cli-tmp
```

2. From the home directory, create a file in the cli-tmp directory called "from-home.txt".

```
$ touch cli-tmp/from-home.txt
```

3. Navigate to the cli-tmp directory, then create a file called "in-cli-tmp".

```
$ cd cli-tmp
$ touch in-cli-tmp
```

4. Try to make a directory called "in-cli-tmp" within the cli-tmp directory. What happens?

```
$ mkdir in-cli-tmp
# mkdir: cannot create directory ‘in-cli-tmp’: File exists
```

5. Remove the from-home.txt file.

```
$ rm from-home.txt
```

6. Remove the cli-tmp directory (hint use man to see how to remove a directory recursively).

```
$ cd ..
$ rm -r cli-tmp
```

7. Create a nested set of directories in your home directory: cli-tmp > parents > children > grandchildren (hint: use the -p flag to do it all at once).

```
$ mkdir -p cli-tmp/parents/children/grandchildren
```

8. Navigate to the children directory.

```
$ cd cli-tmp/parents/children
```

9. Create a file named "bob".

```
$ touch bob
```

10. Move the file named "bob" to the grandchildren directory.

```
$ mv bob grandchildren
```

11. Copy the grandchildren directory to the parents directory, and rename it "nephews".

```
$ cp -r ./grandchildren ../nephews
```

12. Copy the contents of the "nephews" directory to the "children" directory.

```
$ cp -r ../nephews/* children
```

13. View what you've done with the tree command: $ tree ~/cli-tmp.

Note: You may need to install the tree command using homebrew or a similar tool if you are on a Mac. On some versions of C9 you can install it using sudo apt-get install tree or, if that doesn't work, try sudo yum install tree.

```
$ tree ~/cli-tmp
/Users/[username]/cli-tmp/
└── parents
  ├── children
  │   ├── bob
  │   └── grandchildren
  │       └── bob
  └── nephews
      └── bob
```

14. Remove the "bob" file from the grandchildren directory.

```
$ rm -r ~cli-tmp/parents/children/grandchildren/bob
```

15. Remove the cli-tmp directory.

```
$ rm -r cli-tmp
```

## Executables

In the last chapter, we talked about the anatomy of commands, which was basically "command plus arguments." But what is a command really? As mentioned at the beginning of this chapter, a command is just a file. That's right: ls, mkdir, and cd are all files. Files that can be used as commands are called executables. Not all files are executables.

What makes an executable different from other files?

1. They have special characters at the beginning to tell the computer how to execute them.
2. They have scripts or machine language as their content.
3. They have the executable permission (we'll talk more about this later).

To run an executable, you just type its path as the first part of your input, then type in your arguments, and hit enter, like this:

```
$ echo "Hello World"
Hello World
```

When you use the echo executable, it will probably take no more than a few milliseconds to run, and the chances that it will freeze or get stuck are almost zero. Some executables, however, cause long-running processes, and it is useful at times to be able to exit out of them before they exit on their own. Some commands and executables run in a loop, and won't exit until you tell them to. Others freeze or take a lot longer than you expected, and need to be stopped short. On Unix-like systems, there is an almost ubiquitous way of exiting out of any executable's process: Ctrl + c. This key combination sends a signal to the process to terminate SIGINT

If you are using Bash commands and accidentally create an infinite loop, you can exit out of it with Ctrl + c:

```
$  while true; do echo 'Hit CTRL+C'; sleep 1; done
Hit CTRL+C
Hit CTRL+C
Hit CTRL+C
```

## Exercises

1. List the hidden files in a directory.

```
saltamayPRO ~/OneDrive/Desktop
$ ls -a
```

To only list hidden (also called dotfiles) files, you can use the following command:

```
$ ls -d /*
```

2. List the files in the parent directory. Then list the files in the parent directory's parent directory.

```
saltamayPRO ~/OneDrive/Desktop
$ ls ..
$ ls ../..
```

What happens if you run that command from the root directory?

```
$ cd /
$ ls ..
bin   home            lib64       opt   sbin  usr
boot  initrd.img      lost+found  proc  srv   var
dev   initrd.img.old  media       root  sys   vmlinuz
etc   lib             mnt         run   tmp   vmlinuz.old
```

As you can see, since the root directory doesn't have a parent directory, it just prints out the files in the root directory itself.

3. What's the difference between abc/ and /abc?

```
# abc/ -- The path abc/ (also ./abc and ./abc/) are paths relative to your current working directory. 
# /abc -- The path /abc, however, is the file or directory abc in the root directory.
```

4. What does ../abc mean?

```
# The path ../abc is a reference to the parent directory (..), and the file or directory called "abc" within that directory.
```

5. Suppose you are in a directory with 7 files. You need to move 6 of them into a "temp" directory, that you have yet to create. How do you do that?

```
$ mkdir tmp
$ mv file1 file2 file3 file4 file5 file6 tmp
```
or
```
$ mkdir tmp
$ mv * tmp
$ mv tmp/file1.file ./
```

6. Suppose you have two directories called xyz/ and abc/. How do you move all the files in abc/ that end with ".txt" into xyz/?

```
$ mv abc/*.txt xyz/
```

7. In this exercise we're going to play with executables. We'll find the location of so-called "default executables" by using the which command, then execute a file using its absolute path.

To figure out a default executable's location, you can use the which command:

```
$ which touch
/usr/bin/touch
```







