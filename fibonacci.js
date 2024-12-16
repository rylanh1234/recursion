function fibs(n) {
    const fibSeq = [0];
    let twoBeforeN = 1;
    let oneBeforeN = 0;
    let i = 0;
    while (i < n) {
        const fibN = twoBeforeN + oneBeforeN;
        fibSeq.push(fibN);
        if (i > 1) {
            oneBeforeN = twoBeforeN;
            twoBeforeN = fibN;
        }
        i++;
    }
    return fibSeq;
}

function fibsRec(n, fibSeq = [0,1]) {
    console.log("This was printed recursively");
    if (n === 1) {
        return fibSeq.splice(0,1);
    }
    else if (n === 2) {
        return fibSeq;
    }
    else if (n > fibSeq.length) {
        // keep adding last two numbers until sequence of length n
        fibSeq.push(fibSeq[fibSeq.length-2] + fibSeq[fibSeq.length-1]);
        if (n === fibSeq.length) {
            return fibSeq;
        }
        else {
            return fibsRec(n, fibSeq);
        }
    }
}

// console.log(fibs(8));
console.log(fibsRec(8));