//  Chapter #1 

// alert( "hello World") 
// alert("Error! Please enter a valid password.") 
// alert("Welcome to JS Land... \n Happy Coding!") 
// alert("Welcome to JS Land...") 
// alert("Happy Coidng!") 
// console.log("Hello... I can run JS through my web browser's console")

// Chapter #2

// var username="";
// var myname="Sharjeel"
// var title="Hello World"
// alert(title)
// alert("Sharjeel")
// alert("18 yrs old")
// alert("Certified Mobile Developer")
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP")
// var email="My email address is example@example.com"
// alert(email)
// var message="i am trying to learn from the book A smarter \nway  to learn javascript"
// alert(message)
// document.write('Yah! I can write HTML content through javascript')
// alert(' “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ')

// Chapter #3
 
// var age=19
// alert(age)
// var message="You have visited this time 14 times"
// alert(message)
// var birthYear="2000"  
// document.write("My birthYear is"+" " +birthYear)
// var VisitorName='sharjeel' ; 
// var Producttitle="T-shirts" ;
// var Quantity=5;
// document.write( VisitorName  + " " + 'ordered' + " " + Quantity + " " + Producttitle)

// Capter no 4 "VARIABLE NAMES: LEGAL & ILLEGAL"


// Q1

// var $firstNo = 2;
// var _secondNo = 4;
// var sum = $firstNo + _secondNo;
// alert(sum);



// Q2
// Legal Variable names

// var $abc;
// var _xyz;
// var myName;
// var User_name;
// var user1;


//illegal Variable names

// var 1abc;
// var #user;
// var *student;
// var user name;
// var 1234;




// Q3

// var heading = " <h2> Rules for Naming JS Variable </h2>";
// var rule1 = "Variable names can only contain letters , numbers , $ and _ (underscore). For example my_Name , $user";
// var rule2 = "Variables must begin with a letter , _  or $ . For example $name, _name or name";
// var rule3 = "Variable names are case sensitive";
// var rule4 = "Variable names should not be JS keywords";

// document.write( heading + "<br>" + rule1 + "<br>" + rule2 + "<br>" + rule3 + "<br>" + rule4 );





// Chapter no 5 "MATH EXPRESSIONS"



// Q1

//For Addition of two number

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a+b;
// document.write("Sum of " + a +" and " + b + " is " + c);



// Q2

// For Subtraction of two numbers

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a-b;
// document.write("Difference of " + a +" and " + b + " is " + c);



// For Multiplication of two numbers

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a*b;
// document.write("Product of " + a +" and " + b + " is " + c);



// For Division of two numbers

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a/b;
// document.write("Ratio of " + a +" and " + b + " is " + c);



// For Modulus of two numbers

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// var c = a%b;
// document.write("Modulus of " + a +" and " + b + " is " + c);




// Q3


// var number1;
// document.write("Value after variable decleration is : " + number1);
// number1 = 5;
// document.write("<br>")
// document.write("Initial Value : " + number1);
// number1++;
// document.write("<br>")
// document.write("Value after increment is " + number1);
// var nums = number1 + 7;
// document.write("<br>");
// document.write("Value after addition is " + nums);
// nums--;
// document.write("<br>")
// document.write("Value after decrement is " + nums)
// var divideNo = nums/3;
// document.write("<br>");
// document.write("Value after division with 3 is " + divideNo);
// document.write("<br>")
// document.write("The remainder is 0 ")




// Q4

// var costOfOne = 600;
// alert("Cost of 1 ticket is " + costOfOne + " PKR ");
// var quantity = +prompt("How many tickets do you want?");
// var totalCost = costOfOne*quantity;
// document.write("The total cost to buy " + quantity + " tickets to a movie is " + totalCost + " PKR ");




// Q5

// var a = +prompt("Enter number for printing table");
// for(i=1;i<=10;i++){
//     document.write(a+" x "+i+" = "+a*i+"<br>");
// }




// Q6


