# class-vs-function

This experiment is to determine if using `class` carries any performance benefit
compared to old school inheritance. According to the results of this tests,
it does not.

Cronometro output:


```
╔══════════════╤═══════════╤════════════════════╤═══════════╗
║ Slower tests │   Samples │             Result │ Tolerance ║
╟──────────────┼───────────┼────────────────────┼───────────╢
║ classes      │ 100000000 │ 10264638.51 op/sec │  ± 0.01 % ║
╟──────────────┼───────────┼────────────────────┼───────────╢
║ Fastest test │   Samples │             Result │ Tolerance ║
╟──────────────┼───────────┼────────────────────┼───────────╢
║ functions    │ 100000000 │ 11333164.41 op/sec │  ± 0.01 % ║
╚══════════════╧═══════════╧════════════════════╧═══════════╝
```

Mitata output:

```
clk: ~3.96 GHz
cpu: Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz
runtime: node 20.18.0 (x64-linux)

benchmark              avg (min … max) p75   p99    (min … top 1%)
-------------------------------------- -------------------------------
classes                  18.28 ns/iter  18.24 ns         █
                  (7.04 ns … 66.24 ns)  34.60 ns ▁▁▁▁▁▁▁▁█▂▁▁▁▁▁▁▁▁▁▁▁
functions                 8.65 ns/iter   8.44 ns ▆█
                  (7.93 ns … 54.39 ns)  24.59 ns ██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
```

These results were taken on Node.js v22.9.0 on dedicated HW.

Please send PRs to add more cases, this is more of a learning experience than anything else.

## License

MIT
