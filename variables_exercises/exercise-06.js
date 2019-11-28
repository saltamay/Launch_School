// Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO); // No reassignment to the constant FOO is done within a block scoped