// Converts Celcius into Farenheit

// var C = +prompt("Enter temperature in Celcius");
// var Farenheit = (C*9/5)*32;
// document.write(C+" C is equal to "+Farenheit+" F ");



// Converts Farenheit into Celcius

// var F = +prompt("Enter temperature in Farenheit");
// var Celcius = (F-32)*5/9;
// document.write(F+" F is equal to "+Celcius+" F ");




// Q7

// var shirtPrice = 700;
// alert("Price of Shirt is "+shirtPrice);
// var shirtQuantitity = +prompt("How many Shirts you want to purchase");

// var jeanssPrice = 800;
// alert("Price of jeans is "+jeanssPrice);
// var jeansQuantity = +prompt("How many Jeans you want to purchase");

// var totalShirtPrice = shirtPrice*shirtQuantitity;
// var totalJeansPrice = jeanssPrice*jeansQuantity;
// var shippingCharges = 100;
// var totalBill = totalShirtPrice + totalJeansPrice + shippingCharges;
// document.write("Price of Shirt is "+shirtPrice+"<br>");
// document.write("Quantity of Shirt is "+shirtQuantitity+"<br>");
// document.write("Price of jeans is "+jeanssPrice+"<br>");
// document.write("Quantity of Jeans is "+jeansQuantity+"<br>");
// document.write("Shipping Charges "+shippingCharges+"<br>");
// document.write("Total cost of your order is "+totalBill);




// Q8

// var marksObtained = +prompt("Enter marks obtained");
// var totalMarks = +prompt("Enter total marks");
// var percentage = marksObtained/totalMarks*100;
// document.write("<h1>Marks Sheet</h1>")
// document.write("Total marks : "+totalMarks+"<br>");
// document.write("Marks Obtained : "+marksObtained+"<br>");
// document.write("Percentage : "+percentage+" % ");




// Q9

// var dollar = 157.01;
// var riyal = 41.86;
// var rupees = (10*dollar)+(25*riyal);
// document.write("<h1> Currency in PKR</h1>"+"<br>");
// document.write("Total currency in PKR : "+rupees);





// Q10

// var a = 5;
// var b = a+5*10/2;
// document.write("B = "+b);




// Q11

// var birthYear = +prompt("Enter Your birth year");
// var currentYear = +prompt("Enter current year");
// var age = currentYear - birthYear;
// document.write(" Current Year : "+currentYear+"<br>");
// document.write("Birth Year : "+birthYear+"<br>");
// document.write("Your Age :"+age);




// Q12

// var r = +prompt("Enter radius of circle");
// var pie = 3.142;
// var circumference = 2*pie*r;
// var area = pie*(r*r);
// document.write("<h1> The Geometrizer </h1>"+"<br>");
// document.write("The Circumference is :"+circumference+"<br>");
// document.write("The Area is : "+area);




// Q13

// var snackName = prompt("What is your favourite snack ? ");
// var currentAge = +prompt("What is your current age ?")
// var maxAge = 65;
// var snacksPerDay = +prompt("How many snacks you eat per day ?")
// var totalSnacks = snacksPerDay*(65-currentAge)*365;
// document.write("<h1> The Life Time Supply Calculator</h1>"+"<br>");
// document.write("Favourite Snack : "+snackName+"<br>");
// document.write("Current Age : "+currentAge+"<br>");
// document.write(" Estimated Maximum Age : "+maxAge+"<br>");
// document.write("Amount of snacks per day : "+snacksPerDay+"<br>");
// document.write(" You will need "+totalSnacks+" snacks to last you until the ripe old age of"+maxAge);


// MATH EXPRESSIONS
// ASSIGHNMENT NO 6
// Chp 6-9




// Q1


// var a = 10;
// document.write("<h2> Result : </h2>"+"<br>");
// document.write("The value of a is : "+ a +"<br>");
// document.write("........................................"+"<br>"+"<br>")

