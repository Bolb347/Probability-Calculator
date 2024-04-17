function factorial(x) {
    for (var i = x - 1; i >= 1; i--) {
        x *= i;
    }
    return x;
}

function combinations(trials, successes) {
    return factorial(trials)/(factorial(trials - successes) * factorial(successes));
}

function binomial_probability(trials, successes, probability) {
    return combinations(trials, successes) * Math.pow(probability, successes) * Math.pow((1 - probability, trials - successes));
}
