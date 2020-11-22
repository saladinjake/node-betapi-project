function solution(N, A){
  //You are given N counters
  let given = N;
  //initially set to 0, and you have two possible operations on them : increase(X) − counter X is increased by 1,
  given  = new Array(given);
  given.fill(0)

  const increaseOperation = (X) => X + 1; // where X is one of the counters given
  const setMaxCount =(K) => X = K;
  //: max counter − all counters are set to the maximum value of any counter.

  //A[K] means a loop thru the given arrays
  let givenArr = A;
  for(let i =0; i< givenArr.length; i++){
    //task:

    //cond:


    if(givenArr[i] == X){
      //if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
      increaseOperation(X)
    }else if(givenArr[i] = N + 1){
      //max //<br/>if A[K] = N + 1 then operation K is max counter.
      setMaxCount(i)
    }


  }

}

<p>Task name: MaxCounters
    <br/>Calculate the values of counters after applying all alternating operations:
    increase counter by 1; set value of all counters to current maximum.</p>
<br/>
<a href="https://codility.com/programmers/lessons/2">codility.com/programmers/lessons/2</a>
<br/>
<p>You are given N counters, initially set to 0, and you have two possible operations on them:</p>
<code>
    increase(X) − counter X is increased by 1,
    <br/>max counter − all counters are set to the maximum value of any counter.
</code>
<p>A non-empty zero-indexed array A of M integers is given. This array represents consecutive operations:</p>
<code>
    if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
    <br/>if A[K] = N + 1 then operation K is max counter.
</code>
<p>For example, given integer N = 5 and array A such that:</p>
<code>A[0] = 3
    <br/>A[1] = 4
    <br/>A[2] = 4
    <br/>A[3] = 6
    <br/>A[4] = 1
    <br/>A[5] = 4
    <br/>A[6] = 4
</code>
<p>the values of the counters after each consecutive operation will be:</p>
<code>
    (0, 0, 1, 0, 0)
    <br/>(0, 0, 1, 1, 0)
    <br/>(0, 0, 1, 2, 0)
    <br/>(2, 2, 2, 2, 2)
    <br/>(3, 2, 2, 2, 2)
    <br/>(3, 2, 2, 3, 2)
    <br/>(3, 2, 2, 4, 2)</code>
<p>
    The goal is to calculate the value of every counter after all operations.</p>
<p>Write a function:</p>
function solution(N, A);
<p>that, given an integer N and a non-empty zero-indexed array A consisting of M integers, returns a sequence of integers representing the values of the counters.</p>
<p>The sequence should be returned as:
    <br/>a structure Results (in C), or
    <br/>a vector of integers (in C++), or
    <br/>a record Results (in Pascal), or
    <br/>an array of integers (in any other programming language).</p>
<p>For example, given:</p>
<code>
    A[0] = 3
    <br/>A[1] = 4
    <br/>A[2] = 4
    <br/>A[3] = 6
    <br/>A[4] = 1
    <br/>A[5] = 4
    <br/>A[6] = 4</code>
<p>the function should return [3, 2, 2, 4, 2], as explained above.</p>

</body>


/**
 * MaxCounters
 * https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
 * @param {*} N integer within the range [1..100,000]
 * @param {number[]} A is an array (where each element is an integer within the range [1..N + 1])
 */
function solution(N, A) {
    // TODO

    return false;
}

module.exports = solution;
