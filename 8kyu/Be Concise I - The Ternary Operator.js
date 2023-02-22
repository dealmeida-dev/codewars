// The Challenge: You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:

// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

//Solution:

const a ="You're a(n) "; function describeAge(age){return age<=12?`${a}kid`:age<=17?`${a}teenager`:age<=64?`${a}adult`:`${a}elderly`}