// document.write("The value of ++a is : "+ ++a +"<br>");
// document.write("Now the value of a is : "+a+"<br>"+"<br>");

// document.write("The value of a++ is :"+ a++ +"<br>");
// document.write("Now the value of a is : "+ a +"<br>"+"<br>");

// document.write("The value of --a is : "+ --a +"<br>");
// document.write("Now the value of a is : "+ a +"<br>"+"<br>");

// document.write("The value of a-- is : "+ a-- +"<br>");
// document.write("Now the value of a is : "+ a);




// Q2

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is : "+ a +"<br>");
// document.write("b is : "+ b +"<br>");
// document.write("result is : "+ result);



//  Q3


// var yourName = prompt("What is your name ? ");
// alert("Hello " + yourName);




// Q5


// var a = +prompt("Enter the number you for table : ");
// for (i = 1; i <= 10; i++) {

//     if (a == "") {

//         document.write(5 + " x " + i + " = " + 5 * i + "<br>");
//     }
//     else {
//         document.write(a + " x " + i + " = " + a * i + "<br>");
//     }
// }




// Q6


// var subject1 = prompt("Enter first Subject name");
// document.write( subject1  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + tmForEach  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + sub1marks  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+sub1marks+"%"  +"<br>" +"<br>");
// var subject2 = prompt("Enter second Subject name");
// document.write( subject2  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + tmForEach  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + sub2marks   + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+sub2marks+"%" + "<br>"+"<br>");
// var subject3 = prompt("Enter third Subject name");
// document.write( subject3  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + tmForEach  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + sub3marks   + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+sub3marks+"%" + "<br>"+"<br>");
// var tmForEach = 100;
// var sub1marks = +prompt("Enter marks of first Subject");
// var sub2marks = +prompt("Enter marks of second Subject");
// var sub3marks = +prompt("Enter marks of third Subject");
// var totalMarks = tmForEach*3;
// var obtMarksTotal = sub1marks + sub2marks + sub3marks;
// var totalperc = obtMarksTotal/totalMarks*100;
// document.write("Subject" + "&nbsp &nbsp &nbsp &nbsp &nbsp" + "Total Marks" + "&nbsp &nbsp &nbsp &nbsp &nbsp" + "Obtained Marks" + "&nbsp &nbsp &nbsp &nbsp &nbsp" + "Percentage" + "<br>"+"<br>");
// document.write(  "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + totalMarks  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + obtMarksTotal  + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + totalperc )






////   USER INPUT & CONDITIONAL STATEMENT
////   Assignment # 9-10
////   Chp 9-12




// Q1


// var a = ["Karachi","lahore"];
// var city = prompt("Enter your city name");
// if(city==a[0]){
//     document.write("Welcome to city of lights");
// }
// else{
//     document.write("Welcome to " + city);
// }




// Q2


// var gender = prompt("What is your grnder ? ");
// if(gender=="male"){
//     document.write("Good Morning Sir !");
// }
// else{
//     document.write("Good Morning Ma’am !");
// }




// Q3


// var color = prompt("Enter input color for road signal");
// if(color=="red"){
//     document.write("Must Stop")
// }
// else if(color=="green"){
//     document.write("Move Now")
// }
// else if(color=="yellow"){
//     document.write("Ready to move")
// }
// else{
//     document.write("Please enter valid color");
// }





// Q4


// var currentFuel = +prompt("Enter current fuel you have in litres :");
// if(currentFuel<0.25){
//     document.write("Please Refill the fuel in your car");
// }
// else{
//     document.write("You have enough fuel");
// }





// Q6


// var maxMarks = 100;
// var sub1 = +prompt("Enter Marks scored in Math");
// var sub2 = +prompt("Enter Marks scored in Physics");
// var sub3 = +prompt("Enter Marks scored in Computer");
// var MaxTotal = maxMarks*3;
// var obtMarks = sub1 + sub2 + sub3;
// var perc = obtMarks/MaxTotal*100;
// var grade = [];
// var remarks = [];
// document.write("<h1> Marks Sheet </h1>" + "<br>");
// document.write("Total Marks : " + MaxTotal + "<br>");
// document.write("Marks Obtained : " + obtMarks + "<br>");
// document.write("Percentage : " + perc+"%" + "<br>");
// document.write("Grade : " + grade +"<br>");


