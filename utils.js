function childrenRunner(arr, fn, props = {}) {
    Array.from(arr).forEach((item) => {
        fn(item, props)
    })
}