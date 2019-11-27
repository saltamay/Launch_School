# Other Interfaces

## Changing context in Terminal

We've talked a lot about how the command line is an interface to the files and directories on your computer, and how your current directory and environment variables provide context for what you do on the command line. There are some commands that you'll use on the command line that will completely change the context of the command line. In fact, these commands provide entirely new tools that can help you to interface more directly with files, to query databases, to experiment with scripting languages such as Ruby, JavaScript, and Python, or to otherwise manage your system. The following are the types of commands that change the context of the command line and provide new ways to interface with your computer:

- Database management commands: mysql, psql, redis-client, mongo
- Text editors: vim, pico, nano, emacs
- REPLs (Read-Eval-Print-Loop), which are basically interactive scripting consoles: irb, python, php -a
- System monitoring: top, htop
- Reading files or manuals: man, less, more
- Window/Session handling: byobu, screen, tmux
- Each of the commands above provide an entirely new interface. Once you enter that interface, though, you'll have to exit out of it (usually by typing exit) to get back to the normal command line.

## Read-Eval-Print-Loop (REPL)

Programs that follow the pattern of reading user input, evaluating the input, printing results of the input to the screen, and then allowing for more input, are called "REPLs", or "Read-Eval-Print-Loop" programs or interfaces. The mysql command provides a simple REPL. The bash shell, which is another name for the command line interface that we've discussed in this book, is also a REPL. Interactive interfaces for scripting languages such as Ruby, JavaScript, Python, and Perl are commonly referred to as REPLs—even more so than database clients and command line shells. These REPLs read user input, evaluate it using the scripting language's interpreter, print the result of the programming statement, then provide a prompt for more input.

#### JavaScript REPL (node)

If you don't have Node on your system, the commands in this section won't work. That's okay: you don't need Node right now.

In your console, try using the node REPL. If node is installed, you should see something like this:

```
$ node
Welcome to Node.js v12.13.0.
Type ".help" for more information.
>
```

As with the mysql program, node provides a prompt. As you can see in the following code, the node program evaluates input, then performs what the input tells it to do, then outputs the result of what it did:

```
$ node
Welcome to Node.js v12.10.0.
Type ".help" for more information.
> a = 1
1
> console.log("Hello, world!")
Hello, world!
undefined
>
```

If you type a multi-line piece of code, it will automatically postpone evaluating the input until the statement is finished:

```
$ node
> a = 1
1
> if (a === 2) {
...   console.log("A is 2");
... } else {
...   console.log("A is not 2");
... }
A is not 2
undefined
>
```

Press Control-D or Control-C to leave node.

## Bash: a Special Interface

Sometimes, you may end up in a situation where you're working in a "command line within a command line". This is because the command line interface we've been working in is itself a special interface that can be nested. For example, while using the command line you may think that you're in the normal command line interface, but when you type exit and hit enter, you remain in what appears to be another CLI. This is most likely because you've unknowingly entered another bash (or shell) interface. When on the command line, typing bash, zsh, or similar will create a new nested shell interface for you to work in. You can exit the innermost "shell" by typing exit. When you're in the outermost shell and you type exit, you'll see something like [Process completed] without a way to enter more commands. You'll have to close and restart Terminal at this point and start a new shell. If you're working normally, you should very rarely encounter a nested command line situation, but it can happen.

## Summary

When you open up Terminal and start using it, you may not always be using the default command line: bash. Programs like mysql, vim, and irb provide interfaces of their own right within Terminal. It's very important to understand whether you're in an application-specific REPL, like mysql, or if you're in the bash shell REPL (aka, the command line). Sometimes, the only clue you have is the prompt. But as we've seen earlier, we can even modify the prompt by setting the PS1 environment variable, so it can be quite tricky.