// if(perc >= 80 && perc <=100){
//     grade = document.write("A")
// }
// else if (perc<80 && perc >=50){
//     grade = document.write("B");
// }
// else if(perc<=50 && perc >= 33){
//     grade = document.write("c")
// }
// else{
//     grade = document.write("F");
// }


// document.write("<br>");
// document.write("Remarks " + remarks + "<br>");


// if(perc >= 80 && perc <=100){
//     remarks = document.write("You scored very good marks")
// }
// else if (perc<80 && perc >=50){
//     remarks = document.write("You need improvement");
// }
// else if(perc<=50 && perc >= 0){
//     remarks = document.write("You are fail")
// }
// else{
//     remarks = document.write("Error !");
// }





// Q7


// var a = 10;
// var guess = +prompt("Enter your guess number");
// if(guess==a){
//     document.write("Bingo! Correct answer")
// }
// else if(guess== a+1){
//     document.write("Close enough to the correct answer")
// }
// else{
//     document.write("You guesses wrong")
// }




// Q8


// var no = +prompt("Enter number to check whether it is divisible by 3 or not");
// if(no%3==0){
//     document.write("The number is divisible by 3")
// }
// else{
//     document.write("The number is not divisible by 3");
// }





// Q9


// var no =  +prompt("Enter number to check whether it is even or odd");
// if (no%2==0){
//     document.write("Number is Even");
// }
// else if(no%2!=0){
//     document.write("Number is Odd");
// }
// else{
//     document.write("Number is not even nor odd");
// }





// Q10


// var T = +prompt("Enter temperature in C");
// if(T > 40){
//     document.write("It is too hot outside")
// }
// else if (T > 30){
//     document.write("The Weather today is Normal")
// }
// else if (T > 20){
//     document.write("Today’s Weather is cool")
// }
// else if (T >= 10){
//     document.write("“OMG! Today’s weather is so Cool.”")
// }
// else if(T < 10){
//     document.write("Its C0ld")
// }
// else{
//     document.write("Error");
// }






// Q11


// var a = +prompt("Enter First Number");
// var operation = prompt("Enter operation to be performed");
// var b = +prompt("Enter Second Number");
// if (operation=="+"){
//     document.write(a+b);
// }
// else if (operation=="-"){
//     document.write(a-b);
// }
// else if (operation=="*"){
//     document.write(a*b);
// }

// else if (operation=="/"){
//     document.write(a/b);
// }

// else if (operation=="%"){
//     document.write(a%b);
// }
// else{
//     document.write("Error! Invalid operation")
// }



// Chapter no 12 to 14



// var a=prompt("Enter ASCII of string or number");
// if(a>=65 && a<=90)
// {
//     document.write("Uppercase letter");
// }
// else
// if(a>=97 && a<=122)
// {
//     document.write("lowercase letter");
// }
// else
// if(a>=48 && a<=57)
// {
//     document.write("number/digits");
// }
// else
// {
//     document.write("Invalid");
// }


// var a=prompt("Enter 1st integer");
// var b=prompt("Enter 2nd integer");
// if(a>b)
// {
//     document.write("larger value is: "+a);
// }
// else
// if(a<b)
// {
//     document.write("larger value is: "+b);
// }
// else
// if(a===b)
// {
//     document.write("Both integers are equal");
// }
// else
// {
//     document.write("invald");
// }

// var a=+prompt("Enter any integer");
// if(a>=0)
// {
//     document.write("Positive Number ");
// }
// else
// if(a<0)
// {
//     document.write("Negative Number");
// }
// else
// {
//     document.write("invald");
// }

