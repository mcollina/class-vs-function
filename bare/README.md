These tests were run with the Bear bench [harness](https://github.com/holepunchto/bare/blob/24b89d2d5fd58ad63dbe84bd3d33dc7726be0c51/bench/harness.js), with a patch
to prevent benchmarks to terminate with too few samples.

### Classes

```
$ node class.cjs
TAP version 13

# new Class()
    # 100899348 ops/s
ok 1 - new Class() # time = 60057ms
0
```

### Functions

```
$ node functions.cjs
TAP version 13

# new Function()
    # 106421936 ops/s
ok 1 - new Function() # time = 60092ms
0
```
