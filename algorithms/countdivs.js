Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.


function solution(A, B, K) {
    let start = A;
    let count = A === 0 ? 1 : 0;

    if (A === B) {
        return A % K ? 0 : 1;
    }

    if (A < K) {
        start = K;
    }

    for (var i = start; i < B + 1; i++) {
        if (i % K === 0) {
            count += parseInt((B - i) / K) + 1;
            break;
        }
    }

    return count;
}
