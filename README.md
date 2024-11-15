# class-vs-function

This experiment is to determine if using `class` carries any performance benefit
compared to old school inheritance. According to the results of this tests,
it does not.


```
╔══════════════╤══════════╤═══════════════════╤═══════════╗
║ Slower tests │  Samples │            Result │ Tolerance ║
╟──────────────┼──────────┼───────────────────┼───────────╢
║ classes      │ 10000000 │ 5386032.10 op/sec │  ± 0.15 % ║
╟──────────────┼──────────┼───────────────────┼───────────╢
║ Fastest test │  Samples │            Result │ Tolerance ║
╟──────────────┼──────────┼───────────────────┼───────────╢
║ functions    │ 10000000 │ 5550803.25 op/sec │  ± 0.15 % ║
╚══════════════╧══════════╧═══════════════════╧═══════════╝
```

These results were taken on Node.js v22.9.0 on dedicated HW.

Please send PRs to add more cases, this is more of a learning experience than anything else.

## License

MIT
