# The TimeFlo Project: Validation and Verification
Joel Crouch 2021

(*Thanks to Chris Gilmore for the document template for this
document.*)

## Introduction

This is the testing document for TimeFlo.  Testing will involve inspection of the code.

### Purpose and Scope

Developers should read this document.

### Target Audience

Developers should read this document.

### Terms and Definitions

*Define any terms or acronyms you will be using in the remainder of this
document.*

## V&amp;V Plan Description

The code on in main.js will be inspected line by line.  Index.html and style.css will also be inspected.  Refer to MDN
(Mozilla Developer Network) for questions about any functions that are used in the code, or other files. 
## Test Plan Description

Open up the index.html file in a chrome window.  You should be able to add a work phase (5-60 minutes), and a rest phase (5-15 minutes).  The timeflo should execute the work phase 4 times with the same work time, and the rest phase should execute 3 times.  A fourth rest phase will execute, but it will have an additional ten minutes added into the rest phase.

### Scope Of Testing
The test will test the output of the code-ie the chrome page that opens up.  We will not be testing the main.js,
because if the chrome page works, then the code works.


### Testing Schedule

Test every time a change is made.
### Release Criteria

The code will work or it will not.  If the timeflo times (work and rest) operate properly, then the code will be released.


## Unit Testing

Unit test #1: Download the appropriate files, and put them into the same folder.  Open up the index.html, and enter
the following into the "work" input area:  5, and enter the following into the rest input area: 5.

The output should be: 5 min work, bell, 5 min rest, bell, 5 min work, bell, 5 min rest, bell, 5 min work, bell, 5 min rest, bell,5 min work, bell, 15 min rest,bell.

Unit test #2:  Use an input of 6 for rest and 15 for work.  The output should be:15 min work, bell, 6 min rest, bell, 15 min work, bell, 6 min rest, bell, 15 min work, bell, 6 min rest, bell, 15 min work, bell, 16 min rest, bell,

If the output does not match the above, it has failed.
### Strategy

The above unit test will test all the code.

### Test Cases

*Describe your test cases here.*

## System Testing

*Describe the purpose of this section and outline its contents. Only a
few sentences are expected here.*

### Test Cases

*Describe your test cases here.*

## Inspection

*Describe the strategy for inspection of the
project. Include items such as type of inspection, criteria
for inspection, inspection validation. Add as much detail as
needed here to be clear on what the inspection plan is.*
