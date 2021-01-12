var securityQuestions = [
    {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
   ]
   function chksecurityQuestions(securityQuestions,ques,ans) {
       for(let i=0;i<securityQuestions.length;i++)
       {
           let keys=Object.keys(securityQuestions[i]);
           
           if(securityQuestions[i][keys[0]]==ques)
           {
               if(securityQuestions[i][keys[1]]==ans)
               {
                   return true;
               }
               return false;
           }
       }
       return false;
   }
   console.log("PROBLEM 8.........................................");
var ques1 = 'What was your first pet’s name?';
var a1  =  'FlufferNutter';
let status1=chksecurityQuestions(securityQuestions,ques1,a1);
var ques2 = 'What was your first pet’s name?';
var a2  =  'DufferNutter';
var status2 = chksecurityQuestions(securityQuestions, ques2, a2);
console.log(status1,status2);