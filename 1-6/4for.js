let fibo = [1, 1];

for (let i = 1; i < 49; i++) {
    fibo.push(fibo[i] + fibo[-1]);
}