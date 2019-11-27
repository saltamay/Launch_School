# The Environment

## Environment Variables

In the last chapter, we talked about how your "current directory" provides context for commands you run. Another way of providing context is through something called environment variables. In programming, variables are used to store data and to be able to reference and retrieve that data at a later point using a name. In the command cd $HOME, the $HOME part is a reference to the HOME variable, and is replaced by the path to your home directory when the command is run. In other words, running cd $HOME is the same as running cd /home/ubuntu, assuming your home directory is /home/ubuntu.

When you log in to the command line, a variety of environment variables are automatically set. You can see exactly what variables have been set, along with their values, by running env at the command line. Type env, hit enter, and find the value for HOME. It should say something like /home/ubuntu, where ubuntu will be replaced by your username. If you're doing this on a Mac, the value will probably be something like /Users/bob. This is the path to your home directory.

## How to Change your Command Line Environment

While there are several environment variables that are set for you automatically, you can also set your own or modify existing variables. You can do this on the fly, so that your changes only affect the current command or the current session, or you can make the changes more permanent so that they stick between sessions.

### Setting Environment Variables on the Fly

There are two ways to set an environment variable on the fly:

1. Set the variable on its own line, then use it anywhere:

```
$ SOMETHING='some value'
$ echo $SOMETHING
some value
```

2. Set the variable before a command, on the same line:

```
$ SOMETHING='a value' env
...
SOMETHING=a value
...
```

Note: You cannot (very easily) use a value on the same line that you set it. That's because variables are evaluated before the setting occurs:

```
$ SOMETHING='something else' echo $SOMETHING
# no output
```

Did you notice that when you set a variable you don't prepend the dollar sign, but when you reference it, you do? Also note that there should be no spaces between the variable and the equal sign or the equal sign and the value. Lastly, it's usually best to use quotations around the value that you are assigning to the variable, but you don't have to when the value doesn't have any special characters.

### Making More Permanent Changes

It is possible to make more permanent changes to the command line environment. When you start a command line session by opening a new Terminal window, one or more environment files are executed. These files can be used to modify or create environment variables. They are usually located in your home directory and include the following files: .bashrc, .bash_profile, .bash_login, .login, .profile. Because they start with a ., they are considered to be "hidden" files, and using the ls command alone won't show them. Type ls -a ~ to see them listed along with other files in your home directory. Remember, the ls is the command, and the -a and ~ are arguments to the ls command. The -a flag tells the ls command to include files that start with . in its output, while the ~ is the directory that ls should inspect (recall that ~ means your "home" directory).

Log in to your console and type the following command:

```
$ cat ~/.bashrc
```

> The cat command reads the file and displays its contents. You should see some lines that start with export. The export command basically means "make this variable available globally," and variable assignment that starts with export in your .bashrc will be included in your environment when you log in. Note that if an environment variable has been exported once, you don't need to continually put export before it when you set its value.
> 
> If you're ready to customize your prompt a bit more permanently, open the .bashrc file in a code editor, and add your custom prompt to the bottom of your .bashrc file:

> ```
> PS1="[your custom prompt goes here] "
> ```
>
> Note: Editing hidden files can be a bit tricky if you've never done it before. The following steps will guide you through editing your .bashrc file.
>
> 1. Open .bashrc with Nano by entering following command:
> 
> ```$ nano ~/.bashrc```
> 2. Place your cursor on the very last line of the file (make sure it's a new, blank line) and paste the following:
>
> ```PS1="[your custom prompt goes here] "```
> 3. Save .bashrc by pressing <Ctrl> + o then <Enter>. Exit Nano by pressing <Ctrl> + x.
>
> 4. Re-run .bashrc by entering the following command:
>
> ```$ source ~```

### Using Environment Variables

Let's look for a moment at the different ways we can use environment variables.

1. As Parts of Commands

First, variables can be used as arguments to commands. Take a look at the following example:

```
$ MESSAGE='Hello, world!'
$ echo $MESSAGE
Hello, world!
```

This is a very simple example, but you can see that the $MESSAGE variable is used as the first (and only) argument to the echo command. You can actually use variables as commands as well:

```
$ MESSAGE='Hello, world!'
$ COMMAND="echo"
$ $COMMAND $MESSAGE
Hello, world!
```

2. Interpolated in Strings

Variables can also be interpolated, or included, in other strings. Take the following example:

```
$ MESSAGE1="This is message 1."
$ MESSAGE2="This is message 2."
$ MESSAGE="$MESSAGE1 $MESSAGE2"
$ echo $MESSAGE
This is message 1. This is message 2.
```

**To have a variable get interpolated, you have to use the double quotation mark ("), not the single quotes ('). Try the following example in your command line.**

```
$ MESSAGE1="This is message 1."
$ MESSAGE2="This is message 2."
$ MESSAGE='$MESSAGE1 $MESSAGE2'
$ echo $MESSAGE
$MESSAGE1 $MESSAGE2
```

3. Behind the Scenes

Environment variables can be used by commands (programs) behind the scenes. In other words, you can set a variable, then run a command without passing the variable as an explicit argument to that command, and the command could use that variable. The PWD variable is automatically used by any command that tries to get the user's current directory. The HOME variable is automatically used by cd when you don't pass any arguments to it. If you make up a custom variable (like PI=3.14), only programs that know about it will be able to use it without explicitly using it as an argument.

If you want to temporarily change a variable before it gets used in a command behind the scenes, you can set the variable immediately preceding the command on the same line:

```
# Set home to root directory and change to home.
$ HOME=/ cd
$ pwd
/

# Change to home directory.
$ cd
$ pwd
/home/ubuntu
```

**Note how the second cd takes you to your original home directory, whereas the first cd takes you to the root directory because that's what you set HOME to.**

## $PATH and Executables

One of the most important environment variables you'll work with on the command line is PATH. In the last chapter, we discussed how commands are really just files, but we didn't talk about how the command line knew which file to execute for commands like cd or echo or other built-in or installed programs. The PATH variable provides the additional context that the command line needs to figure out which particular file to execute. Let's look at a PATH variable's value:

If you examine the output of the echo $PATH command above, you'll see that it is a bunch of paths connected by colons. You may have noticed that most of the paths end in /bin. This is because bin is short for "binary", and bin is a standard directory name for executable files, or programs.

Depending on your computer, different types of files may have different colors. On many computers, for example, executables will probably be colored green. If you look at the files located in your home directory, however, they are probably white and blue, which tells us that they are not executable:

One of the items in the /usr/bin directory is man. If I type man on the command line and hit enter, it will execute that file. How can I be sure that it will execute that file, and not some other file that happens to be named man on my server?

When you type a word into the command line, and it doesn't start with a /, ~, or a . (because those would indicate a path to an actual file), the command line will search each of the directories listed in the PATH environment variable for that command. So when we type man and hit enter, the CLI searches /usr/local/sbin, then /usr/local/bin since those are first in the list. It then moves on through the list of directories until it finds a file named "man" in one of them. It then stops searching and executes the file. We can verify which file is getting executed by using the which command:

```
$ which touch
/usr/bin/touch
```

You can create or install executables. To make it so that a custom executable can be used like a built-in command, all you have to do is make sure it has the correct permissions (discussed in the next chapter), and add the path to the directory it is contained in to the PATH variable in ~/.bashrc:

```
PATH="/path/to/my/executables-directory:$PATH"
```

Note how we added the executables directory, then the colon, then the $PATH variable again. This preserves the old PATH locations while making your directory the highest priority. We're adding our directory to the top of the list.

Note that if this path you're adding to the $PATH environment variable contains an executable file called "man", then when you type man from the command line, this new file will be executed instead of the correct one in /usr/bin. The path lookup rules for all commands relies heavily on managing this $PATH environment variable carefully.

To sum up:

- The PATH variable determines which directories are searched when a command is entered
- PATH is an ordered, colon-delimited, list of directories that contain executables
- The order of the directories in the PATH variable is first-found-first-execute
- If you use a /, ., or ~ before your command, the command line will interpret that as an actual path to a file, and will not use the PATH variable
- You can add to PATH to make more commands available without having to memorize their exact path
- Modifications to PATH, or any environment variable, on the fly will not be permanent; permanent modifications should be done in an environment file, like .bashrc

## Exercises

1. Run the following commands to experiment with altering your command line environment:

```
$ cd
$ PS1="\u@\w$ "
ubuntu@~$ echo "Hello world"
Hello world
ubuntu@~$
```

Exit out of Terminal (make sure to close each tab and window if you are on a Mac) and open it up again. What does your prompt look like now? The value you set PS1 to above should no longer be in effect.

Set your prompt in your ~/.bashrc file:

```
$ echo 'export PS1="this is a test$ "' >> ~/.bashrc
```

> The redirection operator (>>) is used to append text to a file. If the target file doesn't exist, then it will be created.

Exit and open up a new terminal. You should see something like this:

```
this is a test$
```

Edit the ~/.bashrc file, remove the last line, and run source ~/.bashrc to return your prompt to its previous state.