// var a=prompt("Enter a character");
// if(a==="a" || a==="A" || a==="e" || a==="E"|| a==="i" || a==="I" || a==="o" ||a==="O" || a==="u" || a==="U")
// {
//     document.write("Character is Vowel");
// } 
// else
// {
//     document.write("Character is consonant");
// }


// var pass="rafay123";
// var pwd=prompt("Enter your password:");
// if(pwd===pass)
// {
//     document.write("Correct! The password you entered matches the original password");
// }
// else 
// {
//     document.write("Incorrect Password"); 
// }

// var greeting;
// var hour = +prompt("Enter hour");
// if (hour < 18) 
// {
//     greeting = "Good day";
//     document.write(greeting);
// }
// else
// {
//     greeting = "Good evening";
//     document.write(greeting);
// }


// var a=+prompt("Type time in 24 hour formate without using space or special character");
// if(a>=0100 && a<=2400)
// {
//     document.write("time is "+a+" o'clock");
// }
// else
// {
//     document.write("invalid input");
// }


                                                        //  CHAPTER:14 TO 16
// 

// var array=["","",""];
// 

// var myarray=[];
// myarray[0]="";
// myarray[1]="";
// myarray[2]="";

// 

// var array=["a","b","c"];
// 

// var array=[2,4,8];
// 

// var a=[0,1];
// 

// // var a=[2,"ali",5,"zia"];
// 

// var edu=["1)SSC","2)HSC","3)BCS","4)BS","5)BCOM","6)MS","7)M.Phil.","8)PhD"];
// document.write("Qualification"+"<br>"+edu[0]+"<br>"+edu[1]+"<br>"+edu[2]+"<br>"+edu[3]+"<br>"+edu[4]+"<br>"+edu[5]+"<br>"+edu[6]+"<br>"+edu[7]);

// var n=["ali","zia","zain"];
// var s=[300,350,425];
// per1=s[0]*100/500;
// per2=s[1]*100/500;
// per3=s[2]*100/500;
// document.write("score of "+n[0]+" is "+s[0] +".Percentage "+per1+"%");
// document.write("<br>"+"score of "+n[01]+" is "+s[1]+".Percentage "+per2+"%");
// document.write("<br>"+"score of "+n[2]+" is "+s[2]+".Percentage "+per3+"%");
// 

// var array=[1,3,5,4,2]
// array.sort();
// document.write(array);

// var city=["karachi", "lahore", "islamabad", "quetta","peshawar"];
// var s_city=[city[0],city[1],city[3]]
// document.write("Cities List:"+"<br>"+city);
// document.write("<br>"+"<br>"+"Selected Cities List:"+"<br>"+s_city);
// 

// var array=["this","is","my","cat"]
// document.write("array:"+"<br>"+array);
// document.write("<br>"+"<br>"+"String:"+"<br>"+array[0]+"&nbsp"+array[1]+"&nbsp"+array[2]+"&nbsp"+array[3]);


// var arr=["monitor","printer","keyboard","mouse"];
// document.write("Devices:\n"+arr);
// c=arr.shift();
// document.write("<br>"+"out: "+c );
// c=arr.shift();
// document.write("<br>"+"out: "+c);
// c=arr.shift();
// document.write("<br>"+"out: "+c);
// c=arr.shift();
// document.write("<br>"+"out: "+c);


// var arr=["monitor","printer","keyboard","mouse"];
// document.write("Devices:\n"+arr);
// c=arr.pop();
// document.write("<br>"+"out: "+c );
// c=arr.pop();
// document.write("<br>"+"out: "+c);
// c=arr.pop();
// document.write("<br>"+"out: "+c);
// c=arr.pop();
// document.write("<br>"+"out: "+c);


// var a=["Apple" , "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
// document.write("Store Phone Manufacturers:"+"<br>"+a[0]+"<br>"+a[1]+"<br>"+a[2]+"<br>"+a[3]+"<br>"+a[4]+"<br>"+a[5]);






























