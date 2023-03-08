# lit-test-suits

### Build
```shell
./make.sh
```

### Run test-suits
```shell
./xxx.sh
```

---

```json
    "lint": "gts lint",
    "clean": "gts clean",
    "compile": "tsc",
    "fix": "gts fix",
    "prepare": "npm run compile",
    "pretest": "npm run compile",
    "posttest": "npm run lint",
```