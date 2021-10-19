# The TimeFlo Project: Design
Joel Crouch 2021

## Introduction

*Introduce this document and the project it describes. You
should also summarize the remaining content of the document
here.*

## Architecture
*
How will this product work?  There will be a "pomodoro" instance where the user may determine the work time 
duration, as well as the rest time duration.  
Will that instance be saved?  It could be.  A "session" could have a user make a work/rest duo time span, and if they 
finish, it could query "Again with same time?" If yes, restart, if no, then ask for new times or quit.
Overall:
1. Enter the program
   a.  an timeflo intance is instantiated
   b.  Query for times(work/rest)
2. Finish the pomodoro 3 times.
   a.  Done-Yes->quit.
   b.  Done->NO->Same time?->Yes:Restart Timeflo with same instance.
                           ->NO: Restart Timeflo with new instance.
Describe the overall architecture of the proposed
implementation.*

*For each component identified in the architecture, describe
briefly what it will do, how it will work, and
implementation risks associated with it.*
